import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import TechMarquee from "@/components/TechMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkingTogether from "@/components/WorkingTogether";
import { faqLd, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-[100px] max-md:px-[10px] max-md:pt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqLd())}
      />
      <HeroSection />
      <ProjectsSection />
      <ServicesAccordion />
      <WorkingTogether compact />
      <GettingStartedSection />
      <TechMarquee />
      {/* Subtle shade bifurcation: a soft darker seam at the Our Work boundary
          fades into one cooler tone shared by Testimonials + Insights. */}
      <div className="flex w-screen flex-col items-center bg-[linear-gradient(to_bottom,#eaecf0,#eff0f3_150px)]">
        <TestimonialsSection />
        <BlogSection />
      </div>
      <Footer />
    </main>
  );
}
