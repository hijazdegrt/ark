import { CtaBand, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "About",
  "ARK Global Ventures exists to help businesses turn technology into practical operational value.",
  "/about",
);

const sections = [
  {
    title: "Who we are",
    body: [
      "ARK Global Ventures is a business and technology consultancy. We work with organisations that want to simplify how they operate, make better use of software and build systems that support growth.",
      "We combine business thinking with an understanding of technology, so that recommendations are grounded in commercial reality.",
    ],
  },
  {
    title: "What we believe",
    body: [
      "Technology should earn its place. The best system is the one that fits the way a business works, is adopted by its people and can be explained in plain language.",
      "We also believe that process comes before tooling. Many problems are solved more effectively by clarifying how work flows than by adding more software.",
    ],
  },
  {
    title: "How we think about technology",
    body: [
      "Technology is a means to improve operations, not an objective in itself. We look at software, integration and automation as options, weigh them against the alternatives and recommend what is proportionate.",
    ],
  },
  {
    title: "What we aim to help businesses achieve",
    list: [
      "Reduced manual work",
      "Greater operational efficiency",
      "Better visibility of the business",
      "More structured workflows",
      "Better use of business data",
      "Improved coordination between teams",
      "More effective software adoption",
      "Operational scalability",
    ],
    note: "These are our aims and positioning goals, not guaranteed outcomes.",
  },
  {
    title: "Our approach to partnerships",
    body: [
      "We aim to be a long-term, candid partner: clear about what we recommend and why, open about trade-offs and focused on the client's interests.",
      "Where we work alongside software providers or specialist firms in future, we will be transparent about the relationship so that recommendations remain independent.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Turning technology into practical operational value.">
        ARK Global Ventures exists to help businesses turn technology into practical operational value. By combining
        business thinking, appropriate software and better systems, we aim to help organisations simplify complexity,
        improve processes and prepare for sustainable growth.
      </PageHero>

      <section className="section">
        <div className="container-ark divide-y divide-line-strong border-y border-line-strong">
          {sections.map((s) => (
            <div key={s.title} className="grid gap-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-16" data-reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">{s.title}</h2>
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                {s.body?.map((p) => (<p key={p}>{p}</p>))}
                {s.list && (
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {s.list.map((i) => (
                      <li key={i} className="flex gap-3 text-ink"><span aria-hidden="true" className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent" />{i}</li>
                    ))}
                  </ul>
                )}
                {s.note && <p className="text-sm">{s.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder: confirmed company facts only */}
      <section className="section bg-surface">
        <div className="container-ark max-w-4xl">
          <p className="eyebrow mb-4">To be confirmed</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Company details</h2>
          <p className="mt-4 text-ink-soft">
            The following will be published only once ARK Global Ventures has confirmed them. We have deliberately not
            invented any of this information.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Leadership and team profiles", "Founding information and company history", "Locations and geographic coverage", "Certifications, partnerships and accreditations"].map((i) => (
              <li key={i} className="border border-dashed border-line-strong bg-white px-5 py-4 text-sm font-medium text-ink-soft">
                {i}<span className="ml-2 italic text-ink-soft/70">Information required</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
