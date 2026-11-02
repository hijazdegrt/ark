import { CtaBand, PageHero } from "@/components/ui";
import { approachDetail } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Our Approach",
  "Discover, Diagnose, Design, Deliver, Improve: a business-first framework for technology and process improvement.",
  "/our-approach",
);

export default function ApproachPage() {
  return (
    <>
      <PageHero eyebrow="Our approach" title="Discover. Diagnose. Design. Deliver. Improve.">
        A structured way to improve how a business operates. Recommendations follow the needs of the business, not a
        preference for any particular software.
      </PageHero>

      <section className="section">
        <div className="container-ark">
          <ol className="relative">
            <div aria-hidden="true" className="absolute bottom-0 left-[1.4rem] top-0 hidden w-px bg-line-strong md:block" />
            {approachDetail.map((s) => (
              <li key={s.n} className="relative grid gap-6 pb-16 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-10" data-reveal>
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-brand-700 bg-white font-display text-sm font-semibold text-brand-700">{s.n}</span>
                <div>
                  <h2 className="text-3xl font-semibold">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{s.purpose}</p>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <List title="Typical activities" items={s.activities} />
                    <List title="Possible outputs" items={s.outputs} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-ark grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Scope</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Deliverables depend on the engagement.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>Not every engagement includes every stage. Some begin and end with a focused assessment. Others continue into implementation and review. The outputs listed here are examples, and the actual deliverables are agreed for each engagement.</p>
            <p>We recommend technology only where it solves a defined business problem, and we say so plainly when a simpler change to process is the better answer.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-accent" />{i}
          </li>
        ))}
      </ul>
    </div>
  );
}
