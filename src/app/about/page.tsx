import type { Metadata } from "next";

import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import WorkingTogether from "@/components/WorkingTogether";
import { breadcrumbLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us & Our TEAMZ Delivery Team",
  description:
    "Meet Ments Services and TEAMZ, our design and engineering delivery team. Custom software, applications, and AI automation, from planning through ongoing support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Ments Services: Meet Our TEAMZ Delivery Team",
    description:
      "TEAMZ is the design and engineering team delivering projects at Ments Services.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-0 bg-[#f2f2f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <AboutHero />
      <TeamSection />
      <WorkingTogether />
      <Footer />
    </main>
  );
}
