export const servicePaths = [
  {
    number: "01",
    need: "I have an idea.",
    title: "Launch a new product",
    description: "From an early idea to a focused first release—built around what your users need most.",
    offerings: ["Discovery and MVP scoping", "User journeys and UI/UX design", "Web and iOS/Android development", "Launch planning and ongoing support"],
    capabilities: "MVPs · websites · mobile apps · product design",
    proof: [{ label: "Exatone · 10K users", href: "/projects/3" }, { label: "Ments · 5K MAU", href: "/projects/5" }],
  },
  {
    number: "02",
    need: "Our work runs through spreadsheets and calls.",
    title: "Simplify your operations",
    description: "Replace scattered spreadsheets and calls with a shared system built around how your team works.",
    offerings: ["Internal tools and business platforms", "Role-based dashboards and reporting", "Orders, inventory, and logistics workflows", "Integrations with your existing tools"],
    capabilities: "Internal tools · logistics · dashboards · data consulting",
    proof: [{ label: "Kaysons · logistics operations", href: "/projects/8" }, { label: "Dhara · planned distribution rollout", href: "/projects/4" }],
  },
  {
    number: "03",
    need: "Our existing software needs improvement.",
    title: "Improve what you already have",
    description: "Make your website, store, or app faster, easier to use, and ready for what's next.",
    offerings: ["Website, app, and experience improvements", "Shopify development and integrations", "SEO and performance improvements", "New features, maintenance, and support"],
    capabilities: "Websites · e-commerce · Shopify · SEO · integrations",
    proof: [{ label: "Cyinov · +76% search impressions", href: "/projects/7" }, { label: "Lino Perros & Shingora · Shopify", href: "/projects?tag=Shopify" }],
  },
  {
    number: "04",
    need: "We want to use AI.",
    title: "Put AI to practical use",
    description: "Test AI on a useful workflow, connected to your tools—with people in control where judgement matters.",
    offerings: ["AI opportunity assessment and consulting", "Document search and knowledge assistants", "Workflow automation and tool integrations", "Operational alerts and decision support"],
    capabilities: "AI assistants · document intelligence · automation · analytics",
    proof: [{ label: "Kaysons · AI-assisted oversight", href: "/projects/8" }, { label: "Meet Devansh · data & AI consulting", href: "/about#devansh-jain" }],
  },
];

export const inquiryServices = [
  ...servicePaths.map((service) => service.title),
  "Data & Business Consulting",
  "Not sure yet — help me plan",
];
