// Centralized SEO config + structured data (JSON-LD) builders.
// Used for search engines (Google/Bing) and rich results.

import { servicePaths } from "./service-paths";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://teamz.ments.app";

export const SITE_NAME = "Ments Services";

export const SITE_TAGLINE = "Custom Software, Apps & AI Automation";

export const SITE_DESCRIPTION =
  "Custom software and AI automation for the way your business works. Ments Services helps you launch products, improve existing software, and simplify operations, from discovery to ongoing support.";

export const CONTACT_EMAIL = "teamzments@gmail.com";

// WhatsApp contact. Number must be digits only, with country code, no "+" or spaces.
export const WHATSAPP_NUMBER = "918800243842";
export const WHATSAPP_MESSAGE = "Hi Ments Services, I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Focused keyword set: high-intent service + outcome terms.
export const SITE_KEYWORDS = [
  "product studio",
  "web development agency",
  "app development company",
  "mobile app development",
  "MVP development",
  "AI automation agency",
  "product design and branding",
  "SaaS development",
  "startup development partner",
  "custom software development",
  "Next.js development",
  "Flutter app development",
  "UI UX design agency",
  "hire a development team",
  "TEAMZ",
  "Ments Services",
];

export const SERVICES = [
  ...servicePaths.map((service) => ({ name: service.title, description: service.description })),
  {
    name: "Data & Business Consulting",
    description:
      "Business discovery, data and AI strategy, analytics planning, and project guidance with consultant Devansh Jain and our delivery team, TEAMZ.",
  },
  {
    name: "Web Development",
    description:
      "High-performance, SEO-ready websites and web apps built on modern stacks like Next.js and React.",
  },
  {
    name: "App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, built fast with Flutter and React Native.",
  },
  {
    name: "Product Design & Branding",
    description:
      "Product design, UI/UX, and brand identity that make a product look credible and feel effortless to use.",
  },
  {
    name: "AI Automation",
    description:
      "Custom AI workflows and automations that remove repetitive manual work and connect the tools a business already uses.",
  },
];

// Authoritative Q&A: answers common search + AI queries about the studio.
// Doubles as FAQ rich results and as citable content for answer engines.
export const FAQS = [
  {
    question: "Can I start small before committing to a full project?",
    answer: "Yes. Start with a free 20-minute discovery call. For more detailed planning, choose a paid discovery workshop with its fee credited toward a subsequent build, under terms agreed in your proposal. You can also start with a small paid pilot with scope, price, and success criteria agreed before work begins.",
  },
  {
    question: "What does Ments Services do?",
    answer:
      "Ments Services helps businesses build custom software, web and mobile applications, internal tools, and AI automation. Our delivery team, TEAMZ, supports projects from research and planning through launch and ongoing support.",
  },
  {
    question: "What services does Ments Services offer?",
    answer:
      "We help you launch a new product, simplify business operations, improve existing software, or put AI to practical use. Supporting capabilities include web and mobile development, product design, Shopify, SEO, integrations, automation, and data and business consulting.",
  },
  {
    question: "How much does it cost to build an app or website with Ments Services?",
    answer:
      "Cost depends on scope. A focused MVP costs less than a multi-feature platform. The biggest cost drivers are the number of features, the platforms you target, and design polish. Ments Services scopes each project and gives a clear estimate before any work starts.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take roughly 8 to 16 weeks. The timeline depends mostly on how tightly the scope is defined, a clear, focused feature set ships much faster than one that grows during the build.",
  },
  {
    question: "Does Ments Services work with startups and early-stage founders?",
    answer:
      "Yes. Ments Services works with startups, founders, and growing businesses, often as their full product team, from first idea and MVP through design, launch, and scaling.",
  },
  {
    question: "What technologies does Ments Services use?",
    answer:
      "Our delivery team, TEAMZ, builds with Next.js, React, TypeScript, Tailwind CSS, Node.js, and Flutter, plus AI and automation tools like n8n and Python for custom workflows.",
  },
  {
    question: "How are Ments Services and TEAMZ related?",
    answer:
      "Ments Services is the technology services team at Ments. TEAMZ is our delivery team of designers and engineers. Clients engage Ments Services, and TEAMZ delivers their projects.",
  },
];

// ---- JSON-LD builders ---------------------------------------------------

export const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/brand/ments-green.svg`,
    width: 844,
    height: 258,
  },
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  slogan: "Everything your product needs, in one place.",
  parentOrganization: {
    "@type": "Organization",
    name: "Ments",
    url: "https://ments.app",
  },
  department: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#teamz`,
    name: "TEAMZ",
    description: "The design and engineering delivery team at Ments Services.",
    url: `${SITE_URL}/about#team`,
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Product Design",
    "Branding",
    "AI Automation",
    "MVP Development",
    "SaaS",
    "UI/UX Design",
    "Startups",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_EMAIL,
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product studio services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function faqLd(faqs = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

// Combined sitewide graph: Organization + WebSite, linked by @id.
export const siteGraphLd = {
  "@context": "https://schema.org",
  "@graph": [organizationLd, websiteLd],
};

// Helper to render a JSON-LD <script> payload safely.
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
