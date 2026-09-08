import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * Replaces the static public/robots.txt, which pointed at the clinic's main
 * site regardless of where this page was deployed.
 *
 * This is a campaign landing page, so it stays out of the index unless the
 * client explicitly opts in — otherwise it competes with pearldentalchennai.in
 * for the clinic's own terms.
 */
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.website;
  const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

  if (!indexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you", "/privacy"] }],
    sitemap: `${base.replace(/\/$/, "")}/sitemap.xml`,
  };
}
