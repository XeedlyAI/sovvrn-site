import type { Metadata } from 'next'
import Link from 'next/link'
import { organizationSchema } from '@/lib/structured-data'
import { SectionReveal } from '@/components/sections/section-reveal'
import { StatCounter } from '@/components/sections/stat-counter'
import { FAQSection } from '@/components/sections/faq-section'
import { CommandCenterSvg } from '@/components/placeholders/command-center-svg'
import { MorningBriefingSvg } from '@/components/placeholders/morning-briefing-svg'
import { VoiceAiSvg } from '@/components/placeholders/voice-ai-svg'
import {
  BarChart3,
  MessageSquare,
  Phone,
  Send,
  ArrowRight,
  UtensilsCrossed,
  Dumbbell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant Intelligence Platform | Sovvrn',
  description: 'AI-powered business intelligence for multi-unit restaurant operators. Get proactive coaching, cost tracking, and voice AI — delivered via SMS, email, or Slack.',
  openGraph: {
    title: 'Restaurant Intelligence Platform | Sovvrn',
    description: 'AI-powered business intelligence for multi-unit restaurant operators.',
    url: 'https://sovvrn.com',
  },
}

const orgSchema = organizationSchema({
  name: 'Sovvrn',
  url: 'https://sovvrn.com',
  email: 'hello@sovvrn.com',
})

const pillars = [
  {
    icon: BarChart3,
    title: 'Intelligence',
    description: 'A command center that surfaces signals — anomalies, opportunities, and risks — with AI analysis and recommended actions. No digging through dashboards.',
  },
  {
    icon: MessageSquare,
    title: 'AI Coaching',
    description: 'Ask a question in plain English. Get a specific, data-backed answer that traces problems to root causes and tells you what to do next.',
  },
  {
    icon: Phone,
    title: 'Voice AI',
    description: 'An AI phone agent that answers every call, takes orders, captures leads, and handles FAQs — 24/7, across every location.',
  },
  {
    icon: Send,
    title: 'Proactive Delivery',
    description: 'Morning briefings, cost alerts, and performance signals delivered via SMS, email, or Slack before you start your day.',
  },
]

const steps = [
  { step: '01', label: 'Connect', description: 'Link your POS, labor tools, and review platforms. Setup takes minutes, not weeks.' },
  { step: '02', label: 'Ingest', description: 'Sovvrn pulls data from every source into a unified intelligence model for your portfolio.' },
  { step: '03', label: 'Analyze', description: 'AI identifies anomalies, benchmarks locations, traces cost variance, and generates actionable signals.' },
  { step: '04', label: 'Deliver', description: 'You get a morning text. A signal when something needs attention. An AI coach when you want to dig deeper.' },
]

const features = [
  {
    title: 'Command Center',
    description: 'A three-panel intelligence hub that surfaces operational signals with AI analysis and recommended actions. Signals auto-expire after 48 hours so you always see what matters now.',
    badge: 'Intelligence',
    placeholder: 'command-center' as const,
  },
  {
    title: 'Morning Briefing',
    description: '"Yesterday your 10 locations did $47K. Top performer: Oak Park +18%. Needs attention: Airport Terminal B, prime cost 9 points above target." Delivered at 7am via SMS.',
    badge: 'Delivery',
    placeholder: 'morning-briefing' as const,
  },
  {
    title: 'Voice AI Agent',
    description: 'Every call answered. Every lead captured. Every order taken. Your AI phone agent works 24/7 and recovers the revenue that used to go to voicemail.',
    badge: 'Voice',
    placeholder: 'voice-ai' as const,
  },
]

const faqItems = [
  {
    question: 'How is Sovvrn different from my POS reporting?',
    answer: 'Your POS shows you what happened. Sovvrn tells you why it happened and what to do about it. We connect to your POS, labor tools, and review platforms to give you cross-location intelligence — not just data.',
  },
  {
    question: 'Do I need to log in every day to get value?',
    answer: 'No. Sovvrn comes to you. You get a morning briefing via SMS, email, or Slack with everything you need to know. The web app is there when you want to dig deeper, but most operators get their daily value without logging in.',
  },
  {
    question: 'What POS systems does Sovvrn support?',
    answer: 'Sovvrn connects to Toast, Square, Clover, Revel, and other major restaurant POS systems. If your POS has an API, we can connect to it. Setup takes minutes.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Most operators are live within 24 hours. Connect your POS, set your briefing preferences, and you will receive your first morning briefing the next day.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use enterprise-grade encryption for data in transit and at rest. Your data stays yours — we never share it with third parties. Role-based access controls let you decide exactly who sees what.',
  },
  {
    question: 'How much does Sovvrn cost?',
    answer: 'Plans start at $499/month for the intelligence dashboard and go up to $1,799/month for the full platform including Voice AI and AI Marketing. Founding members get approximately 50% off. Contact us for a custom quote.',
  },
  {
    question: 'Can I manage multiple brands in one account?',
    answer: 'Yes. Sovvrn supports multi-brand portfolio operators. Toggle between brands, see aggregated portfolio views, or drill into any single brand or location. The AI understands the differences between your brands.',
  },
  {
    question: 'What if I only have 3 locations?',
    answer: 'Sovvrn works for operators with as few as 3 locations. In fact, location #3 or #4 is usually when operators first feel the pain of fragmented data. That is exactly when Sovvrn delivers the most value.',
  },
]

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ===== HERO (dark canvas, no card) ===== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(78,138,230,0.12)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">
              The intelligence layer for multi-unit operators
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight md:text-6xl">
              Stop pulling reports.<br />
              Start getting answers.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
              Sovvrn connects to your POS, labor tools, and review platforms — then delivers <span className="highlight-blue">proactive intelligence</span> to your phone before your first location visit. AI coaching, anomaly detection, and cost tracking for multi-unit restaurant operators.
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
                className="inline-flex items-center gap-2 rounded-lg border border-[#2D3748] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#64748B] hover:bg-[#141B2D]"
              >
                See How It Works
              </Link>
            </div>
          </SectionReveal>

          {/* Social proof bar */}
          <SectionReveal delay={0.4}>
            <div className="mt-14 flex flex-wrap items-center gap-8 border-t border-[#1E293B]/60 pt-8 md:gap-14">
              {/* PLACEHOLDER — replace with real data */}
              <StatCounter value="200" suffix="+" label="Locations Monitored" />
              <StatCounter value="99.9" suffix="%" label="Platform Uptime" />
              <StatCounter value="50,000" suffix="+" label="Signals Delivered" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          {/* Heading on dark background */}
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">The operator&apos;s dilemma</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              You run multiple locations. Your data lives in multiple systems. Nothing talks to each other.
            </h2>
          </SectionReveal>
          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Blind spots between visits',
                body: 'You rely on GMs to surface problems. By the time you hear about it, the damage is done — a week of food cost overruns, a surge of negative reviews, or a staffing issue that quietly bled revenue.',
              },
              {
                title: 'Data overload, zero clarity',
                body: 'You have Toast data, labor data, review data, and accounting data. None of it connects. You spend your mornings copying numbers into spreadsheets instead of coaching your teams.',
              },
              {
                title: 'Missed calls, missed revenue',
                body: 'Phones ring during rush and go to voicemail. After hours, they ring and nobody answers. Each missed call is a missed order, a missed catering lead, or a frustrated customer who calls your competitor.',
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="content-card rounded-2xl p-8 md:p-10">
                  <h3 className="text-lg font-bold text-[#2D3748]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM PILLARS ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Platform</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              Four pillars of operational intelligence
            </h2>
            <p className="mt-4 max-w-xl text-[#CBD5E1]">
              Sovvrn is not another dashboard. It is an intelligence layer that connects to your existing systems and delivers answers — not charts.
            </p>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="content-card-hover rounded-2xl p-8 md:p-10">
                  <pillar.icon size={28} className="text-accent-blue" />
                  <h3 className="mt-4 text-xl font-bold text-[#2D3748]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{pillar.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.4}>
            <div className="mt-8 text-center">
              <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline">
                Explore the full platform <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">How it works</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              From connected to coached in four steps
            </h2>
          </SectionReveal>
          {/* Steps inside a white card */}
          <SectionReveal delay={0.1}>
            <div className="content-card mt-10 rounded-2xl p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-4">
                {steps.map((s) => (
                  <div key={s.step} className="relative">
                    <span className="font-mono text-3xl font-bold text-accent-blue/20">{s.step}</span>
                    <h3 className="mt-2 text-lg font-bold text-[#2D3748]">{s.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FEATURE DEEP-DIVES ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Product</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              Built for operators who run their business from the floor
            </h2>
          </SectionReveal>
          <div className="mt-10 space-y-6">
            {features.map((feat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="content-card rounded-2xl p-8 md:p-10">
                  <span className="inline-block rounded-md bg-accent-blue/10 px-3 py-1 font-mono text-xs font-medium text-accent-blue">
                    {feat.badge}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-medium text-[#1A1A2E] md:text-3xl">{feat.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A5568]">{feat.description}</p>
                  <div className="mt-8">
                    {feat.placeholder === 'command-center' && (
                      <CommandCenterSvg className="w-full" />
                    )}
                    {feat.placeholder === 'morning-briefing' && (
                      <div className="flex justify-center">
                        <MorningBriefingSvg className="h-[400px] w-auto md:h-[480px]" />
                      </div>
                    )}
                    {feat.placeholder === 'voice-ai' && (
                      <div className="flex justify-center">
                        <VoiceAiSvg className="h-[300px] w-auto md:h-[380px]" />
                      </div>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Results</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              Numbers that matter to operators
            </h2>
          </SectionReveal>
          {/* Stats in a card */}
          <SectionReveal delay={0.1}>
            <div className="card-dark mt-10 rounded-2xl p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-4">
                {/* PLACEHOLDER — replace with real data */}
                <StatCounter value="12" suffix="%" label="Avg. Cost Reduction in 30 Days" />
                <StatCounter value="3,000" prefix="$" suffix="+" label="Monthly Recovered Revenue (Voice AI)" />
                <StatCounter value="90" suffix=" sec" label="Avg. Time to First Insight" />
                <StatCounter value="200" suffix="+" label="Locations Monitored" />
              </div>
            </div>
          </SectionReveal>

          {/* Testimonial placeholder */}
          <SectionReveal delay={0.2}>
            <div className="content-card mt-6 rounded-2xl p-8 md:p-10">
              <p className="max-w-2xl font-heading text-xl italic leading-relaxed text-[#2D3748] md:text-2xl">
                {/* PLACEHOLDER — replace with real testimonial */}
                &ldquo;Before Sovvrn, I spent 90 minutes every morning logging into Toast for each of my 12 locations. Now I get a text at 7am that tells me exactly where to focus. Last month it flagged a produce invoice <span className="highlight-gold">22% above contract price</span> that would have cost us $4K.&rdquo;
              </p>
              <p className="mt-4 font-mono text-xs text-[#9CA3AF]">[PLACEHOLDER] — Name, Title, Company, 12 Locations</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== VERTICALS TEASER ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Verticals</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              Built for restaurants. Expanding to active entertainment.
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <SectionReveal delay={0.1}>
              <Link href="/restaurants" className="content-card-hover group block rounded-2xl p-8 md:p-10">
                <UtensilsCrossed size={28} className="text-accent-blue" />
                <h3 className="mt-4 text-xl font-bold text-[#2D3748]">Restaurants</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                  Multi-unit chains, franchise groups, and portfolio operators. Prime cost tracking, labor analytics, review intelligence, and Voice AI built for restaurant operations.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue">
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="content-card rounded-2xl p-8 opacity-60 md:p-10">
                <Dumbbell size={28} className="text-[#9CA3AF]" />
                <h3 className="mt-4 text-xl font-bold text-[#2D3748]">Active Entertainment</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                  Climbing gyms, trampoline parks, and adventure centers. Multi-location operational intelligence tailored to the entertainment vertical.
                </p>
                <span className="mt-4 inline-block font-mono text-xs text-[#9CA3AF]">Coming soon</span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQSection
        title="Common questions about Sovvrn"
        items={faqItems}
      />

      {/* ===== FINAL CTA (dark canvas, no card — bookend) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-medium md:text-4xl">See Sovvrn in action</h2>
            <p className="mx-auto mt-4 max-w-lg text-[#CBD5E1]">
              Book a 20-minute demo and see how Sovvrn turns fragmented data into morning intelligence for your locations.
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
