'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SectionReveal } from '@/components/sections/section-reveal'
import { FAQSection } from '@/components/sections/faq-section'
import {
  ArrowRight,
  Check,
  Minus,
  Lock,
  BarChart3,
  Smartphone,
  RefreshCw,
  Mail,
  Target,
} from 'lucide-react'

/* ── Plan data ── */

const plans = [
  {
    name: 'Sovvrn Core',
    subtitle: 'For growing operators',
    monthlyPrice: 599,
    annualPrice: 499,
    cta: 'Start with Core',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      'Up to 5 locations',
      'Morning Briefing (SMS + Email)',
      'Cost Intelligence (prime cost, food, labor)',
      'Location Intelligence scorecards',
      'Revenue & transaction tracking',
      '7-day trend analysis',
      'Basic AI coaching',
      'Email support',
    ],
  },
  {
    name: 'Sovvrn Pro',
    subtitle: 'For multi-unit operators',
    monthlyPrice: 1199,
    annualPrice: 999,
    cta: 'Start with Pro',
    ctaHref: '/contact',
    highlighted: true,
    features: [
      'Up to 15 locations',
      'Morning Briefing (SMS + Email + Slack)',
      'Command Center with signal triage',
      'Advanced AI coaching with follow-up chat',
      'Voice AI Agent (1 agent included)',
      'Review Intelligence (Google, Yelp, Facebook)',
      'Location deep-dive analysis',
      '30-day trend & projected EOM',
      'Priority support',
    ],
  },
  {
    name: 'Sovvrn Enterprise',
    subtitle: 'For portfolio operators',
    monthlyPrice: 2199,
    annualPrice: 1799,
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      'Unlimited locations',
      'Multi-brand portfolio switching',
      'Aggregated portfolio reporting',
      'Multiple Voice AI Agents',
      'Marketing Intelligence & attribution',
      'Custom integrations',
      'Dedicated success manager',
      'SLA & uptime guarantee',
      'SSO & advanced security',
    ],
  },
]

/* ── "All plans include" items ── */

const allPlansInclude = [
  { icon: Lock, label: 'Bank-grade encryption' },
  { icon: BarChart3, label: 'Real-time data sync' },
  { icon: Smartphone, label: 'Mobile-optimized dashboard' },
  { icon: RefreshCw, label: 'Automatic POS integration' },
  { icon: Mail, label: 'Morning Briefing delivery' },
  { icon: Target, label: 'AI-powered insights' },
]

/* ── Comparison table data ── */

type CellValue = true | false | string

interface FeatureRow {
  feature: string
  core: CellValue
  pro: CellValue
  enterprise: CellValue
}

interface FeatureGroup {
  group: string
  rows: FeatureRow[]
}

const comparisonData: FeatureGroup[] = [
  {
    group: 'Intelligence & Analytics',
    rows: [
      { feature: 'Network dashboard', core: true, pro: true, enterprise: true },
      { feature: 'Location scorecards', core: true, pro: true, enterprise: true },
      { feature: 'Cost Intelligence (prime/food/labor)', core: true, pro: true, enterprise: true },
      { feature: 'Revenue & transaction tracking', core: true, pro: true, enterprise: true },
      { feature: '7-day trend analysis', core: true, pro: true, enterprise: true },
      { feature: '30-day trend & projected EOM', core: false, pro: true, enterprise: true },
      { feature: 'Command Center signals', core: false, pro: true, enterprise: true },
      { feature: 'Location deep-dive analysis', core: false, pro: true, enterprise: true },
      { feature: 'Multi-brand portfolio view', core: false, pro: false, enterprise: true },
      { feature: 'Marketing attribution', core: false, pro: false, enterprise: true },
    ],
  },
  {
    group: 'AI Coaching',
    rows: [
      { feature: 'Morning Briefing narrative', core: true, pro: true, enterprise: true },
      { feature: 'Basic AI coaching', core: true, pro: true, enterprise: true },
      { feature: 'Advanced AI coaching', core: false, pro: true, enterprise: true },
      { feature: 'Follow-up chat conversations', core: false, pro: true, enterprise: true },
      { feature: 'Analyze button (deep dives)', core: false, pro: true, enterprise: true },
    ],
  },
  {
    group: 'Voice AI',
    rows: [
      { feature: 'Voice AI Agent', core: false, pro: '1 agent', enterprise: 'Unlimited' },
      { feature: 'Phone order capture', core: false, pro: true, enterprise: true },
      { feature: 'Call analytics & reporting', core: false, pro: true, enterprise: true },
      { feature: 'Custom voice & personality', core: false, pro: true, enterprise: true },
      { feature: 'Menu & FAQ knowledge base', core: false, pro: true, enterprise: true },
    ],
  },
  {
    group: 'Delivery & Integrations',
    rows: [
      { feature: 'Email delivery', core: true, pro: true, enterprise: true },
      { feature: 'SMS delivery', core: true, pro: true, enterprise: true },
      { feature: 'Slack delivery', core: false, pro: true, enterprise: true },
      { feature: 'POS integration (Toast, Square)', core: true, pro: true, enterprise: true },
      { feature: 'Custom integrations', core: false, pro: false, enterprise: true },
      { feature: 'SSO & advanced security', core: false, pro: false, enterprise: true },
    ],
  },
  {
    group: 'Support',
    rows: [
      { feature: 'Email support', core: true, pro: true, enterprise: true },
      { feature: 'Priority support', core: false, pro: true, enterprise: true },
      { feature: 'Dedicated success manager', core: false, pro: false, enterprise: true },
      { feature: 'SLA guarantee', core: false, pro: false, enterprise: true },
    ],
  },
]

/* ── FAQ ── */

const faqItems = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, upgrade or downgrade anytime. Changes take effect at your next billing cycle. When you upgrade, you get immediate access to new features.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No. Sovvrn connects to your existing POS and tools. Setup takes minutes, not weeks, and there is no implementation fee.',
  },
  {
    question: 'What counts as a "location"?',
    answer: 'Each physical restaurant location counts as one location. If you run 10 stores, that is 10 locations. Shared kitchens or ghost kitchens each count separately.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'We offer a guided demo where you see Sovvrn working with your actual data. Book a demo to get started.',
  },
  {
    question: 'What POS systems do you support?',
    answer: 'Toast, Square, Clover, and more. We are adding new integrations regularly. If your POS is not listed, ask us — we may already support it.',
  },
  {
    question: 'What if I have more than 15 locations but don\'t need Enterprise features?',
    answer: 'Contact us. We will build a custom plan that fits your operation without paying for features you don\'t need.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. Enterprise-grade encryption, SOC 2 compliance, role-based access controls, and we never share your data with anyone.',
  },
]

/* ── Cell renderer ── */

function CellValue({ value }: { value: CellValue }) {
  if (value === true) return <Check size={18} className="mx-auto text-accent-blue" />
  if (value === false) return <Minus size={16} className="mx-auto text-text-muted/50" />
  return <span className="text-sm font-medium text-text-card-title">{value}</span>
}

/* ── Page component ── */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <main>
      {/* Topo background group: all light sections */}
      <div className="topo-section-bg">

      {/* ===== HERO ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Pricing</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Simple pricing for every operator
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
              Whether you run 3 locations or 30, Sovvrn scales with your operation. No hidden fees, no per-location surcharges.
            </p>
          </SectionReveal>

          {/* Annual/Monthly toggle */}
          <SectionReveal delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-text-heading' : 'text-text-muted'}`}>
                Monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isAnnual}
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 ${isAnnual ? 'bg-accent-blue' : 'bg-border-subtle'}`}
              >
                <span
                  className={`pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${isAnnual ? 'translate-x-[22px]' : 'translate-x-[1px]'}`}
                  style={{ marginTop: '1px' }}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-text-heading' : 'text-text-muted'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-1 rounded-full bg-accent-gold/15 px-2.5 py-0.5 text-xs font-semibold text-accent-gold">
                  Save 20%
                </span>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid items-start gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl border bg-white p-8 transition-all duration-200 hover:shadow-lg ${
                    plan.highlighted
                      ? 'border-accent-blue/40 shadow-lg shadow-accent-blue/8 md:-translate-y-2 md:scale-[1.02]'
                      : 'border-border-subtle shadow-sm'
                  }`}
                >
                  {/* Most Popular badge */}
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}

                  <p className="text-sm font-medium text-text-muted">{plan.subtitle}</p>
                  <h3 className="mt-1 text-xl font-bold">{plan.name}</h3>

                  {/* Price */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-text-heading">
                        ${(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString()}
                      </span>
                      <span className="text-sm text-text-muted">/mo</span>
                    </div>
                    <p className="mt-1 text-xs text-text-muted">
                      per organization{isAnnual ? ', billed annually' : ''}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.ctaHref}
                    className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-accent-blue text-white hover:brightness-110 hover:shadow-md'
                        : 'border border-border-subtle text-text-heading hover:border-text-secondary/40 hover:bg-surface'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-text-body">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent-blue" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALL PLANS INCLUDE ===== */}
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Every plan includes</h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {allPlansInclude.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <item.icon size={24} className="text-accent-blue" />
                  <span className="text-sm font-medium text-text-card-title">{item.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FEATURE COMPARISON TABLE ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Compare plans in detail</h2>
          </SectionReveal>

          {/* Desktop table */}
          <SectionReveal delay={0.1}>
            <div className="hidden md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border-subtle">
                    <th className="pb-4 text-left text-sm font-medium text-text-muted">Feature</th>
                    <th className="pb-4 text-center text-sm font-semibold text-text-heading">Core</th>
                    <th className="pb-4 text-center text-sm font-semibold text-accent-blue">Pro</th>
                    <th className="pb-4 text-center text-sm font-semibold text-text-heading">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((group) => (
                    <>
                      <tr key={group.group}>
                        <td colSpan={4} className="bg-surface/60 px-3 py-2.5 text-sm font-bold text-text-card-title">
                          {group.group}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.feature} className="border-b border-border-subtle/60">
                          <td className="py-3 pr-4 text-sm text-text-body">{row.feature}</td>
                          <td className="py-3 text-center"><CellValue value={row.core} /></td>
                          <td className="py-3 text-center"><CellValue value={row.pro} /></td>
                          <td className="py-3 text-center"><CellValue value={row.enterprise} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          {/* Mobile: accordion-based comparison */}
          <div className="md:hidden">
            {comparisonData.map((group, gi) => (
              <SectionReveal key={group.group} delay={gi * 0.05}>
                <div className="mb-6">
                  <h3 className="mb-3 text-base font-bold text-text-card-title">{group.group}</h3>
                  <div className="space-y-2">
                    {group.rows.map((row) => (
                      <div key={row.feature} className="rounded-lg border border-border-subtle/60 bg-white p-3">
                        <p className="mb-2 text-sm font-medium text-text-body">{row.feature}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="mb-0.5 text-[10px] font-medium uppercase text-text-muted">Core</p>
                            <CellValue value={row.core} />
                          </div>
                          <div>
                            <p className="mb-0.5 text-[10px] font-medium uppercase text-accent-blue">Pro</p>
                            <CellValue value={row.pro} />
                          </div>
                          <div>
                            <p className="mb-0.5 text-[10px] font-medium uppercase text-text-muted">Enterprise</p>
                            <CellValue value={row.enterprise} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-surface">
        <FAQSection
          title="Pricing questions"
          items={faqItems}
        />
      </section>

      </div>{/* end topo-section-bg */}

      {/* ===== FINAL CTA (dark) ===== */}
      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold md:text-4xl">Ready to stop pulling reports?</h2>
            <p className="mx-auto mt-4 max-w-lg text-dark-text-body">
              Book a demo and see Sovvrn working with your operation&apos;s data.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-dark-border px-8 py-3.5 text-sm font-semibold text-dark-text transition-all hover:border-dark-text-secondary/40 hover:bg-dark-surface"
              >
                Talk to Sales
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
