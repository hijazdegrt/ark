import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Contact",
  "Start a conversation with ARK Global Ventures about the operational challenges, systems and technology decisions facing your business.",
  "/contact",
);

const helpful = [
  "What the business does and roughly how large the team is",
  "Where you are experiencing friction or delay today",
  "The tools and systems currently involved",
  "Any software projects already planned or under way",
  "What a good outcome would look like",
  "Any timing, budget or decision constraints",
];

export default function ContactPage() {
  const { email, phone, address, linkedin } = site.contact;
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us where your business is facing friction.">
        Share a few details about the challenge. We will read your enquiry and reply to discuss whether and how we can help.
      </PageHero>

      <section className="section">
        <div className="container-ark grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Send an enquiry</h2>
            <ContactForm />
          </div>

          <aside className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold">Helpful to include</h2>
              <ul className="mt-5 space-y-3 text-ink-soft">
                {helpful.map((h) => (
                  <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Direct contact</h2>
              <dl className="mt-5 space-y-4 text-ink-soft">
                <Row k="Email">{email ? <a href={`mailto:${email}`} className="font-semibold text-brand-700 underline">{email}</a> : <Tbc />}</Row>
                <Row k="Phone">{phone ? <a href={`tel:${phone}`} className="font-semibold text-brand-700 underline">{phone}</a> : <Tbc />}</Row>
                <Row k="Address">{address ?? <Tbc />}</Row>
                <Row k="LinkedIn">{linkedin ? <a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">Company page</a> : <Tbc />}</Row>
              </dl>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              We ask only for the information needed to respond. See the <Link href="/privacy" className="font-semibold text-brand-700 underline">privacy notice</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

const Row = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div><dt className="text-sm font-bold uppercase tracking-[0.12em] text-brand-950">{k}</dt><dd className="mt-1">{children}</dd></div>
);
const Tbc = () => <span className="italic text-ink-soft/70">To be confirmed</span>;

