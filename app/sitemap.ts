import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page site — section anchors aren't separate URLs, so we list the
  // homepage. Add real routes here if you split content into more pages.
  const lastModified = new Date("2026-06-13");
  return [
    {
      url: business.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
