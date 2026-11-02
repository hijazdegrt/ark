import { NextResponse } from "next/server";
import { interests } from "@/lib/content";

/**
 * Contact enquiry endpoint.
 *
 * Delivery is configured server-side only, so no secret ever reaches the browser:
 *   CONTACT_WEBHOOK_URL    HTTPS endpoint that accepts a JSON POST (Formspree, Make, Zapier, n8n, your own API...)
 *   CONTACT_WEBHOOK_TOKEN  optional; sent as "Authorization: Bearer <token>"
 *
 * When CONTACT_WEBHOOK_URL is not set the endpoint answers 503 so the form says plainly
 * that the message was NOT sent. See README, "Contact form integration".
 */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  // honeypot: pretend success so bots learn nothing
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const data = {
    name: str(body.name, 120),
    email: str(body.email, 200),
    company: str(body.company, 160),
    title: str(body.title, 120),
    interest: str(body.interest, 80),
    message: str(body.message, 4000),
  };
  if (
    data.name.length < 2 ||
    !emailRe.test(data.email) ||
    data.company.length < 2 ||
    !interests.includes(data.interest) ||
    data.message.length < 20 ||
    body.consent !== true
  ) {
    return NextResponse.json({ error: "Some details were missing or invalid. Please review the form." }, { status: 422 });
  }

  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json(
      { error: "Online enquiries are not yet enabled on this website. Please try again later or contact ARK Global Ventures directly." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ ...data, source: "ark-global-ventures-website" }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not deliver your message. Please try again shortly." }, { status: 502 });
  }
}
