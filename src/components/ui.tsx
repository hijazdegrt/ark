import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "light" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand-950 text-white hover:bg-brand-700 border-transparent",
  light: "bg-white text-brand-950 hover:bg-brand-100 border-transparent",
  outline: "bg-transparent text-brand-950 border-brand-950/25 hover:border-brand-950 hover:bg-brand-950/5",
  "outline-light": "bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-ink-soft in-[.on-dark]:text-brand-100/85">{children}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Let's build a smarter way to run your business.",
  text = "Tell us where your business is facing friction. We'll start with the problem, explore the possibilities and help you identify the right next steps.",
  label = "Start a Conversation",
}: {
  title?: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-950 text-white" aria-labelledby="cta-heading">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-ark relative section">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Next step</p>
          <h2 id="cta-heading" className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/85">{text}</p>
          <div className="mt-9">
            <ButtonLink href="/contact" variant="light">
              {label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-950 text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-ark relative pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/85 sm:text-xl">{children}</p>
      </div>
    </section>
  );
}
