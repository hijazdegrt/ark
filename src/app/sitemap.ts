import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/services", "/who-we-help", "/our-approach", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/privacy" || p === "/terms" ? 0.3 : 0.8,
  }));
}
