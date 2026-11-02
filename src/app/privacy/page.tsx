import { PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Privacy Policy", "How ARK Global Ventures handles information submitted through this website.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy">Draft notice describing how this website handles enquiries.</PageHero>
      <section className="section">
        <div className="container-ark max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <p role="note" className="border-l-4 border-accent bg-surface px-5 py-4 text-base font-medium text-ink">
            This is placeholder copy and is not legal advice. It must be reviewed and completed by a qualified professional before the website is published.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Who we are</h2>
          <p>This website is operated by ARK Global Ventures. [Registered legal entity name, address and contact details to be confirmed.]</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Information we collect</h2>
          <p>If you submit the contact form we collect the details you enter: your name, business email address, company name, optional job title, area of interest and the message you write. We ask only for what is needed to respond to your enquiry.</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">How we use it</h2>
          <p>We use this information to read and respond to your enquiry. [Legal basis, retention period, processors and international transfers to be confirmed.]</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Cookies and analytics</h2>
          <p>This website does not currently set analytics or advertising cookies. [Update if analytics are added.]</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Your rights</h2>
          <p>[Describe the rights available under the laws that apply to ARK Global Ventures and how to exercise them.]</p>
        </div>
      </section>
    </>
  );
}
