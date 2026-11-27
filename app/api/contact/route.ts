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
/** A list of short answers, joined on one line. */
function list(v: unknown): string {
  return Array.isArray(v) ? v.slice(0, 12).map((x) => line(x, 60)).filter(Boolean).join("; ") : "";
}
/**
 * One plain address and nothing else. Deliberately strict, because the scorecard sends mail to this
 * address: no commas, semicolons, brackets, quotes or spaces that a mail library could read as a
 * second recipient or a display name.
 */
function isEmail(v: string): boolean {
  return v.length <= 254 && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/.test(v);
}

// Where visitors are sent to book: the seven questions on their own page, which lead on to the calendar.
const BOOKING_URL = "https://gainwright.ai/book";
const REPLY_FROM = process.env.CONTACT_REPLY_FROM || "Gainwright <hello@gainwright.ai>";
const REPLY_TO = process.env.CONTACT_REPLY_TO || "hello@gainwright.ai";

/**
 * The eight scorecard jobs, as written in components/sections/FirstCall.tsx. The reply to a visitor
 * only ever contains jobs from this list, so the form cannot be used to send someone arbitrary text.
 */
const SCORECARD_JOBS = [
  "Bank lines reconciled in your accounts every morning",
  "A fitted connector between the two systems",
  "An inbox agent that turns emails into tasks with owners",
  "A quote drafter working from the last fifty you won",
  "A weekly exceptions report, before the customer calls",
  "A management report that writes itself from your accounts and your CRM",
  "A credit-control agent that chases, politely, on schedule",
  "Your written way of working, loaded into Claude",
];

type Mail = { subject: string; lines: string[]; replyTo: string; visitor?: { to: string; subject: string; lines: string[] } };

// Limits on the reply sent to visitors, separate from and tighter than the limits on notifying us, so
// the form cannot be used to mail a stranger repeatedly. Held in memory, so they reset on restart.
const REPLY_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_REPLIES_PER_RECIPIENT = 2; // per mailbox, per day
const MAX_REPLIES_PER_SENDER = 3; // per visitor network address, per day, so one visitor cannot use up the overall allowance
const MAX_REPLIES_OVERALL = 60; // across everyone, per day
const replies = new Map<string, number[]>();

/**
 * The mailbox an address delivers to, as far as we can tell, so that variants of one address share a
 * limit: case is ignored, a "+tag" is dropped, and Gmail's dots and its googlemail.com name are folded.
 */
function mailbox(address: string): string {
  const at = address.lastIndexOf("@");
  let local = address.slice(0, at).toLowerCase().split("+")[0];
  let domain = address.slice(at + 1).toLowerCase();
  if (domain === "googlemail.com") domain = "gmail.com";
  if (domain === "gmail.com") local = local.replace(/\./g, "");
  return `${local}@${domain}`;
}

/** Records and allows a reply to this address from this sender, or returns false if either has had its share. */
function mayReply(address: string, sender: string): boolean {
  const now = Date.now();
  const fresh = (t: number) => now - t < REPLY_WINDOW_MS;
  let total = 0;
  for (const [key, times] of replies) {
    const kept = times.filter(fresh);
    if (kept.length) { replies.set(key, kept); if (key.startsWith("to:")) total += kept.length; } else replies.delete(key);
  }
  const toKey = `to:${mailbox(address)}`;
  const fromKey = `from:${sender}`;
  const to = replies.get(toKey) || [];
  const from = replies.get(fromKey) || [];
  if (to.length >= MAX_REPLIES_PER_RECIPIENT || from.length >= MAX_REPLIES_PER_SENDER || total >= MAX_REPLIES_OVERALL) return false;
  replies.set(toKey, [...to, now]);
  replies.set(fromKey, [...from, now]);
  return true;
}

/** The email a visitor gets back after asking for their scorecard list. */
function scorecardReply(jobs: string[]): { subject: string; lines: string[] } {
  const opening = jobs.length
    ? [`You ticked ${jobs.length} of 8. Here is what we would fit for each:`, "", ...jobs.map((j, i) => `${i + 1}. ${j}`)]
    : ["You ticked none of the eight, which means the business is already running tighter than most."];
  const next = jobs.length
    ? "The next step is a free 20 minute call. You walk us through one of these jobs and leave with a rough figure for what it costs you a year."
    : "If there is a job that eats the week and was not on the list, there is a free 20 minute call. You walk us through it and leave with a rough figure for what it costs you a year.";
  return {
    subject: "Your list: the jobs AI should already be doing for you",
    lines: [...opening, "", next, "", `Answer seven short questions and pick a time: ${BOOKING_URL}`, "", "Or just reply to this email.", "", "Don Demetrius", "Gainwright", "gainwright.ai"],
  };
}

/** Turns a form payload into an email, or returns null if it is not a valid submission. */
function compose(body: Fields): Mail | null {
  const email = line(body.email, 254);
  if (!isEmail(email)) return null;

  if (body.type === "call-request") {
    const name = line(body.name), company = line(body.company), about = text(body.about, 1500);
    if (!name || !company || !about) return null;
    const time = list(body.time), timeOther = line(body.timeOther), systems = list(body.systems), systemsOther = line(body.systemsOther);
    return {
      subject: `Call booking: ${name}, ${company}`,
      replyTo: email,
      lines: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${company}`,
        "",
        "1. What the business does, and how many people:",
        about,
        "",
        `2. Takes up time: ${time || "-"}${timeOther ? ` (something else: ${timeOther})` : ""}`,
        `3. Would most like never to do again: ${line(body.never) || "-"}`,
        `4. Hours a week on that job, everyone involved: ${line(body.week) || "-"}`,
        `5. Tried already: ${list(body.tried) || "-"}`,
        `6. Systems: ${systems || "-"}${systemsOther ? ` (other: ${systemsOther})` : ""}`,
        `7. Budget this quarter: ${line(body.budget) || "-"}`,
        "",
        "They were sent on to the calendar to pick a time. If no booking follows, they answered but did not book.",
      ],
    };
  }
  if (body.type === "scorecard") {
    const sent = Array.isArray(body.jobs) ? body.jobs.slice(0, 8).map((j) => line(j)) : [];
    const jobs = SCORECARD_JOBS.filter((j) => sent.includes(j));
    const score = jobs.length;
    return {
      subject: `Scorecard: ${email}, ${score} of 8`,
      replyTo: email,
      lines: [`${email} asked for their scorecard list.`, `Score: ${score} of 8`, "", "Jobs ticked:", ...(jobs.length ? jobs.map((j) => `- ${j}`) : ["-"])],
      visitor: { to: email, ...scorecardReply(jobs) },
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
    // Decided before we are notified, so our copy says whether the visitor was sent their list or needs it sending by hand.
    const reply = mail.visitor && mayReply(mail.visitor.to, clientAddress(req)) ? mail.visitor : null;
    const note = !mail.visitor ? [] : ["", reply ? "They have been emailed their list automatically." : "NOT emailed their list: the daily limit for automatic replies was reached. Reply to this email to send it by hand."];
    await transport.sendMail({ from: FROM, to: TO, replyTo: mail.replyTo, subject: mail.subject, text: [...mail.lines, ...note].join("\n") });
    if (reply) {
      // The visitor was promised their list by email. If this second send fails, say so, so the page shows its fallback message.
      const v = reply;
      // The recipient is passed as a single structured address, so it can never be split into several.
      await transport.sendMail({ from: REPLY_FROM, to: { name: "", address: v.to }, replyTo: REPLY_TO, subject: v.subject, text: v.lines.join("\n") });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
