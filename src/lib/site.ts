// Central site configuration. Items marked TODO are intentionally unset: they must be
// supplied by ARK Global Ventures before launch (see README "Information still required").
export const site = {
  name: "ARK Global Ventures",
  shortName: "ARK",
  // TODO: replace with the production domain (or set NEXT_PUBLIC_SITE_URL).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  description:
    "ARK Global Ventures helps businesses work smarter through technology consulting, SaaS implementation, process automation and better systems.",
  year: 2026,
  contact: {
    email: null as string | null, // TODO: business email address
    phone: null as string | null, // TODO: business phone number
    address: null as string | null, // TODO: registered / office address
    linkedin: null as string | null, // TODO: LinkedIn company page URL
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
