"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { interests } from "@/lib/content";

type Values = {
  name: string;
  email: string;
  company: string;
  title: string;
  interest: string;
  message: string;
  consent: boolean;
  website: string; // honeypot, must stay empty
};
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "unavailable" | "error"; message: string };

const empty: Values = { name: "", email: "", company: "", title: "", interest: "", message: "", consent: false, website: "" };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid business email address.";
  if (v.company.trim().length < 2) e.company = "Please enter your company name.";
  if (!v.interest) e.interest = "Please choose an area of interest.";
  if (v.message.trim().length < 20) e.message = "Please describe the challenge in at least a couple of sentences (20 characters minimum).";
  if (!v.consent) e.consent = "Please confirm that you have read the privacy notice.";
  return e;
}

export function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const uid = useId();
  const [values, setValues] = useState<Values>({ ...empty, interest: defaultInterest });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus({ state: "sent" });
        setValues({ ...empty });
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setStatus({
        state: res.status === 503 ? "unavailable" : "error",
        message: data.error ?? "Something went wrong. Please try again shortly.",
      });
    } catch {
      setStatus({ state: "error", message: "We could not reach the server. Please check your connection and try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border border-line bg-surface p-8">
        <h3 className="text-2xl font-semibold">Thank you. Your enquiry has been sent.</h3>
        <p className="mt-3 text-ink-soft">We will review what you have shared and respond to the email address you provided.</p>
        <button type="button" onClick={() => setStatus({ state: "idle" })} className="mt-6 cursor-pointer text-sm font-semibold text-brand-700 underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = "mt-2 block w-full rounded-md border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300";
  const border = (k: keyof Values) => (errors[k] ? "border-red-700" : "border-line-strong");
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-sm font-medium text-red-700">{errors[k]}</p>
    ) : null;
  const aria = (k: keyof Values) => ({
    id: `${uid}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });
  const label = "block text-sm font-semibold text-brand-950";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={`${uid}-status`}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={label}>Full name</label>
          <input {...aria("name")} type="text" name="name" autoComplete="name" required value={values.name} onChange={(e) => set("name", e.target.value)} className={`${field} ${border("name")}`} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>Business email</label>
          <input {...aria("email")} type="email" name="email" autoComplete="email" required value={values.email} onChange={(e) => set("email", e.target.value)} className={`${field} ${border("email")}`} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={label}>Company name</label>
          <input {...aria("company")} type="text" name="company" autoComplete="organization" required value={values.company} onChange={(e) => set("company", e.target.value)} className={`${field} ${border("company")}`} />
          {err("company")}
        </div>
        <div>
          <label htmlFor={`${uid}-title`} className={label}>Job title <span className="font-normal text-ink-soft">(optional)</span></label>
          <input {...aria("title")} type="text" name="title" autoComplete="organization-title" value={values.title} onChange={(e) => set("title", e.target.value)} className={`${field} ${border("title")}`} />
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-interest`} className={label}>Area of interest</label>
        <select {...aria("interest")} name="interest" required value={values.interest} onChange={(e) => set("interest", e.target.value)} className={`${field} ${border("interest")}`}>
          <option value="">Select an area</option>
          {interests.map((i) => (<option key={i} value={i}>{i}</option>))}
        </select>
        {err("interest")}
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className={label}>Describe the challenge</label>
        <textarea {...aria("message")} name="message" rows={6} required value={values.message} onChange={(e) => set("message", e.target.value)} placeholder="Where is the business facing friction? What have you tried so far?" className={`${field} ${border("message")}`} />
        {err("message")}
      </div>

      {/* honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set("website", e.target.value)} /></label>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input {...aria("consent")} type="checkbox" name="consent" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 size-5 shrink-0 cursor-pointer accent-brand-700" />
          <label htmlFor={`${uid}-consent`} className="text-sm leading-relaxed text-ink-soft">
            I have read the <Link href="/privacy" className="font-semibold text-brand-700 underline underline-offset-2">privacy notice</Link> and agree that ARK Global Ventures may use the details I provide to respond to my enquiry.
          </label>
        </div>
        {err("consent")}
      </div>

      <div id={`${uid}-status`} role="status" aria-live="polite">
        {(status.state === "unavailable" || status.state === "error") && (
          <p className="border-l-4 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
            <strong className="font-semibold">Your message has not been sent.</strong> {status.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={status.state === "sending"} className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-brand-950 px-8 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70">
        {status.state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
