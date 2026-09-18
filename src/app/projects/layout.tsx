import type { Metadata } from "next";

import { breadcrumbLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Work: Industry & Side Projects",
  description:
    "Explore Ments Services projects by category and tag: mobile apps, logistics platforms, Shopify storefronts, SEO, and AI automation.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Industry & Side Projects | Ments Services",
    description:
      "Products from Ments Services, built and delivered by our technology team, TEAMZ.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/projects" },
          ]),
        )}
      />
      {children}
    </>
  );
}
