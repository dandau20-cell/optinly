import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://optinly.io";

  const routes = [
    "",
    "/how-it-works",
    "/life-insurance-leads",
    "/debt-relief-leads",
    "/pricing",
    "/about",
    "/privacy",
    "/terms",
    "/book-demo",
    "/blog",
    "/blog/how-to-buy-insurance-leads",
    "/blog/what-makes-a-qualified-lead",
    "/blog/exclusive-vs-shared-leads",
    "/blog/lead-generation-for-insurance-agents",
    "/blog/compliance-in-lead-generation",
    "/blog/how-to-convert-insurance-leads",
    "/blog/life-insurance-lead-generation-strategies",
    "/blog/debt-relief-leads-guide",
    "/blog/tcpa-compliance-lead-generation",
    "/blog/insurance-crm-lead-management",
    "/intake-quiz",
    "/success",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-04-11"),
    changeFrequency: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}
