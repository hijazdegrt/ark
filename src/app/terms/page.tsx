import { PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Terms of Use", "Terms governing use of the ARK Global Ventures website.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use">Draft terms governing use of this website.</PageHero>
      <section className="section">
        <div className="container-ark max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <p role="note" className="border-l-4 border-accent bg-surface px-5 py-4 text-base font-medium text-ink">
            This is placeholder copy and is not legal advice. It must be reviewed and completed by a qualified professional before the website is published.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Use of this website</h2>
          <p>The content on this website is provided for general information about ARK Global Ventures and its services. It does not constitute professional advice or an offer of services.</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Intellectual property</h2>
          <p>The ARK Global Ventures name, logo and website content are owned by or licensed to ARK Global Ventures. [Confirm wording.]</p>
          <h2 className="pt-4 text-2xl font-semibold text-ink">Limitation of liability and governing law</h2>
          <p>[To be drafted by a qualified professional, including the governing law and jurisdiction.]</p>
        </div>
      </section>
    </>
  );
}
