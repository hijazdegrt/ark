import Link from "next/link";
import { ButtonLink, CtaBand, PageHero } from "@/components/ui";
import { services } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Services",
  "Technology consulting, SaaS implementation, process automation, workflow improvement, digital transformation and strategy for growing businesses.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Technology and systems, in service of the business.">
        ARK Global Ventures helps businesses improve through technology and operational systems. Our services are
        practical and explained in plain language.
      </PageHero>

      <div className="border-b border-line bg-white">
        <nav aria-label="Services on this page" className="container-ark">
          <ul className="flex gap-6 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap">
            {services.map((s) => (
              <li key={s.slug}><a href={`#${s.slug}`} className="cursor-pointer text-ink-soft hover:text-brand-700">{s.title}</a></li>
            ))}
          </ul>
        </nav>
      </div>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section ${i % 2 ? "bg-surface" : ""}`} aria-labelledby={`${s.slug}-h`}>
          <div className="container-ark grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <s.icon aria-hidden="true" className="size-10 text-brand-700" strokeWidth={1.4} />
              <p className="eyebrow mt-6">Service {String(i + 1).padStart(2, "0")}</p>
              <h2 id={`${s.slug}-h`} className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.short}</p>
              <div className="mt-8"><ButtonLink href="/contact">{s.cta}</ButtonLink></div>
            </div>

            <div className="space-y-10">
              <Block title="The business challenge"><p>{s.challenge}</p></Block>
              <Block title="What the service involves">
                <ul className="space-y-3">
                  {s.involves.map((x) => (<li key={x} className="flex gap-3"><Dot />{x}</li>))}
                </ul>
              </Block>
              <Block title="Potential benefits">
                <ul className="space-y-3">
                  {s.benefits.map((x) => (<li key={x} className="flex gap-3"><Dot />{x}</li>))}
                </ul>
                <p className="mt-4 text-sm text-ink-soft">Benefits are intended outcomes, not guaranteed results. They depend on scope, context and adoption.</p>
              </Block>
              <Block title="Typical engagement considerations"><p>{s.considerations}</p></Block>
            </div>
          </div>
        </section>
      ))}

      <section className="section border-t border-line">
        <div className="container-ark max-w-4xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Not sure which service fits?</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Most conversations begin with a problem rather than a service name. Describe where the business is facing
            friction and we will help you identify the most relevant starting point. You can also read about{" "}
            <Link href="/our-approach" className="font-semibold text-brand-700 underline underline-offset-4">how we approach engagements</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div data-reveal className="border-t border-line-strong pt-6">
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{title}</h3>
      <div className="mt-4 text-[1.05rem] leading-relaxed text-ink">{children}</div>
    </div>
  );
}
const Dot = () => <span aria-hidden="true" className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent" />;
