"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { ButtonLink } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-ark flex h-[4.75rem] items-center justify-between gap-6 lg:h-24">
        <Link href="/" aria-label="ARK Global Ventures, home" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/ark-logo.png"
            alt="ARK Global Ventures logo"
            width={1047}
            height={1144}
            priority
            sizes="64px"
            className="h-14 w-auto lg:h-[4.5rem]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative cursor-pointer rounded-md px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:text-brand-700 ${
                    isActive(item.href) ? "text-brand-950" : "text-ink-soft"
                  } after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform ${
                    isActive(item.href) ? "after:scale-x-100" : "hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className="hidden !min-h-11 !px-5 sm:inline-flex">
            Let&apos;s Talk
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-md border border-line text-brand-950 transition-colors hover:bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-b border-line bg-white shadow-lg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-ark py-4">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-12 items-center text-lg font-medium ${
                    isActive(item.href) ? "text-brand-700" : "text-brand-950"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-5 w-full">
            Discuss Your Business
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
