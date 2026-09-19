export type Project = {
  id: number;
  title: string;
  category: "Industry projects" | "Side projects";
  status: string;
  description: string;
  tags: string[];
  image: string;
  cover: string;
  mockup?: string;
  website?: string;
  contributor?: string;
  highlight: { value: string; label: string };
  content: string;
  gallery?: { src: string; alt: string }[];
  imageCaption?: string;
};

// Adoption, SEO results, deployment status, and delivery scope supplied by the
// Ments Services team in September 2026. Expected benefits are not measured ROI.
export const projects: Project[] = [
  {
    id: 3,
    title: "Exatone",
    category: "Industry projects",
    status: "Live · iOS & Android",
    description: "A fitness tracking app helping 10,000 users log workouts and understand their progress.",
    tags: ["Mobile App", "Fitness", "UI/UX Design", "iOS", "Android"],
    image: "/images/projects/exatone1.png",
    mockup: "/images/projects/exatone1.png",
    cover: "/images/projects/exatone.jpeg",
    website: "https://exatone.app/#/",
    highlight: { value: "10K", label: "Users across iOS & Android" },
    content: `Case Study: Exatone
Fitness tracking built for everyday use

1. The challenge
Workout logging can become a chore when tracking tools make users spend more time entering data than understanding their training. Exatone needed a straightforward way to record sessions and turn workout history into useful feedback.

2. What we delivered
We built a cross-platform mobile experience for iOS and Android, with workout logging, training history, recovery information, and muscle analysis. The design keeps routine input simple while the underlying data model handles the detail.

3. Outcome
Exatone now serves 10,000 users and is available on both iOS and Android. The product brings workout tracking and progress insights into one experience that users can carry between training sessions.

One-line takeaway
A focused mobile product that turns detailed training data into an approachable daily workflow.`,
  },
  {
    id: 8,
    title: "Kaysons Logistics",
    category: "Industry projects",
    status: "Implemented for business operations",
    description: "Freight operations, AI-assisted risk monitoring, and live operational insights for a business with multi-crore turnover.",
    tags: ["Web App", "Mobile App", "Logistics", "AI", "Automation", "B2B"],
    image: "/images/projects/Kaysons1.png",
    cover: "/images/projects/kaysons-dashboard.png",
    highlight: { value: "AI-assisted", label: "Freight oversight & risk review" },
    gallery: [
      { src: "/images/projects/kaysons-dashboard.png", alt: "Kaysons logistics manager dashboard with review-safe demo data" },
      { src: "/images/projects/kaysons-bids.png", alt: "Kaysons freight bid list with review-safe demo data" },
    ],
    content: `Case Study: Kaysons Logistics
Connected freight operations with AI-assisted oversight

1. The challenge
A logistics business with multi-crore turnover needed a shared operational view across bidding, dispatch, transport, delivery, and accounts. Fragmented records made it harder to spot unusual charges, track documents, and understand where a shipment needed attention.

2. What we delivered
We built a web and mobile logistics platform covering freight bidding, role-based dashboards, fleet management, tracking, proof of delivery, and billing workflows. Each team can work from the same operational records.
An AI assistant supports live questions about operations, flags potential fraud indicators and unusual spikes, and surfaces route-optimization opportunities and suggestions for human review.

3. Current outcome and intended impact
The platform has been implemented for the business. It brings operational workflows and AI-assisted monitoring into a shared system, supporting the team's plans to scale.
Earlier detection of suspicious activity, more consistent checks, and better route decisions are intended to reduce losses and manual oversight. Preventing losses worth lakhs is an objective, not a measured saving reported here. AI flags support investigation; they do not establish that fraud has occurred.

One-line takeaway
A connected operations platform that gives people better visibility and tools to review risk as the business grows.`,
  },
  {
    id: 7,
    title: "Cyinov Consulting",
    category: "Industry projects",
    status: "Live website",
    description: "A consulting website with clearer service positioning and a reported 76% increase in search impressions.",
    tags: ["Website", "Web Design", "SEO", "Consulting"],
    image: "/images/projects/cyinov1.png",
    mockup: "/images/projects/cyinov1.png",
    cover: "/images/projects/cyinov.png",
    website: "https://cyinov.com/",
    highlight: { value: "+76%", label: "Search impressions" },
    content: `Case Study: Cyinov Consulting
A clearer digital presence for a multidisciplinary consultancy

1. The challenge
Cyinov needed a brand website that could explain a broad range of consulting services and help visitors find the right expertise. The experience needed to feel credible, easy to navigate, and discoverable through search.

2. What we delivered
We designed and developed the brand website, organised the service content, and improved its SEO foundations. The delivery process incorporated the client's feedback throughout, with clear routes from service information to an enquiry.

3. Outcome
Search impressions increased by 76%, as reported by the project team. This is a search-visibility result, not a claim about sales or conversion growth; the reporting period was not supplied.
Founder Samrat Anand described the team as responsive and receptive to feedback, and said the finished website exceeded his expectations and received positive feedback from colleagues and his professional network.

One-line takeaway
Clear brand communication and stronger search visibility help a consultancy reach and inform prospective clients.`,
  },
  {
    id: 4,
    title: "Dhara",
    category: "Industry projects",
    status: "Rollout planned",
    description: "A distribution and delivery platform being prepared for a D2C brand's next stage of growth.",
    tags: ["Web App", "Mobile App", "Logistics", "D2C", "B2B"],
    image: "/images/projects/freso1.png",
    mockup: "/images/projects/freso1.png",
    imageCaption: "App concept shown under its earlier Freso branding. Dhara's client rollout is planned.",
    cover: "/images/projects/fresho.jpeg",
    highlight: { value: "Next up", label: "D2C distribution rollout" },
    content: `Case Study: Dhara
Distribution infrastructure for a growing D2C brand

1. The challenge
As distribution expands, a brand needs to coordinate regional products, customer orders, logistics partners, and delivery teams without relying on disconnected tools.

2. What we delivered
Dhara, previously presented as Freso (Dhaara), brings web-based operations and a customer mobile app together. The platform supports role-based access, regional product management, order flow, delivery assignment, and delivery verification.

3. Rollout and expected benefits
Implementation for a D2C brand is planned. The intended benefits are clearer order visibility, more consistent distribution workflows, and a foundation for expanding operations. Production adoption and business outcomes will be evaluated after rollout.

One-line takeaway
Built to support distribution growth, with business impact to be measured after implementation.`,
  },
  {
    id: 9,
    title: "Lino Perros",
    category: "Industry projects",
    status: "Live Shopify storefront",
    description: "Website design, development, SEO, and Shopify integrations for a fashion accessories storefront.",
    tags: ["E-commerce", "Shopify", "Web Design", "SEO", "Integrations"],
    image: "/images/projects/lino-perros-website.png",
    cover: "/images/projects/lino-perros-website.png",
    imageCaption: "Public Lino Perros storefront, captured September 2026. Campaigns and products may change.",
    website: "https://www.linoperros.com/",
    highlight: { value: "Shopify", label: "Design, SEO & integrations" },
    content: `Case Study: Lino Perros
An accessible shopping experience for fashion accessories

1. The business context
Lino Perros sells handbags, footwear, and accessories. Its storefront brings together product categories, new arrivals, occasion-based shopping, and promotional collections, helping customers explore a broad catalogue.

2. Our scope
Our engagement covered website design and development, SEO, and Shopify integrations. The work focused on the digital storefront and its connection to the commerce platform.

3. Expected business benefits
A clear shopping structure and connected commerce experience can make products easier to discover and purchasing easier to complete. SEO work is intended to improve discoverability, while integrations support routine store operations.
These are expected benefits of the work. Conversion, revenue, and traffic improvements have not been quantified for this case study.

One-line takeaway
Brand presentation and commerce functionality brought together in a Shopify storefront.`,
  },
  {
    id: 10,
    title: "Shingora",
    category: "Industry projects",
    status: "Live Shopify storefront",
    description: "A fashion and textile shopping experience supported by website design, SEO, and Shopify integrations.",
    tags: ["E-commerce", "Shopify", "Web Design", "SEO", "Integrations"],
    image: "/images/projects/shingora-website.png",
    cover: "/images/projects/shingora-website.png",
    imageCaption: "Public Shingora storefront, captured September 2026. Campaigns and products may change.",
    website: "https://shingora.net/",
    highlight: { value: "D2C", label: "Fashion & textile commerce" },
    content: `Case Study: Shingora
Connecting textile storytelling with online shopping

1. The business context
Shingora's catalogue includes apparel, shawls, stoles, and gifting collections. The website combines curated shopping with brand storytelling to help customers explore products across categories and occasions.

2. Our scope
Our engagement covered website development, design, SEO, and integrations with Shopify. The focus was bringing the brand's digital presentation and commerce experience together.

3. Expected business benefits
A cohesive storefront can help shoppers move from collection discovery to product evaluation with greater clarity. SEO supports discoverability, while Shopify integrations help connect the shopping experience with store operations.
These are expected benefits, not measured increases in sales or conversion. No quantified business outcome has been supplied for this case study.

One-line takeaway
A brand-led commerce experience supported by Shopify and a foundation for search visibility.`,
  },
  {
    id: 5,
    title: "Ments",
    category: "Side projects",
    status: "Live · Our own product",
    description: "Our own platform for founders, builders, and collaborators, with 5,000 monthly active users.",
    tags: ["Web App", "Mobile App", "Community", "Our Product"],
    image: "/images/projects/ments1.png",
    mockup: "/images/projects/ments1.png",
    cover: "/images/projects/ments.png",
    website: "https://ments.app/",
    highlight: { value: "5K", label: "Monthly active users" },
    content: `Case Study: Ments
Our own product, built for people building together

1. The challenge
Founders and early-stage builders need a place to show their work, find collaborators, and connect with people who can help them make progress.

2. What we built
Ments brings profiles, project discovery, collaboration, and mentorship into one platform. Building and operating our own product gives our team direct experience of ongoing product development and user feedback.

3. Outcome
Ments has 5,000 monthly active users, as reported by the Ments team. It is our own product rather than an external client engagement, and is listed here alongside our side projects for that reason.

One-line takeaway
Hands-on experience building and operating a platform with an active community.`,
  },
  {
    id: 6,
    title: "Academia Portfolio",
    category: "Side projects",
    status: "Delivered · Personal portfolio",
    description: "A distinctive personal portfolio for a data scientist, shaped around their work and personality.",
    tags: ["Website", "Web Design", "Branding", "Portfolio"],
    image: "/images/projects/portfolio1.png",
    mockup: "/images/projects/portfolio1.png",
    cover: "/images/projects/portfolio.jpeg",
    highlight: { value: "Personal", label: "Research-led portfolio design" },
    content: `Case Study: Academia Portfolio
A personal website with a point of view

1. The challenge
The client wanted a portfolio that expressed their personality and made their work memorable, rather than another generic collection of project cards.

2. What we delivered
We researched the client's style and built a narrative-led website with a dark-academia visual direction, custom details, and interactive elements.

3. Client feedback
The client, a data scientist, said the design went beyond what they had imagined and helped them land a job shortly afterwards. This is their reported experience, not a guarantee of employment outcomes.

One-line takeaway
A portfolio that gives professional work a distinctive, personal presentation.`,
  },
  {
    id: 11,
    title: "Government Document Intelligence",
    category: "Industry projects",
    status: "Team experience · Devansh Jain",
    contributor: "Devansh Jain",
    description: "Devansh's prior work on a RAG-based government chatbot, with a reported 30% efficiency gain.",
    tags: ["AI", "RAG", "Document Intelligence", "Consulting", "Team Experience"],
    image: "",
    cover: "",
    website: "https://jaindevansh.dev/",
    highlight: { value: "30%", label: "Reported efficiency gain" },
    content: `Case Study: Government Document Intelligence
AI and document-intelligence experience within our team

1. Project background
Devansh Jain's public portfolio describes a RAG-based chatbot for a Government of India engagement. His background includes AI document intelligence and research workflows.

2. Team contribution
This is Devansh's prior professional experience, included in our industry portfolio because he now works with Ments Services on consulting and selected project leadership. It is not presented as a contract originally delivered by Ments Services. His portfolio does not specify the full delivery scope or his exact responsibilities for this engagement.

3. Reported outcome
His portfolio reports a 30% efficiency gain for the chatbot. The measurement period, baseline, and evaluation method are not published, so this is an attributed result rather than an independently verified performance claim or a promise for future projects.

4. Relevant expertise
This experience informs our work on document search, internal knowledge assistants, and AI-supported research. Each new engagement needs its own data-access requirements, evaluation criteria, and human-review process.

One-line takeaway
AI document-intelligence experience brought to your project by Devansh, our data and AI consultant.`,
  },
  {
    id: 12,
    title: "FMCG Supply Chain Analytics",
    category: "Industry projects",
    status: "Team experience · Devansh Jain",
    contributor: "Devansh Jain",
    description: "Devansh's FMCG analytics experience, with a reported 20% improvement in inventory turnover.",
    tags: ["Data Analytics", "Supply Chain", "FMCG", "Consulting", "Team Experience"],
    image: "",
    cover: "",
    website: "https://jaindevansh.dev/",
    highlight: { value: "20%", label: "Reported inventory-turnover improvement" },
    content: `Case Study: FMCG Supply Chain Analytics
Data-led inventory and operational decision-making

1. Project background
Devansh Jain's portfolio lists FMCG supply-chain analytics experience and an improvement in inventory turnover. The client name and engagement dates are not publicly specified.

2. Team contribution
This is prior professional work by Devansh, now a consultant and selected-project lead at Ments Services. It represents expertise available within our team, not an engagement originally delivered under the Ments Services name. A detailed account of project deliverables is not yet available.

3. Reported outcome
Devansh reports a 20% improvement in inventory turnover. His public portfolio does not include the baseline, measurement period, or calculation method. The figure is attributed to him and should not be read as a verified revenue increase or a guaranteed result.

4. Relevant expertise
The experience is relevant to inventory analysis, supply-chain visibility, and business decision support. For a new project, we agree the data sources, operational questions, and success measures during discovery.

One-line takeaway
Supply-chain analytics experience that helps connect business questions with useful data analysis.`,
  },
];

export const featuredProjects = projects.filter((project) => [3, 8, 7, 5].includes(project.id));
export const projectTags = [...new Set(projects.flatMap((project) => project.tags))].sort();
