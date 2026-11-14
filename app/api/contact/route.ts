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
  call: "A first call",
  ledgerwright: "Buy Ledgerwright",
  "ledgerwright-call": "Talk about Ledgerwright",
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

// A light per-address limit so the form cannot be used to flood the inbox. Held in memory, so it resets on restart.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });

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
