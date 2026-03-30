import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema } from '@/lib/structured-data'
import { SectionReveal } from '@/components/sections/section-reveal'
import { FAQSection } from '@/components/sections/faq-section'
import {
  ArrowRight,
  TrendingDown,
  Clock,
  PhoneMissed,
  Star,
  DollarSign,
  Users,
  BarChart3,
  Utensils,
  Phone,
  MessageSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Restaurant Operations | Multi-Unit Analytics',
  description: 'Built for multi-unit restaurant operators. Track prime cost, benchmark locations, capture missed calls, and get AI coaching — all from one platform.',
  openGraph: {
    title: 'AI for Restaurant Operations | Sovvrn',
    description: 'Built for multi-unit restaurant operators. Track prime cost, benchmark locations, and get AI coaching.',
    url: 'https://sovvrn.com/restaurants',
  },
}

const restSchema = serviceSchema({
  name: 'Sovvrn for Restaurants',
  description: 'AI-powered business intelligence platform built specifically for multi-unit restaurant operators. Prime cost tracking, location benchmarking, voice AI, and proactive coaching.',
  provider: 'Sovvrn',
  areaServed: 'United States',
  url: 'https://sovvrn.com/restaurants',
})

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Food cost creep',
    problem: 'A produce distributor raises prices 5% mid-contract. You don\'t catch it until your P&L is already hit. Across 10 locations, that quiet increase costs you $8K/month.',
    solution: 'Sovvrn flags cost variance the day it appears — which vendor, which item, which locations are affected. You call the distributor before the second invoice lands.',
  },
  {
    icon: Clock,
    title: 'Labor variance',
    problem: 'One manager consistently overschedules weekday openers. Another lets overtime creep past 5% every pay period. You find out when the labor report comes in — two weeks late.',
    solution: 'Real-time labor cost tracking with daily alerts when any location exceeds its target. The AI tells you which shifts are driving the variance and what the projected end-of-month impact will be.',
  },
  {
    icon: PhoneMissed,
    title: 'Missed calls during rush',
    problem: 'Your host is seating tables, your manager is on the line, and the phone rings three times before going to voicemail. That was a $2,500 catering order.',
    solution: 'Sovvrn Voice AI answers every call within 2 rings. It takes orders, captures catering leads, handles reservation questions, and forwards urgent calls to the right person.',
  },
  {
    icon: Star,
    title: 'Review management across locations',
    problem: 'A 1-star Google review sits unanswered for 9 days at your Airport location. You didn\'t know because nobody was watching that location\'s reviews.',
    solution: 'Aggregated review monitoring across Google, Yelp, and Facebook for every location. AI-drafted responses ready for your approval. Alerts when review velocity drops or negative sentiment spikes.',
  },
]

const kpis = [
  { label: 'Prime Cost %', icon: DollarSign },
  { label: 'Food Cost %', icon: Utensils },
  { label: 'Labor Cost %', icon: Users },
  { label: 'Revenue per Location', icon: BarChart3 },
  { label: 'Covers / Day', icon: Users },
  { label: 'Average Ticket', icon: DollarSign },
  { label: 'Review Velocity', icon: Star },
  { label: 'Call Capture Rate', icon: Phone },
]

const archetypes = [
  {
    name: 'Sarah',
    role: 'Owner-Operator',
    locations: '3 locations',
    description: 'Sarah just opened her third location and feels the stretch. She used to know everything happening at each store. Now she catches problems a week late. Sovvrn gives Sarah a morning briefing so she knows where to go before she leaves the house.',
    plan: 'Sovvrn Intelligence — $499/mo',
  },
  {
    name: 'Pete',
    role: 'Multi-Unit Operator',
    locations: '10 locations',
    description: 'Pete runs 10 fast-casual locations and spends 90 minutes every morning logging into Toast, location by location. He copies numbers into a spreadsheet that\'s always a day behind. Sovvrn replaces that spreadsheet with real-time intelligence and a text at 7am.',
    plan: 'Sovvrn Core — $999/mo',
  },
  {
    name: 'Mike',
    role: 'Portfolio Operator',
    locations: '3 brands, 22 locations',
    description: 'Mike runs Domino\'s, Wingstop, and an independent concept. Each brand has different cost targets, different POS systems, different KPIs. Sovvrn gives Mike one dashboard with brand-specific benchmarks and a portfolio-wide view for investor reporting.',
    plan: 'Sovvrn Pro — $1,799/mo',
  },
]

const faqItems = [
  {
    question: 'What POS systems do you connect to for restaurants?',
    answer: 'Sovvrn connects to Toast, Square, Clover, Revel, Aloha, Lightspeed, and other major restaurant POS systems. If your POS has an API, we can build the connection. Most operators are live within 24 hours of signing up.',
  },
  {
    question: 'How does Sovvrn track prime cost in real time?',
    answer: 'We pull sales data from your POS and cost data from your invoice/accounting system. The AI calculates prime cost (food + labor as a percentage of revenue) on a rolling MTD basis and projects your end-of-month number. When cost spikes, it traces the variance to specific invoices or shifts.',
  },
  {
    question: 'Can the Voice AI handle our full menu for phone orders?',
    answer: 'Yes. We configure Voice AI with your full menu, including modifiers, combos, and seasonal items. The AI handles conversational ordering — "I want a large pepperoni with extra cheese and a side of garlic knots" — and confirms the order back to the caller before submitting.',
  },
  {
    question: 'What if I run multiple restaurant brands?',
    answer: 'Sovvrn was built for portfolio operators. Each brand gets its own KPI targets, benchmarks, and briefings. You see a portfolio-wide view or drill into any individual brand. The AI understands the differences between a Domino\'s franchise and an independent concept.',
  },
  {
    question: 'How much does Voice AI recover in missed calls?',
    answer: 'Operators using Voice AI typically recover $3,000 or more per month per location in captured calls that previously went to voicemail. The exact amount depends on your call volume, order size, and catering frequency. We track every call and every captured lead in your dashboard.',
  },
  {
    question: 'Do I need technical staff to set this up?',
    answer: 'No. Sovvrn connects to your existing tools through their APIs. Our team handles the integration during onboarding. You do not need IT staff, developers, or a data team. If you can log into your POS, you have enough technical ability to use Sovvrn.',
  },
]

export default function RestaurantsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restSchema) }}
      />

      {/* ===== HERO (dark) ===== */}
      <section className="section-dark relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(78,138,230,0.12)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-gold">For Restaurants</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              The operations partner your restaurant chain deserves
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark-text-body">
              AI-powered intelligence built for multi-unit restaurant operators. Track prime cost across every location, benchmark performance, capture missed calls, and get coached on what to fix — all before your first store visit.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-dark-border px-6 py-3 text-sm font-semibold text-dark-text transition-all hover:border-dark-text-secondary/40 hover:bg-dark-surface"
              >
                See the Full Platform
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== PAIN POINTS + SOLUTIONS (white) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">The problem</p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Restaurant-specific pain points Sovvrn was built to solve
            </h2>
          </SectionReveal>
          <div className="mt-10 space-y-5">
            {painPoints.map((point, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-light rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <point.icon size={24} className="mt-1 shrink-0 text-warning" />
                    <div>
                      <h3 className="text-xl font-bold">{point.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{point.problem}</p>
                      <div className="mt-4 rounded-lg border border-accent-blue/20 bg-accent-blue/5 p-4">
                        <p className="flex items-start gap-2 text-sm leading-relaxed text-text-body">
                          <MessageSquare size={16} className="mt-0.5 shrink-0 text-accent-blue" />
                          <span><strong className="text-accent-blue">Sovvrn:</strong> {point.solution}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KPIs TRACKED (blue wash) ===== */}
      <section className="bg-wash-blue py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">KPIs</p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              The metrics restaurant operators actually need
            </h2>
            <p className="mt-4 max-w-xl text-text-body">
              Tracked in real time, benchmarked across locations, and delivered proactively when something needs attention.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="card-light rounded-xl p-5 text-center">
                  <kpi.icon size={24} className="mx-auto text-accent-blue" />
                  <p className="mt-3 text-sm font-bold text-text-card-title">{kpi.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== CUSTOMER ARCHETYPES (white) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Who it&apos;s for</p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Whether you run 3 locations or 30, Sovvrn scales with you
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {archetypes.map((arc, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-light flex h-full flex-col rounded-xl p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/10 text-lg font-bold text-accent-blue">
                      {arc.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-card-title">{arc.name}</p>
                      <p className="text-xs text-text-muted">{arc.role} · {arc.locations}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">{arc.description}</p>
                  <p className="mt-4 font-mono text-xs text-accent-gold">{arc.plan}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline"
              >
                Talk to us about your setup <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FAQ (off-white) ===== */}
      <section className="bg-surface">
        <FAQSection
          title="Restaurant-specific questions"
          items={faqItems}
        />
      </section>

      {/* ===== CTA (dark) ===== */}
      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold md:text-4xl">Built by restaurant operators, for restaurant operators</h2>
            <p className="mx-auto mt-4 max-w-lg text-dark-text-body">
              Book a demo and see how Sovvrn handles your specific operation — your POS, your locations, your cost targets.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
