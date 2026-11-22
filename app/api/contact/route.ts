import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "hello@gainwright.ai";
const FROM = process.env.CONTACT_FROM || "Gainwright website <hello@gainwright.ai>";

type Fields = Record<string, unknown>;

/** One short line of text: no line breaks, capped length. */
function line(v: unknown, max = 200): string {
  return typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";
}
/** Free text: line breaks kept, capped length. */
function text(v: unknown, max = 4000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

const INTERESTS: Record<string, string> = {
  call: "A discovery call",
  audit: "An audit",
  fitted: "A custom build",
  claude: "Claude set up for our business",
};

/** Turns a form payload into an email, or returns null if it is not a valid submission. */
function compose(body: Fields): { subject: string; lines: string[]; replyTo: string } | null {
  const email = line(body.email, 254);
  if (!isEmail(email)) return null;

  if (body.type === "call-request") {
    const name = line(body.name), company = line(body.company);
    if (!name || !company) return null;
    const interest = line(body.interest);
    return {
      subject: `Call request: ${name}, ${company}`,
      replyTo: email,
      lines: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${company}`,
        `Website: ${line(body.website) || "-"}`,
        `Turnover: ${line(body.turnover) || "-"}`,
        `Here for: ${INTERESTS[interest] || interest || "-"}`,
        `Books: ${line(body.books) || "-"}`,
        `Wants to start: ${line(body.when) || "-"}`,
        `Heard about us: ${line(body.heard) || "-"}`,
        "",
        "Where the hours go:",
        text(body.hours) || "-",
      ],
    };
  }
  if (body.type === "guide") {
    return { subject: `Guide request: ${email}`, replyTo: email, lines: [`${email} asked for Guide 01.`] };
  }
  if (body.type === "scorecard") {
    const jobs = Array.isArray(body.jobs) ? body.jobs.slice(0, 8).map((j) => line(j)).filter(Boolean) : [];
    const score = Number.isInteger(body.score) ? (body.score as number) : jobs.length;
    return {
      subject: `Scorecard: ${email}, ${score} of 8`,
      replyTo: email,
      lines: [`${email} asked for their scorecard list.`, `Score: ${score} of 8`, "", "Jobs ticked:", ...(jobs.length ? jobs.map((j) => `- ${j}`) : ["-"])],
    };
  }
  return null;
}

// Limits so the form cannot be used to flood the inbox. Held in memory, so they reset on restart.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_ADDRESS = 5; // per visitor address, per window
const MAX_OVERALL = 40; // across all visitors, per window; holds even if addresses are faked
const hits = new Map<string, number[]>();
let overall: number[] = [];

/**
 * The visitor's address. The site sits behind Cloudflare, which sets CF-Connecting-IP itself and
 * overwrites any value the visitor sends. Failing that, use the last X-Forwarded-For entry, which is
 * the one added by our own proxy; earlier entries are whatever the visitor chose to send.
 */
function clientAddress(req: Request): string {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const forwarded = (req.headers.get("x-forwarded-for") || "").split(",").map((p) => p.trim()).filter(Boolean);
  return forwarded[forwarded.length - 1] || "unknown";
}

function limited(address: string): boolean {
  const now = Date.now();
  const fresh = (t: number) => now - t < WINDOW_MS;
  overall = overall.filter(fresh);
  if (hits.size > 2000) {
    // Drop addresses with nothing recent, oldest first, so the table cannot grow without bound.
    for (const [key, times] of hits) {
      if (!times.some(fresh) || hits.size > 2000) hits.delete(key);
      if (hits.size <= 1000) break;
    }
  }
  const recent = (hits.get(address) || []).filter(fresh);
  if (recent.length >= MAX_PER_ADDRESS || overall.length >= MAX_OVERALL) {
    hits.set(address, recent);
    return true;
  }
  recent.push(now);
  hits.set(address, recent);
  overall.push(now);
  return false;
}

export async function POST(req: Request) {
  let body: Fields;
  try {
    const raw = await req.text();
    if (raw.length > 20000) return NextResponse.json({ ok: false, error: "Too large" }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const mail = body && typeof body === "object" ? compose(body) : null;
  if (!mail) return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  // Counted only once a submission is valid, so junk requests cannot use up the allowance.
  if (limited(clientAddress(req))) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without mail settings: show the email in the terminal instead of sending it.
      console.log(`[contact] SMTP not configured. Would send to ${TO}:\n${mail.subject}\n${mail.lines.join("\n")}`);
      return NextResponse.json({ ok: true, delivered: false });
    }
    console.error("[contact] SMTP_HOST, SMTP_USER and SMTP_PASS are not set; submission not sent.");
    return NextResponse.json({ ok: false, error: "Mail is not configured" }, { status: 503 });
  }

  try {
    const port = Number(SMTP_PORT) || 465;
    const transport = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transport.sendMail({ from: FROM, to: TO, replyTo: mail.replyTo, subject: mail.subject, text: mail.lines.join("\n") });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
