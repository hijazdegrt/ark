import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, CtaBand, SectionHeading } from "@/components/ui";
import { HeroVisual } from "@/components/HeroVisual";
import { audiences, challenges, principles, processStages, services, valueSteps } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-brand-950 text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="container-ark relative grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28 lg:pt-28">
          <div>
            <p className="eyebrow mb-6">Business &amp; technology consultancy</p>
            <h1 className="text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              Better Systems. Smarter Business. Sustainable Growth.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-100/85 sm:text-xl">
              ARK Global Ventures helps businesses work smarter through technology, SaaS solutions and
              streamlined processes—building the systems they need to operate efficiently and grow with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="light">Discuss Your Business</ButtonLink>
              <ButtonLink href="/services" variant="outline-light" arrow={false}>Explore Our Services</ButtonLink>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none" data-reveal>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" aria-labelledby="challenges-heading">
        <div className="container-ark grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-4">The problem we start with</p>
            <h2 id="challenges-heading" className="text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
              Your business shouldn&apos;t be held back by the way it operates.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Most operational friction is not caused by people. It comes from systems, processes and tools that no
              longer fit the business. The right combination of technology, workflows and structure can help address
              these challenges at their source.
            </p>
          </div>
          <ol className="border-t border-line">
            {challenges.map((c, i) => (
              <li key={c.title} data-reveal style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-xl font-semibold text-brand-700 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-surface" aria-labelledby="services-heading">
        <div className="container-ark">
          <SectionHeading eyebrow="What ARK does" title={<span id="services-heading">Six ways we help businesses operate better.</span>}>
            From understanding where you are today to implementing the systems that move you forward, each service is
            designed around a practical business problem.
          </SectionHeading>
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="group flex flex-col bg-white p-8 transition-colors hover:bg-brand-100/40" data-reveal>
                <s.icon aria-hidden="true" className="size-8 text-brand-700" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.short}</p>
                <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
                  <div>
                    <dt className="font-semibold text-brand-950">Addresses</dt>
                    <dd className="mt-1 text-ink-soft">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-950">Aims to deliver</dt>
                    <dd className="mt-1 text-ink-soft">{s.value}</dd>
                  </div>
                </dl>
                <Link href={`/services#${s.slug}`} className="mt-auto inline-flex cursor-pointer items-center gap-1.5 pt-7 font-semibold text-brand-700 hover:text-brand-950">
                  Learn more <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only"> about {s.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="on-dark section bg-brand-900 text-white" aria-labelledby="value-heading">
        <div className="container-ark">
          <SectionHeading eyebrow="How we create value" title={<span id="value-heading">Technology is a means, not the objective.</span>}>
            We work from the business problem towards the technology, never the reverse. The aim is a measurable
            improvement in how the business operates.
          </SectionHeading>
          <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
            <div aria-hidden="true" className="absolute left-[1.05rem] top-2 hidden h-px w-full bg-gradient-to-r from-accent/70 via-brand-300/40 to-transparent lg:block" />
            {valueSteps.map((s, i) => (
              <li key={s.n} className="relative flex gap-5 lg:block" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-accent bg-brand-900 font-display text-sm font-semibold text-accent">{i + 1}</span>
                <div className="lg:mt-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-100/80">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why ARK */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container-ark grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-4">Why ARK Global Ventures</p>
            <h2 id="why-heading" className="text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
              A practical, business-first approach.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              These are the principles that shape how we advise and how we work with the businesses that choose us.
            </p>
            <div className="mt-8"><ButtonLink href="/our-approach" variant="outline">See our approach</ButtonLink></div>
          </div>
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title} className="border-l-2 border-accent pl-5" data-reveal>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-surface" aria-labelledby="who-heading">
        <div className="container-ark">
          <SectionHeading eyebrow="Who we help" title={<span id="who-heading">Businesses ready to run more effectively.</span>}>
            We organise our work around business situations, not industries. These are the types of organisation that
            may benefit most.
          </SectionHeading>
          <ul className="mt-12 grid gap-x-12 md:grid-cols-2">
            {audiences.map((a) => (
              <li key={a.slug} className="border-t border-line-strong py-6" data-reveal>
                <Link href={`/who-we-help#${a.slug}`} className="group flex cursor-pointer items-start justify-between gap-4">
                  <span className="text-lg font-semibold leading-snug group-hover:text-brand-700">{a.title}</span>
                  <ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm text-ink-soft">
            Industry focus will be added as ARK&apos;s sector experience is confirmed. At present, the audiences above are potential markets rather than stated areas of specialisation.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container-ark">
          <SectionHeading eyebrow="Engagement process" title={<span id="process-heading">A clear path from problem to improvement.</span>}>
            Every engagement is scoped to the need. Not every business requires every stage.
          </SectionHeading>
          <ol className="mt-14 grid border-t border-line-strong md:grid-cols-5">
            {processStages.map((s, i) => (
              <li key={s.n} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0" data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}>
                <span className="font-display text-sm font-semibold tracking-widest text-accent-ink">{s.n}</span>
                <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.short}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10"><ButtonLink href="/our-approach" variant="outline">Explore the full approach</ButtonLink></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
