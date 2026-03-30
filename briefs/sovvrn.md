# PROJECT BRIEF: Sovvrn

## Project Type
- [x] **Full Website** → loads CONTENT.md + SEO-ARCHITECTURE.md

---

## Business Information
- **Business Name:** Sovvrn
- **Website URL:** sovvrn.com (new build — no existing site)
- **Industry / Niche:** AI-native business intelligence platform for multi-unit operators
- **City / Primary Location:** Salt Lake City, Utah (company HQ — but product is national/global)
- **Service Area:** United States initially, product is location-agnostic SaaS
- **Years in Business:** Founded 2024, product in active development
- **Parent Company:** XeedlyAI (link to xeedly.com in footer)
- **Tagline / Positioning Statement:** "The intelligence layer for multi-unit operators."

## What Sovvrn Is (Product Context for Content Writing)

Sovvrn is an AI-native business intelligence platform built for operators who run multiple locations. It connects to their existing systems (POS, CRM, review platforms, labor tools) and delivers proactive intelligence — not just dashboards, but AI-powered coaching, anomaly detection, and actionable signals delivered where the operator already works (SMS, email, Slack, or the web app).

The platform has several core capabilities:
- **Command Center** — A three-panel intelligence hub that surfaces operational signals (anomalies, opportunities, risks) with AI analysis and recommended actions. Signals auto-expire after 48 hours. Operators can flag, dismiss, or dig deeper into any signal.
- **AI Coaching** — A conversational AI that understands the operator's specific business data. It doesn't just report numbers — it traces problems to root causes and recommends specific actions. "Your Midvale location's prime cost spiked 4 points this week — I traced it to a produce invoice 22% above contract price."
- **Location Intelligence** — Cross-location performance comparison with MTD data, prior-period benchmarking, sparkline trends, and health scores per location.
- **Voice AI** — An AI phone agent that answers calls, takes orders, books appointments, handles FAQs, and captures leads 24/7. Built on Vapi + Twilio + ElevenLabs.
- **Morning Briefing** — A daily intelligence summary delivered via SMS, email, or Slack before the operator's first location visit. "Yesterday your 10 locations did $47K. Top performer: Oak Park +18%. Needs attention: Airport Terminal B, prime cost 9 points above target."
- **Cost Intelligence** — Real-time tracking of prime cost, food cost, and labor cost with MTD rolling analysis, projected end-of-month, and AI-driven analysis of what's driving cost variance.
- **Review Intelligence** — AI monitoring and response for Google, Yelp, and Facebook reviews across all locations.
- **Portfolio Support** — Multi-brand, multi-unit portfolio operators can toggle between brands and see aggregated or brand-specific views.

The first vertical is restaurants (multi-unit chains, franchise groups, portfolio operators). The next vertical is active entertainment (climbing gyms, trampoline parks, adventure centers). The platform architecture is designed to support any operator-led, multi-location business.

The platform is NOT a POS replacement. It sits ON TOP of existing systems as an intelligence layer — similar to how a CFO sits on top of accounting software. Sovvrn reads data from the operator's existing tools and adds intelligence, coaching, and proactive alerts.

## Target Audience / Buyer Persona

### Primary Buyer: Multi-Unit Restaurant Operator ("Pete")
- **Who:** Owner or VP of Operations running 3–25 restaurant locations. Could be corporate-owned chain or a franchisee group. Age 35-55. On the floor, not behind a desk. Makes decisions fast. Values time above all.
- **Pain points:**
  1. Can't see all locations at once — relies on GMs to report problems, which means problems are already bad by the time they surface
  2. Drowning in data from multiple systems (POS, labor, reviews, accounting) but none of it talks to each other
  3. Missed calls and leads — phones ring unanswered during rush, after hours, and on weekends
- **Goals:**
  1. Know which location needs attention RIGHT NOW without visiting every store
  2. Get ahead of cost problems before they eat the month's profit
  3. Spend less time pulling reports and more time coaching managers
- **Objections / barriers:**
  1. "I already have Toast/Square reporting" — Yes, but your POS shows you what happened. Sovvrn tells you why and what to do about it.
  2. "Another dashboard I won't use" — Sovvrn comes to you. SMS at 7am. You don't log in unless you want to dig deeper.
  3. "My data is sensitive" — Enterprise-grade security. Your data stays yours. Role-based access.
- **Triggers / buying signals:**
  1. Just opened location #3 or #4 and feeling stretched
  2. Had a bad month on food cost and doesn't know why
  3. Lost a location's GM and realized they had no visibility into that store's performance
  4. Saw a competitor using AI and felt behind

### Secondary Buyer: Portfolio Investment Operator ("Mike")
- **Who:** Operator running multiple restaurant BRANDS (e.g., 3 Domino's + 2 Wingstop). Or a restaurant investment fund evaluating acquisitions.
- **Pain points:** Needs cross-brand portfolio view. Each brand has different KPIs and benchmarks. Currently manages each brand separately with no unified intelligence layer.
- **Goals:** One dashboard that shows portfolio health, ability to drill into any brand or location, and AI that understands the differences between brands.

### Future Buyer (don't write dedicated content yet, but leave architectural room):
- Active entertainment operators (climbing gym chains, trampoline park franchisees, adventure park groups)

## Keyword Strategy
- **Primary Keywords:**
  - "restaurant business intelligence"
  - "multi-unit restaurant management software"
  - "AI for restaurant operations"
  - "restaurant intelligence platform"
  - "multi-location restaurant analytics"
- **Secondary Keywords:**
  - "restaurant AI coaching"
  - "restaurant voice AI"
  - "multi-unit restaurant dashboard"
  - "restaurant prime cost tracking"
  - "franchise restaurant analytics"
  - "restaurant operations intelligence"
  - "AI phone answering for restaurants"
  - "restaurant chain management software"
  - "restaurant KPI dashboard"
  - "restaurant portfolio management"
- **Long-tail:**
  - "how to manage multiple restaurant locations"
  - "best software for multi-unit restaurant operators"
  - "AI that helps restaurant owners"
  - "restaurant business intelligence for franchise owners"

## Unique Selling Propositions
1. **Intelligence, not just data.** Every BI tool shows you charts. Sovvrn tells you what the chart means, why it changed, and what to do about it — in plain language, via SMS, before you've finished your coffee.
2. **Built for operators on the floor, not analysts at desks.** Morning briefings via text. Signals that come to you. An AI coach you can ask questions in natural language. You don't need to "use" Sovvrn — it uses the data for you.
3. **Cross-location benchmarking that actually works.** Instantly see which location is the outlier, in which direction, and why. Network averages, vs-prior-period pacing, projected end-of-month. All automatic.
4. **Voice AI that pays for itself.** An AI phone agent that answers every call, captures every lead, takes orders, and handles FAQs — 24/7. Operators using Voice AI recover an average of $3,000+/month in captured calls that previously went to voicemail.
5. **One platform, any operator-led business.** Restaurants today. Active entertainment tomorrow. The intelligence engine is vertical-aware but architecturally universal.

## Competitive Landscape
- **Toast Analytics / Restaurant365:** POS-native reporting tools. Show you what happened. Don't coach you on what to do. Tied to their own POS ecosystem.
- **MarginEdge / xtraCHEF:** Invoice processing and food cost tracking. Point solutions, not intelligence platforms. Don't connect to labor, reviews, or voice.
- **Competitors' gap:** Nobody in the market sits across POS + labor + cost + reviews + voice and delivers proactive, AI-coached intelligence to the operator via SMS/Slack. That gap is Sovvrn's entire thesis.

## Design Direction

### Overall Vibe
Dark, sophisticated, tech-forward. Premium SaaS product — not a scrappy startup, not an enterprise monolith. Feels like the intersection of Stripe's clarity, Vercel's developer-cool, and a high-end consulting firm's authority. The operator who sees this site should feel "this is serious technology built by people who understand my world."

### Reference Sites & What To Channel From Each

**1. PolyAI (poly.ai)**
- CHANNEL: The way they present AI as a sophisticated, trusted enterprise tool — not gimmicky, not hype-driven. Clean hero with clear positioning. Industry-specific use cases as navigation. The confidence in the copy — they don't oversell. Product screenshots feel real, not mockups.
- DO NOT CHANNEL: Their mega-menu navigation is too complex for Sovvrn's current page count.

**2. Gadoci Consulting (gadociconsulting.com)**
- CHANNEL: The messaging structure — "The technology arrived faster than anyone was ready for" → problem → approach → core concepts → proof → engagement options. The way they frame AI transformation as a people problem, not a tech problem. Stat counters in the hero (10,000+ employees trained, 1,000+ use cases). Clean section transitions. The "Ways to Engage" cards.
- DO NOT CHANNEL: Their visual design is clean but basic — Sovvrn should be more visually striking.

**3. Centerfy (centerfy.ai)**
- CHANNEL: The "Manual Process vs AI Process" comparison — showing 10 painful manual steps collapsing into an automated flow. The tech stack logo bar. The industry list as a scrolling marquee. Bold stat numbers. The way they address specific roles (not just "businesses").
- DO NOT CHANNEL: The visual clutter in their hero — too many floating elements, badges, and competing focal points. Also the aggressive sales language ("5x more meetings") is too hyped for Sovvrn's tone.

**4. Ekhane (ekhane.webflow.io)**
- CHANNEL: The design quality — clean grid layouts, generous whitespace, subtle scroll-triggered animations (fade-up on sections, parallax depth), refined typography hierarchy. The "right amount of movement" — animations enhance without distracting. Card hover states. Section dividers. The overall feel of modern sophistication.
- DO NOT CHANNEL: The specific ecommerce/investment content — only the design patterns.

### Color Palette
- **Primary background:** Deep charcoal/navy (#0C0F14 or similar — dark but not pure black)
- **Card/surface:** Slightly lighter (#13161D)
- **Borders:** Subtle (#1E2330)
- **Text primary:** Off-white (#E8ECF4)
- **Text secondary:** Muted silver (#8B93A7)
- **Accent 1:** Electric blue (#4E8AE6) — for CTAs, highlights, active states
- **Accent 2:** Gold/amber (#D4A853) — for premium moments, key stats, brand warmth
- **Success/positive:** Green (#3EBE7A)
- **Warning/attention:** Coral (#E88B5C)
- These are the same colors used in the Sovvrn research documents — maintain consistency.

### Typography
- **Display / Headings:** Instrument Serif (already in template) — gives editorial elegance
- **Body text:** DM Sans (already in template) — clean, modern readability
- **Mono / Technical:** JetBrains Mono (already in template) — for stat labels, badges, code-like elements
- This combination creates a "premium intelligence" feel — the serif headlines signal authority, the sans body signals clarity, the mono accents signal data/tech.

### Dark or Light Theme
- **Dark theme primary.** This is a data intelligence platform — dark backgrounds make data visualizations, product screenshots, and UI elements pop. Matches every reference site's approach.

### Animation & Motion
- Scroll-triggered fade-up for sections (stagger delay 100ms between elements)
- Subtle parallax on hero background elements
- Stat counter animations (numbers count up on scroll into view)
- Card hover: slight lift (translateY -4px) + border glow on accent color
- Section transitions: clean, not flashy. The ekhane level of motion — enhances without performing.
- NO: auto-playing videos, particle effects, 3D scenes, or anything that feels like a tech demo

## Pages Required

### 1. Homepage
- **Purpose:** Establish Sovvrn as the intelligence layer for multi-unit operators. Show the breadth of the platform. Convert visitors to demo requests.
- **Primary keyword:** "restaurant intelligence platform" / "multi-unit restaurant management software"
- **CTA:** "Book a Demo" (primary), "See How It Works" (secondary)
- **Sections:**
  - Hero: Bold headline + subtitle + dual CTA + social proof bar (customer count, uptime, locations monitored)
  - Problem: "The operator's dilemma" — running multiple locations with fragmented data
  - Platform overview: The 4 pillars of Sovvrn (Intelligence, Coaching, Voice, Delivery) as cards
  - How it works: 4-step flow (Connect → Ingest → Analyze → Deliver)
  - Product showcase: 2-3 feature deep-dives with product screenshots/mockups (Command Center, Morning Briefing, Voice AI)
  - Social proof: Stats + testimonials (use placeholder content for now — mark clearly as "[PLACEHOLDER — replace with real data]")
  - Verticals teaser: "Built for restaurants. Expanding to active entertainment." — two cards linking to vertical pages
  - FAQ: 6-8 questions covering top objections
  - Final CTA: "See Sovvrn in action" → demo booking

### 2. Platform Page (/platform)
- **Purpose:** Deep-dive into what Sovvrn does. Feature walkthrough for the technically curious operator or evaluator.
- **Primary keyword:** "restaurant business intelligence software"
- **CTA:** "Book a Demo"
- **Sections:**
  - Hero: "Everything your POS doesn't tell you"
  - Command Center deep-dive (signal lifecycle, AI analysis, three-panel layout)
  - AI Coaching deep-dive (conversational intelligence, Dig Deeper, proactive recommendations)
  - Location Intelligence (cross-location benchmarking, MTD tracking, health scores)
  - Cost Intelligence (prime cost, food cost, labor cost tracking with AI analysis)
  - Morning Briefing (delivery channels — SMS, email, Slack — with example briefing text)
  - Voice AI (AI phone agent, call capture, order taking, lead conversion)
  - Review Intelligence (multi-platform monitoring, AI response, sentiment tracking)
  - Portfolio Support (multi-brand toggling, aggregated views)
  - Integration ecosystem: logos of POS systems, labor tools, review platforms Sovvrn connects to
  - FAQ specific to platform capabilities

### 3. Restaurants Vertical (/restaurants)
- **Purpose:** Industry-specific landing page for restaurant operators. Speaks their language.
- **Primary keyword:** "AI for restaurant operations" / "multi-unit restaurant analytics"
- **CTA:** "Book a Demo"
- **Sections:**
  - Hero: "The operations partner your restaurant chain deserves" — restaurant-specific messaging
  - Problem: Restaurant-specific pain (food cost creep, labor variance, missed calls during rush, review management across locations)
  - Solution: How Sovvrn solves each pain point specifically for restaurants
  - KPIs tracked: Prime cost, food cost %, labor cost %, revenue per location, covers, avg ticket, review velocity
  - Customer archetype cards: Sarah (single unit), Pete (10-location chain), Mike (multi-brand portfolio)
  - Pricing preview or "Talk to us" CTA
  - Restaurant-specific FAQ

### 4. About Page (/about)
- **Purpose:** Establish credibility. Tell the founder story. Show the vision.
- **Primary keyword:** N/A — brand page
- **CTA:** "Book a Demo" / "Contact Us"
- **Content:**
  - Founder story: Built by a restaurant industry insider who saw operators drowning in data but starving for intelligence
  - Vision: One platform that gives every multi-unit operator the same intelligence advantage that billion-dollar chains have
  - XeedlyAI as the parent company
  - Values: operator-first, data-honest, proactive not reactive
  - Team section (placeholder for now)

### 5. Contact / Demo Page (/contact)
- **Purpose:** Convert. Book demos. Capture leads.
- **CTA:** Calendly embed or contact form
- **Content:**
  - Headline: "See Sovvrn in action"
  - Short value prop reminder
  - Calendly embed for demo booking
  - Alternative: contact form (name, email, company, location count, message)
  - Phone number, email address

### 6. Blog / Insights (optional — create the page structure but don't populate posts)
- **/blog** — listing page with empty state or 1-2 placeholder posts
- Purpose: SEO content hub for long-tail keywords (to be populated over time)

## Content Inputs

### About the Business
Sovvrn is the intelligence layer for multi-unit operators. We connect to the systems you already use — your POS, your labor tools, your review platforms — and turn fragmented data into proactive intelligence. Instead of pulling reports, you get a morning text telling you exactly what needs attention across all your locations. Instead of digging through dashboards, you ask our AI coach a question in plain English and get a specific, data-backed answer. We built Sovvrn because we watched operators spend their mornings buried in spreadsheets when they should have been on the floor coaching their teams.

### Testimonials / Reviews
[PLACEHOLDER — no real testimonials yet. Use clearly marked placeholder blocks that can be swapped later. Format: "quote text" — Name, Title, Company, Location Count]

### Stats / Proof Points
[PLACEHOLDER — use realistic but clearly marked placeholder stats:]
- "[X]+ locations monitored" 
- "99.9% uptime"
- "[X]% average cost reduction identified in first 30 days"
- "[X]K+ signals delivered"
Mark all as [PLACEHOLDER] in the code comments so they're easy to find and replace.

### Media Assets
- No product screenshots available yet — use realistic dark-themed placeholder mockups or abstract UI representations
- Sovvrn logo: not finalized — use text "SOVVRN" in Instrument Serif as wordmark for now
- No team photos — use abstract or icon-based team representation on About page

## Technical Requirements
- **Domain:** sovvrn.com (configure in Vercel after deploy)
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4 (add gtag script placeholder — actual ID to be added later)
- **Forms:** Contact form posts to a placeholder API route (/api/contact) — will be connected to CRM later
- **Integrations:** Calendly embed on /contact page (use placeholder embed URL)
- **Special Features:**
  - Scroll-triggered stat counter animations
  - Smooth section reveal animations (Framer Motion)
  - Sticky header with backdrop blur
  - Mobile-responsive throughout
  - Dark theme with the color palette specified above

## What NOT To Do
- Do not use glassmorphism / frosted glass as the dominant pattern. Use it sparingly for one or two accent cards maximum. The overall aesthetic should be solid, grounded, and confident — not floaty and transparent.
- Do not use gradient text effects on headings (overdone in AI sites)
- Do not use particle backgrounds, 3D globes, or animated meshes
- Do not make this look like an AI startup. Make it look like a serious operations platform that happens to be powered by AI.
- Do not use the word "revolutionary," "game-changing," "cutting-edge," or any word on the banned list in CONTENT.md
- Do not fabricate specific customer names, company names, or exact numbers. Use [PLACEHOLDER] tags that are clearly visible in the code.
