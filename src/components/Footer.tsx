import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";

const col = "text-sm font-semibold uppercase tracking-[0.14em] text-brand-300";
const link = "cursor-pointer text-[0.95rem] text-brand-100/85 transition-colors hover:text-white";

export function Footer() {
  const { email, phone, address, linkedin } = site.contact;
  return (
    <footer className="on-dark bg-brand-950 text-white">
      <div className="container-ark grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:py-20">
        <div>
          <Image
            src="/brand/ark-logo-reversed.png"
            alt="ARK Global Ventures logo"
            width={1047}
            height={1144}
            sizes="120px"
            className="h-28 w-auto"
          />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-brand-100/80">
            ARK Global Ventures helps businesses improve how they operate through technology, SaaS
            solutions and better systems.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={col}>Company</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={link}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className={col}>Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={link}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={col}>Contact</h2>
          <ul className="mt-5 space-y-3 text-[0.95rem] text-brand-100/85">
            <li>
              {email ? <a className={link} href={`mailto:${email}`}>{email}</a> : <Pending>Email address to be confirmed</Pending>}
            </li>
            <li>
              {phone ? <a className={link} href={`tel:${phone}`}>{phone}</a> : <Pending>Phone number to be confirmed</Pending>}
            </li>
            <li>{address ?? <Pending>Office address to be confirmed</Pending>}</li>
            <li>
              {linkedin ? (
                <a className={link} href={linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
              ) : (
                <Pending>LinkedIn page to be confirmed</Pending>
              )}
            </li>
          </ul>
          <Link href="/contact" className="mt-6 inline-block cursor-pointer text-[0.95rem] font-semibold text-accent underline-offset-4 hover:underline">
            Send an enquiry
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ark flex flex-col gap-3 py-6 text-sm text-brand-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {site.year} ARK Global Ventures. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="cursor-pointer hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="cursor-pointer hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Pending({ children }: { children: React.ReactNode }) {
  return <span className="italic text-brand-100/55">{children}</span>;
}
