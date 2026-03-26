import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionReveal } from '@/components/sections/section-reveal'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights & Resources',
  description: 'Practical intelligence for multi-unit restaurant operators. Articles on prime cost management, labor optimization, AI in restaurant operations, and more.',
  openGraph: {
    title: 'Insights & Resources | Sovvrn',
    description: 'Practical intelligence for multi-unit restaurant operators.',
    url: 'https://sovvrn.com/blog',
  },
}

// PLACEHOLDER posts — replace with CMS or MDX content
const posts = [
  {
    slug: 'how-to-manage-multiple-restaurant-locations',
    title: 'How to Manage Multiple Restaurant Locations Without Losing Your Mind',
    excerpt: 'Running 3+ locations means your old routines break down. Here is a practical framework for cross-location visibility that does not require a data team or another dashboard.',
    date: '2024-12-15',
    category: 'Operations',
    readTime: '8 min read',
  },
  {
    slug: 'prime-cost-tracking-restaurant-operators',
    title: 'Prime Cost Tracking for Restaurant Operators: What Your POS Is Missing',
    excerpt: 'Your POS tracks sales. Your invoices track costs. But nobody is tracking prime cost in real time across all your locations. Here is why that gap costs you thousands every month.',
    date: '2024-12-01',
    category: 'Cost Intelligence',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(78,138,230,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <SectionReveal>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-accent-gold">Blog</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-normal leading-tight md:text-5xl">
              Insights for multi-unit operators
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Practical articles on restaurant operations, cost management, AI-powered intelligence, and running multiple locations without burning out.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ===== POST LISTING ===== */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <article className="group flex h-full flex-col rounded-xl border border-border-subtle bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent-blue/30">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-accent-blue/10 px-2.5 py-1 font-mono text-xs font-medium text-accent-blue">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-secondary">{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-normal leading-snug">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <time className="font-mono text-xs text-text-secondary" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue">
                      Read <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Empty state message */}
          <SectionReveal delay={0.2}>
            <div className="mt-12 rounded-xl border border-border-subtle bg-background p-8 text-center">
              <p className="text-text-secondary">
                More articles coming soon. Want to be notified?{' '}
                <Link href="/contact" className="text-accent-blue hover:underline">
                  Get in touch
                </Link>{' '}
                and we will add you to our list.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-normal md:text-4xl">Ready to stop pulling reports?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              See how Sovvrn delivers intelligence to operators who run their business from the floor.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-blue/85"
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
