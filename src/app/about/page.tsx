import type { Metadata } from 'next'
import Link from 'next/link'
import { organizationSchema } from '@/lib/structured-data'
import { SectionReveal } from '@/components/sections/section-reveal'
import { ScreenshotFrame } from '@/components/sections/screenshot-frame'
import { ArrowRight, Target, Eye, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Sovvrn | Our Story & Mission',
  description: 'Sovvrn was built by a restaurant industry insider who watched operators drown in data while starving for intelligence. Learn about our vision and the team behind the platform.',
  openGraph: {
    title: 'About Sovvrn | Our Story & Mission',
    description: 'Built by a restaurant industry insider who watched operators drown in data while starving for intelligence.',
    url: 'https://sovvrn.com/about',
  },
}

const aboutSchema = organizationSchema({
  name: 'Sovvrn',
  url: 'https://sovvrn.com',
  email: 'hello@sovvrn.com',
})

const values = [
  {
    icon: Target,
    title: 'Operator-first',
    description: 'Every feature starts with a question: "Does this save the operator time or money today?" If the answer is no, we do not build it. We ship intelligence to where operators already work — their phone, their Slack, their morning routine.',
  },
  {
    icon: Eye,
    title: 'Data-honest',
    description: 'We show you what the data actually says, not what you want to hear. When costs are rising, we tell you. When a location is underperforming, we name it. Sugar-coating wastes your time and your margin.',
  },
  {
    icon: Zap,
    title: 'Proactive, not reactive',
    description: 'The best intelligence arrives before you need it. A morning briefing before your first visit. A cost alert before the month is ruined. A coaching nudge before a small problem becomes an expensive one.',
  },
  {
    icon: Shield,
    title: 'Your data stays yours',
    description: 'We never share your data with competitors, vendors, or third parties. Enterprise-grade encryption, role-based access, and SOC 2 compliance are table stakes — not add-ons.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Topo background group: all light sections (no dark sections on About) */}
      <div className="topo-section-bg">

      {/* ===== HERO (light — no dark hero on About) ===== */}
      <section className="relative overflow-hidden bg-wash-blue py-20 md:py-28">
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">About</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
              We built Sovvrn because operators deserve better than spreadsheets
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
              Every multi-unit operator we talked to described the same morning: log into the POS for each location, copy numbers into a spreadsheet, try to spot what changed, and hope nothing slipped through the cracks. We built Sovvrn to replace that routine with intelligence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FOUNDER STORY (white) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">The origin</p>
              <h2 className="text-3xl font-bold md:text-4xl">Born from frustration, built with purpose</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-body">
                <p>
                  Sovvrn started with a simple observation: the operators who run our favorite restaurants are working harder than almost anyone in business, and the tools they have are not keeping up.
                </p>
                <p>
                  A 10-location pizza chain operator spending 90 minutes every morning pulling reports from Toast — location by location, tab by tab — just to build a picture of yesterday. A franchise group managing three brands with three different dashboards, none of them aware the others exist. A single missed catering call during Friday lunch rush costing $2,500 because the host was seating a party of twelve.
                </p>
                <p>
                  These operators are not short on data. They are short on intelligence. The data exists in their POS, their labor tools, their review platforms, and their accounting software. But nothing connects it. Nothing interprets it. And nothing delivers it proactively.
                </p>
                <p>
                  That is the gap Sovvrn fills. We connect to the systems operators already use and deliver proactive intelligence — not dashboards they have to check, but briefings that come to them. Not charts they have to interpret, but coaching that tells them what to do.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <ScreenshotFrame
                src="/images/screenshots/command-center-flagged.png"
                alt="Sovvrn Command Center showing a flagged signal with AI analysis and follow-up question — intelligence in action"
                width={3000}
                height={2000}
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== VISION (off-white) ===== */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Vision</p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Give every multi-unit operator the intelligence advantage that billion-dollar chains already have
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-text-body">
              <p>
                The largest restaurant chains in the world have data science teams, dedicated BI analysts, and custom internal tools that surface exactly what the C-suite needs to know. A 10-location operator has a spreadsheet and a prayer.
              </p>
              <p>
                Sovvrn closes that gap. Our AI reads data from the same systems every operator already uses, applies the same analytical rigor that enterprise teams apply, and delivers intelligence in a format that works for someone who runs their business from the driver's seat of a truck between store visits.
              </p>
              <p>
                We are starting with restaurants because it is the vertical we know best. But the architecture is designed for any operator-led, multi-location business — active entertainment, healthcare clinics, auto service chains, fitness studios. Anywhere someone runs multiple locations and needs to know what is happening without being everywhere at once.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== PARENT COMPANY (white) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Parent Company</p>
            <h2 className="text-3xl font-bold md:text-4xl">Built by XeedlyAI</h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-body">
              Sovvrn is a product of{' '}
              <a href="https://xeedly.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                XeedlyAI
              </a>
              , an applied AI company focused on building intelligence products for operator-led businesses. XeedlyAI brings deep expertise in AI engineering, data infrastructure, and vertical SaaS — combined with hands-on understanding of multi-unit operations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ===== VALUES (off-white) ===== */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Values</p>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              What guides every decision we make
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <value.icon size={24} className="text-accent-blue" />
                  <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM (white) ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Team</p>
            <h2 className="text-3xl font-bold md:text-4xl">The people behind Sovvrn</h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            {/* PLACEHOLDER: team members */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="card-light rounded-xl p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-blue/10">
                    <span className="font-mono text-sm text-text-muted">?</span>
                  </div>
                  <p className="mt-4 text-sm font-bold text-text-card-title">[PLACEHOLDER — Team Member {n}]</p>
                  <p className="mt-1 text-xs text-text-muted">[Title]</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== CTA (warm wash — no dark on About) ===== */}
      <section className="bg-wash-warm py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold md:text-4xl">Want to learn more?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-body">
              See how Sovvrn works for your specific operation, or just say hello.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-8 py-3.5 text-sm font-semibold text-text-heading transition-all hover:border-text-secondary/40 hover:bg-white"
              >
                Explore the Platform
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
      </div>{/* end topo-section-bg */}
    </main>
  )
}
