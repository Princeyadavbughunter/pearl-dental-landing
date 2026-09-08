import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Only emitted when the page is deliberately indexable — see robots.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NEXT_PUBLIC_INDEXABLE !== "true") return [];
  const base = (process.env.NEXT_PUBLIC_SITE_URL || site.website).replace(/\/$/, "");
  return [{ url: `${base}/`, changeFrequency: "weekly", priority: 1 }];
}
