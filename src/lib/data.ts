export { projects } from "./projects";

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description
  excerpt: string; // card teaser
  category: string;
  date: string; // ISO, e.g. 2026-06-10
  readTime: string;
  image: string; // cover image in /public/images/blogs (numbered by serial)
  imageFit?: "cover" | "contain"; // "contain" for non-landscape images (shown full on a blurred fill)
  content: string; // markdown-lite: ## H2, ### H3, - bullet, blank line = paragraph
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-it-cost-to-build-an-app",
    title: "How Much Does It Cost to Build an App in 2026?",
    description:
      "A clear, honest breakdown of what it costs to build an app in 2026, what drives the price up, and how to keep your budget under control.",
    excerpt:
      "The honest answer is it depends, but here are real ranges, what actually drives the cost, and how to spend less without cutting corners.",
    category: "App Development",
    date: "2026-06-12",
    readTime: "6 min read",
    image: "/images/blogs/blog3.webp",
    content: `If you are planning to build an app, the first question is almost always the same: how much will this cost? The honest answer is that it depends, but that is not very useful when you are trying to plan a budget. So let us give you real numbers and, more importantly, explain what moves them.

## The short answer

Most apps fall into three rough bands:

- A simple app (a focused MVP with a handful of core features): lower end of the range.
- A mid-complexity app (accounts, payments, real-time data, a few integrations): the middle.
- A complex platform (multiple user roles, dashboards, heavy backend logic, AI features): the top.

The reason the range is so wide is that "an app" can mean a weekend project or a year-long platform. The features you choose, not the word "app," decide the cost.

## What actually drives the price

A few things move the number more than anything else:

### Features and scope
Every screen, every button, every "can it also do this" adds hours. The single biggest cost driver is scope creep, where a simple idea slowly grows into a platform during the build.

### Platforms
Building separately for iOS, Android, and web roughly multiplies the work. This is why cross-platform tools like Flutter matter: you ship to all three from one codebase, which can cut a large slice off the cost.

### Design and polish
A rough, functional app is cheaper than a polished one. The difference between "it works" and "it feels great to use" is real engineering and design time, and it is usually worth paying for, because polish is what users actually notice.

### Backend and integrations
Login, payments, notifications, third-party APIs, and real-time sync all add backend work. The more your app needs to talk to, the more it costs.

## How to keep the cost down

You do not need to spend less by building something worse. You spend less by being disciplined:

- Build an MVP first. Ship the smallest version that delivers real value, learn from real users, then invest in the rest.
- Lock the scope. Decide what is in and what is explicitly out before the build starts.
- Go cross-platform when it fits. One codebase for web and mobile saves real money.
- Make decisions quickly. The most expensive thing in any build is a team waiting on answers.

## The bottom line

The cost of an app is mostly a reflection of how much you ask it to do. Start narrow, ship something real, and grow from there. If you want a straight estimate for your specific idea, the fastest way is to talk it through with a team that has built apps like yours.`,
  },
  {
    slug: "web-app-vs-mobile-app-which-to-build-first",
    title: "Web App vs Mobile App: Which Should You Build First?",
    description:
      "Not sure whether to build a web app or a mobile app first? Here is a simple framework to decide based on how your users actually behave.",
    excerpt:
      "Web first or mobile first? The answer comes down to how your users behave, not which is trendier. Here is a simple way to decide.",
    category: "Product Strategy",
    date: "2026-06-08",
    readTime: "5 min read",
    image: "/images/blogs/blog5.jpg",
    content: `One of the first big decisions founders face is whether to build a web app or a mobile app first. Building both at once is expensive, so most teams have to choose. The good news is the decision is usually clearer than it feels.

## Start with how people will use it

Forget what is trendy. Ask one question: when and where will someone actually use this?

If the answer is "at their desk, focused, doing real work," that points to web. If the answer is "on the go, in short bursts, needing the camera, location, or notifications," that points to mobile.

## When to build a web app first

A web app is usually the right starting point when:

- Your product involves dashboards, long forms, or detailed work.
- Your users are businesses or teams who work on laptops.
- You want to ship fast and reach everyone with a single link, no app store approval needed.
- You are still testing the idea and want to iterate quickly.

Web is faster to build, easier to update, and instantly accessible. For most B2B and early-stage products, web first is the safe, smart choice.

## When to build a mobile app first

A mobile app makes sense first when:

- The experience depends on the phone: camera, GPS, push notifications, or offline use.
- Your users expect to open it daily, like a fitness, social, or messaging product.
- Being on the home screen is part of the habit you are trying to build.

If your product only makes sense in someone's pocket, mobile first is worth the extra effort.

## The middle path: cross-platform

You do not always have to choose. Cross-platform tools like Flutter let you build for web and mobile from one codebase. You will not get a separate native team's level of platform-specific polish, but you reach everyone for far less, which is often exactly what an early product needs.

## The bottom line

Build for where your users already are, not where you wish they were. Web first for focused, work-style products. Mobile first for habit-forming, on-the-go ones. And if you genuinely need both, cross-platform is how you get there without doubling the bill.`,
  },
  {
    slug: "how-long-does-it-take-to-build-an-mvp",
    title: "How Long Does It Take to Build an MVP?",
    description:
      "A realistic timeline for building an MVP, what the weeks actually go into, and what makes a build faster or slower.",
    excerpt:
      "Most MVPs take 8 to 16 weeks. Here is what those weeks actually go into, and the few things that decide whether you land at the fast or slow end.",
    category: "Product Strategy",
    date: "2026-06-04",
    readTime: "5 min read",
    image: "/images/blogs/blog7.jpg",
    content: `"How long will it take?" is the question right after "how much will it cost?" For a minimum viable product, the realistic answer for most teams is 8 to 16 weeks. Where you land in that range depends less on the technology and more on how clearly you can define what you are building.

## What the weeks actually go into

A healthy MVP build breaks down roughly like this:

### Discovery and scope (1 to 2 weeks)
Defining the problem, the core user journey, and the smallest feature set that delivers value. Skipping this is the most common reason projects run long, because the team ends up building, then rebuilding.

### Design (2 to 3 weeks)
Wireframes to high-fidelity screens. Getting this right before code starts saves expensive changes later.

### Build (4 to 8 weeks)
The bulk of the work: the frontend, the backend, the database, and the integrations. This stretches or shrinks directly with the feature list.

### Testing and launch (1 to 2 weeks)
Fixing bugs, testing on real devices, and shipping to the app store or the web.

## What makes it faster

- A tight, honest scope. The fewer features in v1, the sooner it ships.
- Fast decisions. A team waiting on your feedback is a team not building.
- One team that owns design and development, so nothing gets lost in handoffs.

## What slows it down

- Scope creep. "While we are at it, can it also..." is how an 8-week build becomes a 6-month one.
- Unclear ownership on your side, where no one can give a final yes.
- Trying to make v1 perfect instead of shipping it and learning.

## The bottom line

An MVP is not a smaller version of your dream product. It is the fastest honest test of whether the idea works. Keep the scope tight, make decisions quickly, and you can have something real in front of users in a couple of months.`,
  },
  {
    slug: "how-to-choose-a-development-team-for-your-startup",
    title: "How to Choose a Development Team for Your Startup",
    description:
      "Agency, freelancer, or in-house? A practical guide to choosing the right development team for your startup, with red flags and questions to ask.",
    excerpt:
      "Agency, freelancer, or in-house? How to pick a team that ships, what to look for, the red flags to avoid, and the questions to ask before you sign.",
    category: "Founders",
    date: "2026-05-30",
    readTime: "6 min read",
    image: "/images/blogs/blog9.jpg",
    content: `Choosing who builds your product is one of the most important early decisions you will make. The wrong choice costs you months and money you cannot get back. Here is how to choose well.

## Agency, freelancer, or in-house?

Each has trade-offs:

- A freelancer is affordable and flexible, but you are relying on one person for design, development, and reliability. Great for small, well-defined jobs.
- An in-house team gives you full control, but hiring takes months and is expensive before you have even shipped.
- A studio or agency gives you a full team (design, engineering, project management) without the hiring overhead. Best when you want to move fast and not manage individuals.

For most early-stage startups, a small studio is the sweet spot: senior people, end to end, without building a team from scratch.

## What to look for

- Real, shipped work. Ask to see products that are actually live, not just concepts.
- Clear communication. If they are slow or vague before you pay them, it gets worse after.
- Ownership. You want a team that takes responsibility for outcomes, not one that does exactly what the ticket says and nothing more.
- A process. Good teams can tell you how they work, from scope to design to launch.

## Red flags

- A quote with no questions. If someone gives you a price without understanding your product, the number is meaningless.
- No live work to show.
- They agree to everything. A team that never pushes back will happily build the wrong thing.
- Hand-offs everywhere. If design, development, and project management are three disconnected vendors, things fall through the cracks.

## Questions to ask before you sign

- Can I see two or three products you have built and shipped?
- Who exactly will work on this, and how senior are they?
- How do you handle scope changes and timelines?
- What happens after launch?

## The bottom line

Hire for shipped work, clear communication, and genuine ownership. The cheapest quote is rarely the cheapest outcome. The right team feels less like a vendor and more like part of your team.`,
  },
  {
    slug: "i-have-an-app-idea-what-do-i-do-next",
    title: "Got an App Idea? Here's What to Do Next",
    description:
      "Got an app idea but not sure what to do next? Here is a simple, practical roadmap from a one-line idea to a real, working product.",
    excerpt:
      "Got an idea but no idea what comes next? Here is the simple path from a one-line idea to a real, working product.",
    category: "Getting Started",
    date: "2026-06-16",
    readTime: "5 min read",
    image: "/images/blogs/blog1.jpg",
    content: `Plenty of great products start as a single sentence: "someone should build an app that..." The gap between that sentence and a real, working product can feel huge. It is not as big as it looks. Here is the practical path.

## 1. Write down the one problem it solves

Before features, before design, before anything, ask: what is the single problem this solves, and for whom? If you cannot say it in one sentence, the idea is not ready yet. Clarity here saves you months later.

## 2. Map the core journey, not every feature

Sketch the main thing a user will do, start to finish. Resist the urge to list every feature you can imagine. The first version should do one thing well, not ten things halfway.

## 3. Validate before you build

Show your sketch or a simple prototype to real people in your target audience. Would they use it? Would they pay? A few honest conversations now are worth more than months of building the wrong thing.

## 4. Build a small first version

This is your MVP, the smallest version that delivers real value. It is not a shrunken version of your dream product, it is the fastest honest test of whether the idea works.

## 5. Put it in front of real users

Ship it, watch how people actually use it, and let what you learn decide what to build next. Real usage will surprise you, in good and bad ways, and that is the point.

## The bottom line

You do not need the whole thing figured out to start. You need a clear problem, a small first version, and real users. If you have an idea and want help turning it into something real, that is exactly the kind of thing a product team can map out with you in a single conversation.`,
  },
  {
    slug: "do-you-need-an-app-for-your-business",
    title: "Do You Actually Need an App for Your Business?",
    description:
      "Not every business needs an app. Here is an honest way to tell whether a mobile app will help your business, or whether a website is enough.",
    excerpt:
      "Not every business needs an app. Here is an honest way to tell whether one will move the needle for you, or whether a website is enough.",
    category: "App Development",
    date: "2026-06-14",
    readTime: "4 min read",
    image: "/images/blogs/blog2.jpg",
    content: `"Should we build an app?" is one of the most common questions we hear, and the honest answer is often: maybe not. An app is a big investment, and for plenty of businesses a good website does the job for far less. Here is how to tell.

## When an app makes sense

A mobile app is worth it when:

- People will use it often, ideally daily or weekly. Apps earn their place on the home screen through repeat use.
- You need phone features: camera, GPS, push notifications, or offline access.
- The experience genuinely benefits from being fast and native, not just a page in a browser.

Think fitness trackers, delivery, messaging, anything that lives in someone's pocket.

## When it doesn't (yet)

You probably do not need an app if:

- People will use it occasionally, not as a habit.
- It is mainly information, bookings, or a storefront. A website handles those well.
- You are still testing the idea. An app is a slow, expensive way to learn what a website can teach you quickly.

## The cheaper middle ground

If you are unsure, start with a web app. It works on every phone instantly, it is faster and cheaper to build, and it needs no app store approval. If it takes off and people clearly want an app, you build one then, with real demand to justify it.

## The bottom line

Do not build an app because competitors have one. Build one when daily use or phone features make it genuinely better. Until then, a strong website usually wins. If you want a straight opinion on which path fits your business, it is worth talking it through with someone who has built both.`,
  },
  {
    slug: "why-your-website-isnt-bringing-customers",
    title: "Why Your Website Isn't Bringing in Customers",
    description:
      "If your website gets visitors but no customers, the cause is usually a short, fixable list. Here is exactly what to check.",
    excerpt:
      "Traffic but no customers? The cause is usually one of a few fixable things. Here is what to check before you give up on your site.",
    category: "Web Development",
    date: "2026-06-10",
    readTime: "5 min read",
    image: "/images/blogs/blog4.jpg",
    content: `Getting people to your website is only half the job. If visitors show up and leave without buying, signing up, or getting in touch, the traffic is wasted. The good news: the reasons are usually a short, fixable list. Here is what to check.

## It's too slow

If your site takes more than a few seconds to load, a large chunk of visitors leave before they see anything. Speed is not a nice-to-have, it directly costs you customers, and it is often the single biggest fix.

## It's confusing

If a first-time visitor cannot tell what you do and what to do next within a few seconds, they leave. Clarity beats clever every time.

## It doesn't say why anyone should care

Listing what you do is not enough. Visitors want to know what is in it for them. If your site talks about you instead of their problem, it will not convert.

## There's no clear next step

Every page should point to one obvious action: buy, book, sign up, or contact. If people have to hunt for the next step, most simply will not take it.

## It looks untrustworthy

An outdated or sloppy design quietly tells visitors you are not serious. People judge credibility in seconds, and design is most of that judgment.

## The bottom line

A website that does not convert is usually slow, confusing, self-focused, directionless, or dated, often a few of those at once. The fixes are concrete. If your site gets visitors but not customers, a focused redesign usually pays for itself quickly.`,
  },
  {
    slug: "what-can-ai-do-for-a-small-business",
    title: "What Can AI Actually Do for a Small Business?",
    description:
      "A plain-English look at what AI can really do for a small business right now, with practical examples and where it is not the answer.",
    excerpt:
      "Past the hype, what can AI really do for a small business? Here are the practical, real-world things it handles well today.",
    category: "AI Automation",
    date: "2026-06-06",
    readTime: "5 min read",
    image: "/images/blogs/blog6.jpg",
    content: `"AI" gets used to mean everything, which makes it hard to know what it can actually do for a normal small business. Stripped of the hype, the answer is practical: AI is very good at the repetitive, language-heavy, and data-shuffling work that eats your team's time. Here is what that looks like in real life.

## Handling repetitive admin

Pulling details out of emails and forms, moving data between tools, updating records, generating routine documents. The boring work that has to happen but does not need a human brain.

## Drafting and replying

Writing first-draft replies to common questions, summarizing long threads, and turning rough notes into clean documents. A person still approves, but the blank-page work is done for them.

## Making sense of your data

Turning raw numbers into plain-language summaries and reports, spotting patterns, and flagging things that need attention, without anyone building a spreadsheet by hand.

## Customer support

Answering common questions instantly, routing the tricky ones to the right person, and giving your team a head start on every conversation.

## What it is not

AI is not a replacement for your team or your judgment. It is a tool that removes the repetitive load so the people in your business can focus on the parts that actually need them.

## The bottom line

If your team spends hours each week on repetitive, rule-based work, that is exactly where AI earns its keep. Start with one clear task, automate it well, and grow from there. If you are not sure what is worth automating, that is an easy first conversation to have.`,
  },
  {
    slug: "logo-vs-brand-what-your-startup-needs",
    title: "Logo vs Brand: What Your Startup Actually Needs",
    description:
      "A logo is not a brand. Here is the real difference, and what a startup actually needs to look credible and earn trust early.",
    excerpt:
      "A logo is not a brand. Here is the real difference, and what a startup actually needs to look credible and win trust early.",
    category: "Product Design & Branding",
    date: "2026-06-02",
    readTime: "4 min read",
    image: "/images/blogs/blog8.png",
    content: `A lot of founders think "branding" means getting a logo. A logo matters, but it is one small piece of something bigger, and treating them as the same thing is why a lot of startups end up looking generic. Here is the real difference, and what you actually need early.

## A logo is one piece, not the whole thing

Your logo is a mark. It is useful, but on its own it does not make people trust you, remember you, or understand what you stand for. A great logo on an otherwise inconsistent, confusing presence does very little.

## What a brand actually is

Your brand is the whole impression: your colors, type, voice, the way your product feels, and the consistency across your site, app, and posts. It is what someone remembers and how they describe you to a friend. It is built from many small, consistent choices, not one image.

## What a startup actually needs early

You do not need a giant brand guidelines book on day one. You need the essentials, used consistently:

- A clear name and logo
- A simple, deliberate color and type system
- A consistent voice, meaning how you sound
- A product and site that look like they belong to the same company

Get those right and you will look far more credible than competitors who spent more on a fancy logo and nothing else.

## The bottom line

A logo is where branding starts, not where it ends. What earns trust is consistency across everything a customer sees. If your startup looks different on every screen, that is the gap worth closing, and it is usually quicker to fix than founders expect.`,
  },
];
