import type { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/lib/structured-data'
import { SectionReveal } from '@/components/sections/section-reveal'
import { ContactForm } from '@/components/sections/contact-form'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Demo | Contact Sovvrn',
  description: 'See Sovvrn in action. Book a 20-minute demo or contact us directly. We\'ll show you how the platform works for your specific operation.',
  openGraph: {
    title: 'Book a Demo | Sovvrn',
    description: 'See Sovvrn in action. Book a 20-minute demo for your restaurant operation.',
    url: 'https://sovvrn.com/contact',
  },
}

const contactSchema = localBusinessSchema({
  name: 'Sovvrn',
  url: 'https://sovvrn.com',
  phone: '+1-385-555-0100',
  address: {
    street: '123 Main Street',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
  },
  geo: {
    lat: 40.7608,
    lng: -111.891,
  },
})

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(78,138,230,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-gold">Contact</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-normal leading-tight md:text-5xl">
              See Sovvrn in action
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Book a 20-minute demo and we will walk through the platform with your specific operation in mind — your POS, your locations, your cost targets. Or just reach out with a question.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <SectionReveal>
              <div className="rounded-xl border border-border-subtle bg-background p-8">
                <h2 className="text-2xl font-normal">Request a demo</h2>
                <p className="mt-2 text-sm text-text-secondary">Fill out the form and we will be in touch within one business day.</p>
                <ContactForm />
              </div>
            </SectionReveal>

            {/* Contact Info + Calendly */}
            <div className="space-y-8">
              <SectionReveal delay={0.1}>
                <div className="rounded-xl border border-border-subtle bg-background p-8">
                  <h3 className="font-sans text-lg font-semibold text-foreground">Or book directly</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Pick a time that works for you. 20 minutes, no pressure.
                  </p>
                  {/* PLACEHOLDER: Calendly embed */}
                  <div className="mt-6 flex h-64 items-center justify-center rounded-lg border border-border-subtle/60 bg-surface">
                    <p className="font-mono text-xs text-text-secondary">[PLACEHOLDER — Calendly embed]</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="rounded-xl border border-border-subtle bg-background p-8">
                  <h3 className="font-sans text-lg font-semibold text-foreground">Get in touch</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-accent-blue" />
                      <a href="mailto:hello@sovvrn.com" className="text-sm text-text-secondary hover:text-foreground">
                        hello@sovvrn.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-accent-blue" />
                      {/* PLACEHOLDER: real phone number */}
                      <span className="text-sm text-text-secondary">[PLACEHOLDER] (385) 555-0100</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-accent-blue" />
                      <span className="text-sm text-text-secondary">Salt Lake City, Utah</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <h2 className="text-center text-3xl font-normal md:text-4xl">What to expect in your demo</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Your operation',
                description: 'We start by understanding your setup — how many locations, which POS, what metrics matter most to you.',
              },
              {
                step: '02',
                title: 'Live walkthrough',
                description: 'We show you the Command Center, AI Coaching, Morning Briefing, and Voice AI using data that looks like yours.',
              },
              {
                step: '03',
                title: 'Your questions',
                description: 'Ask anything about integrations, pricing, timeline, or how Sovvrn handles your specific challenges.',
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-border-subtle bg-surface p-6">
                  <span className="font-mono text-2xl font-bold text-accent-blue/30">{item.step}</span>
                  <h3 className="mt-2 font-sans text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
