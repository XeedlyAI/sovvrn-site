import type { Metadata } from 'next'
import Link from 'next/link'
import { serviceSchema } from '@/lib/structured-data'
import { SectionReveal } from '@/components/sections/section-reveal'
import { FAQSection } from '@/components/sections/faq-section'
import { CommandCenterSvg } from '@/components/placeholders/command-center-svg'
import { MorningBriefingSvg } from '@/components/placeholders/morning-briefing-svg'
import { VoiceAiSvg } from '@/components/placeholders/voice-ai-svg'
import { ChartPlaceholderSvg } from '@/components/placeholders/chart-placeholder-svg'
import { LocationGridSvg } from '@/components/placeholders/location-grid-svg'
import {
  ArrowRight,
  BarChart3,
  MessageSquare,
  MapPin,
  DollarSign,
  Send,
  Phone,
  Star,
  Layers,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant Business Intelligence Software',
  description: 'Deep-dive into the Sovvrn platform: command center, AI coaching, location intelligence, cost tracking, voice AI, and more. Everything your POS doesn\'t tell you.',
  openGraph: {
    title: 'Restaurant Business Intelligence Software | Sovvrn',
    description: 'Deep-dive into the Sovvrn platform: command center, AI coaching, location intelligence, cost tracking, voice AI, and more.',
    url: 'https://sovvrn.com/platform',
  },
}

const svcSchema = serviceSchema({
  name: 'Sovvrn Intelligence Platform',
  description: 'AI-powered business intelligence platform for multi-unit restaurant operators featuring command center, AI coaching, voice AI, and proactive delivery.',
  provider: 'Sovvrn',
  areaServed: 'United States',
  url: 'https://sovvrn.com/platform',
})

const capabilities = [
  {
    icon: BarChart3,
    id: 'command-center',
    title: 'Command Center',
    subtitle: 'Your operational nerve center',
    description: 'A three-panel intelligence hub that surfaces the signals that matter right now. The left panel shows your signal queue — anomalies, opportunities, and risks ranked by impact. The center panel delivers AI analysis for the selected signal. The right panel shows recommended actions.',
    details: [
      'Signals auto-expire after 48 hours so the queue stays current',
      'Flag signals for follow-up or dismiss them with a reason',
      'AI analysis traces every signal to root causes, not just symptoms',
      'Drill deeper into any signal with one click to see supporting data',
    ],
    placeholder: 'command-center' as const,
  },
  {
    icon: MessageSquare,
    id: 'ai-coaching',
    title: 'AI Coaching',
    subtitle: 'Conversational intelligence for operators',
    description: 'Your AI coach understands your specific business data — not generic restaurant advice. Ask a question in plain English and get a specific, data-backed answer. "Why did my Midvale location\'s labor cost spike this week?" gets a real answer with the invoice, the shift, and the manager responsible.',
    details: [
      'Natural language questions about any location, any metric',
      'Dig Deeper: one-click follow-up that traces problems to root causes',
      'Proactive recommendations based on trends the AI detects',
      'Context-aware — understands your brands, your locations, your benchmarks',
    ],
    placeholder: 'chart' as const,
  },
  {
    icon: MapPin,
    id: 'location-intelligence',
    title: 'Location Intelligence',
    subtitle: 'Cross-location performance at a glance',
    description: 'See every location on one screen with MTD performance data, prior-period benchmarking, sparkline trends, and health scores. Instantly spot which location is the outlier — in which direction, and why.',
    details: [
      'MTD revenue, prime cost, labor, and covers per location',
      'vs. prior period pacing with projected end-of-month',
      'Health scores that weight multiple KPIs into a single signal',
      'Sortable, filterable, and drillable to any individual location',
    ],
    placeholder: 'location-grid' as const,
  },
  {
    icon: DollarSign,
    id: 'cost-intelligence',
    title: 'Cost Intelligence',
    subtitle: 'Real-time prime cost tracking',
    description: 'Track prime cost, food cost, and labor cost with MTD rolling analysis and projected end-of-month numbers. When costs spike, the AI tells you why — which invoice, which shift, which line item.',
    details: [
      'Real-time cost tracking with daily and weekly granularity',
      'Projected end-of-month based on current run rate',
      'AI analysis of cost variance — not just "costs went up" but "why"',
      'Benchmark against network averages across your portfolio',
    ],
    placeholder: 'chart' as const,
  },
  {
    icon: Send,
    id: 'morning-briefing',
    title: 'Morning Briefing',
    subtitle: 'Daily intelligence delivered to your phone',
    description: 'Every morning you get a summary of yesterday\'s performance across all locations. Top performers, underperformers, cost alerts, and recommended focus areas — delivered via SMS, email, or Slack before your first location visit.',
    details: [
      'Customizable delivery time and channel (SMS, email, Slack)',
      'Includes revenue, covers, prime cost, and standout signals',
      'Reply to the SMS to ask follow-up questions via AI coach',
      'Separate briefings per brand for portfolio operators',
    ],
    placeholder: 'morning-briefing' as const,
  },
  {
    icon: Phone,
    id: 'voice-ai',
    title: 'Voice AI',
    subtitle: 'An AI phone agent for every location',
    description: 'Sovvrn Voice AI answers calls, takes orders, books reservations, handles FAQs, and captures leads — 24 hours a day, 7 days a week. Built on Vapi, Twilio, and ElevenLabs with natural-sounding voices trained on restaurant conversations.',
    details: [
      'Answers within 2 rings — no hold music, no voicemail',
      'Handles order-taking with full menu understanding',
      'Captures catering leads and forwards to the right manager',
      'Call transcripts and analytics in your Sovvrn dashboard',
    ],
    placeholder: 'voice-ai' as const,
  },
  {
    icon: Star,
    id: 'review-intelligence',
    title: 'Review Intelligence',
    subtitle: 'AI-powered reputation management',
    description: 'Monitor Google, Yelp, and Facebook reviews across every location from one screen. AI generates response drafts, tracks sentiment trends, and flags locations with declining review velocity before it becomes a pattern.',
    details: [
      'Aggregated review dashboard with location-by-location breakdown',
      'AI-generated response drafts that match your brand voice',
      'Sentiment analysis and trend detection per location',
      'Alerts when review velocity drops or negative sentiment spikes',
    ],
    placeholder: 'chart' as const,
  },
  {
    icon: Layers,
    id: 'portfolio-support',
    title: 'Portfolio Support',
    subtitle: 'Multi-brand, multi-unit visibility',
    description: 'Portfolio operators running multiple brands get a unified view. Toggle between brands, see aggregated portfolio metrics, or drill into any single brand or location. The AI understands the differences between your brands — different KPI targets, different cost structures, different benchmarks.',
    details: [
      'Brand-level dashboards with brand-specific KPI targets',
      'Portfolio-wide aggregation for investor reporting',
      'Cross-brand benchmarking to identify best practices',
      'Role-based access so brand GMs see only their brand',
    ],
    placeholder: 'chart' as const,
  },
]

const integrations = [
  'Toast', 'Square', 'Clover', 'Revel', 'Aloha', 'Lightspeed',
  '7shifts', 'HotSchedules', 'Homebase',
  'Google Business', 'Yelp', 'Facebook',
  'QuickBooks', 'Xero',
]

const faqItems = [
  {
    question: 'What data does Sovvrn need to get started?',
    answer: 'At minimum, your POS connection. That gives you revenue, covers, check averages, and product mix data across locations. Add labor tools for cost intelligence and review platforms for reputation monitoring. Each integration adds a new dimension to your intelligence.',
  },
  {
    question: 'How does the AI coaching actually work?',
    answer: 'The AI has access to your real-time operational data. When you ask a question — "Why is my food cost up this week?" — it queries your data, identifies the specific invoices or items driving the variance, and gives you a plain-English answer with recommended actions.',
  },
  {
    question: 'Can I customize which signals I see?',
    answer: 'Yes. You can set sensitivity thresholds per signal type, mute specific signal categories, or configure which signals trigger SMS alerts vs. staying in the dashboard. Most operators start with defaults and tune over the first two weeks.',
  },
  {
    question: 'Does Voice AI work with my existing phone system?',
    answer: 'Voice AI works with any phone system. We assign a Sovvrn number that can forward from your existing line, or you can port your number to us. Calls are answered by the AI agent, and transcripts appear in your dashboard within seconds.',
  },
  {
    question: 'How accurate is the cost intelligence?',
    answer: 'Cost data is as accurate as what your POS and invoice systems provide. Sovvrn reads directly from your source systems — we do not ask you to re-enter data. AI analysis identifies variance patterns and traces them to specific invoices, shifts, or menu items.',
  },
]

function CapabilityPlaceholder({ type }: { type: string }) {
  switch (type) {
    case 'command-center':
      return <CommandCenterSvg className="w-full" />
    case 'morning-briefing':
      return (
        <div className="flex justify-center">
          <MorningBriefingSvg className="h-[360px] w-auto md:h-[440px]" />
        </div>
      )
    case 'voice-ai':
      return (
        <div className="flex justify-center">
          <VoiceAiSvg className="h-[280px] w-auto md:h-[360px]" />
        </div>
      )
    case 'location-grid':
      return <LocationGridSvg className="w-full" />
    case 'chart':
    default:
      return <ChartPlaceholderSvg className="w-full" />
  }
}

export default function PlatformPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />

      {/* ===== HERO (dark canvas, no card) ===== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(78,138,230,0.12)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Platform</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight md:text-6xl">
              Everything your POS doesn&apos;t tell you
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
              Sovvrn sits on top of your existing systems and adds the <span className="highlight-blue">intelligence layer</span> that turns raw data into coached decisions. Here is a full walkthrough of every capability.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      {capabilities.map((cap, i) => (
        <section
          key={cap.id}
          id={cap.id}
          className="py-12 md:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-5">
            {/* Heading on dark background */}
            <SectionReveal>
              <div className="flex items-start gap-4">
                <cap.icon size={28} className="mt-1 shrink-0 text-accent-blue" />
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">{cap.subtitle}</p>
                  <h2 className="mt-2 font-heading text-3xl font-medium md:text-4xl">{cap.title}</h2>
                </div>
              </div>
            </SectionReveal>
            {/* Content in white card */}
            <SectionReveal delay={0.1}>
              <div className="content-card mt-8 rounded-2xl p-8 md:p-10">
                <p className="max-w-2xl text-base leading-relaxed text-[#4A5568]">{cap.description}</p>
                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                  {cap.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                      <span className="text-sm leading-relaxed text-[#6B7280]">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CapabilityPlaceholder type={cap.placeholder} />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      ))}

      {/* ===== INTEGRATIONS ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Integrations</p>
            <h2 className="max-w-2xl font-heading text-3xl font-medium md:text-4xl">
              Connects to the systems you already use
            </h2>
            <p className="mt-4 max-w-xl text-[#CBD5E1]">
              Sovvrn reads from your POS, labor tools, review platforms, and accounting software. If your system has an API, we can connect to it.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="content-card mt-10 rounded-2xl p-8 md:p-10">
              <div className="flex flex-wrap gap-3">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-medium text-[#6B7280]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQSection
        title="Platform questions"
        items={faqItems}
      />

      {/* ===== CTA (dark canvas, no card) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-medium md:text-4xl">Ready to see the full platform?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[#CBD5E1]">
              Book a 20-minute demo and we will walk you through every capability with your actual use case in mind.
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
