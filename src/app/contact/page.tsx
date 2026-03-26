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

      {/* ===== HERO (dark canvas, no card) ===== */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-blue">Contact</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight md:text-5xl">
              See Sovvrn in action
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
              Book a 20-minute demo and we will walk through the platform with your specific operation in mind — your POS, your locations, your cost targets. Or just reach out with a question.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Contact Form */}
            <SectionReveal>
              <div className="content-card rounded-2xl p-8 md:p-10">
                <h2 className="font-heading text-2xl font-medium text-[#1A1A2E]">Request a demo</h2>
                <p className="mt-2 text-sm text-[#6B7280]">Fill out the form and we will be in touch within one business day.</p>
                <ContactForm />
              </div>
            </SectionReveal>

            {/* Contact Info + Calendly */}
            <div className="space-y-5">
              <SectionReveal delay={0.1}>
                <div className="content-card rounded-2xl p-8 md:p-10">
                  <h3 className="text-lg font-bold text-[#2D3748]">Or book directly</h3>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    Pick a time that works for you. 20 minutes, no pressure.
                  </p>
                  {/* PLACEHOLDER: Calendly embed */}
                  <div className="mt-6 flex h-64 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[#E5E7EB] bg-[#FAFAFA]">
                    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
                      <rect width="48" height="48" rx="10" fill="#4E8AE6" opacity="0.1" />
                      <rect x="12" y="8" width="24" height="32" rx="4" stroke="#4E8AE6" strokeWidth="1.5" fill="none" />
                      <line x1="12" y1="18" x2="36" y2="18" stroke="#4E8AE6" strokeWidth="1.5" />
                      <circle cx="20" cy="26" r="2" fill="#4E8AE6" opacity="0.4" />
                      <circle cx="28" cy="26" r="2" fill="#4E8AE6" />
                      <circle cx="20" cy="34" r="2" fill="#4E8AE6" opacity="0.4" />
                    </svg>
                    <p className="font-mono text-xs text-[#9CA3AF]">Calendly embed coming soon</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="content-card rounded-2xl p-8 md:p-10">
                  <h3 className="text-lg font-bold text-[#2D3748]">Get in touch</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-accent-blue" />
                      <a href="mailto:hello@sovvrn.com" className="text-sm text-[#6B7280] hover:text-[#2D3748]">
                        hello@sovvrn.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-accent-blue" />
                      {/* PLACEHOLDER: real phone number */}
                      <span className="text-sm text-[#6B7280]">[PLACEHOLDER] (385) 555-0100</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-accent-blue" />
                      <span className="text-sm text-[#6B7280]">Salt Lake City, Utah</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-medium md:text-4xl">What to expect in your demo</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
                <div className="content-card rounded-2xl p-8">
                  <span className="font-mono text-2xl font-bold text-accent-blue/20">{item.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-[#2D3748]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
