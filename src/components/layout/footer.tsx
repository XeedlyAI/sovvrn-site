import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  brandName: string
  links?: { label: string; href: string }[]
  copyright?: string
}

export function Footer({ brandName, links, copyright }: FooterProps) {
  return (
    <footer className="section-dark border-t border-dark-border">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" aria-label={brandName}>
              <Image
                src="/images/sovvrn-logo-white.svg"
                alt={`${brandName} logo`}
                width={520}
                height={120}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-dark-text-secondary">
              The intelligence layer for multi-unit operators. Proactive signals, AI coaching, and operational clarity — delivered where you already work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-dark-text-secondary">Navigation</h4>
            {links && (
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-dark-text-secondary transition-colors hover:text-dark-text"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-dark-text-secondary">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="https://xeedly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-text-secondary transition-colors hover:text-dark-text"
              >
                XeedlyAI (Parent Company)
              </a>
              <Link href="/contact" className="text-sm text-dark-text-secondary transition-colors hover:text-dark-text">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-border pt-6">
          <p className="text-xs text-dark-text-secondary">
            {copyright ?? `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
