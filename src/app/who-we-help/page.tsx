import { ButtonLink, CtaBand, PageHero } from "@/components/ui";
import { audiences } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Who We Help",
  "Find your situation: businesses with operational inefficiencies, growing teams, SaaS projects, disconnected systems and technology-led improvement plans.",
  "/who-we-help",
);

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero eyebrow="Who we help" title="Recognise your situation. Find the right starting point.">
        We do not claim sector specialisation. Instead we organise our work around the business situations where
        better systems and clearer processes tend to make the biggest difference.
      </PageHero>

      <section className="section">
        <div className="container-ark">
          <ul className="space-y-0 border-t border-line-strong">
            {audiences.map((a, i) => (
              <li key={a.slug} id={a.slug} className="border-b border-line-strong py-12 lg:py-16" data-reveal>
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  <div>
                    <span className="font-display text-sm font-semibold tracking-widest text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">{a.title}</h2>
                  </div>
                  <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                    <Item term="The common challenge">{a.challenge}</Item>
                    <Item term="Why processes become inefficient">{a.why}</Item>
                    <Item term="How technology and better systems may help">{a.help}</Item>
                    <Item term="What an initial engagement could explore">{a.explore}</Item>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-start gap-4 bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg font-medium">Your situation may combine several of these. That is common.</p>
            <ButtonLink href="/contact">Discuss Your Business</ButtonLink>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function Item({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-sm font-bold uppercase tracking-[0.12em] text-brand-700">{term}</dt>
      <dd className="mt-2 leading-relaxed text-ink-soft">{children}</dd>
    </div>
  );
}
