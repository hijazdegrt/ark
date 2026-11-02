import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-ark max-w-2xl">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">This page could not be found.</h1>
        <p className="mt-5 text-lg text-ink-soft">The page may have moved or the address may be mistyped.</p>
        <div className="mt-8 flex gap-4"><ButtonLink href="/">Back to home</ButtonLink><ButtonLink href="/contact" variant="outline" arrow={false}>Contact us</ButtonLink></div>
      </div>
    </section>
  );
}
