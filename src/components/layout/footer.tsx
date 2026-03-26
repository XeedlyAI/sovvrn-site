import Link from 'next/link'

interface FooterProps {
  brandName: string
  links?: { label: string; href: string }[]
  copyright?: string
}

export function Footer({ brandName, links, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-xl font-medium tracking-wider text-white">
              SOVVRN
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#64748B]">
              The intelligence layer for multi-unit operators. Proactive signals, AI coaching, and operational clarity — delivered where you already work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#64748B]">Navigation</h4>
            {links && (
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#64748B]">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="https://xeedly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#64748B] transition-colors hover:text-white"
              >
                XeedlyAI (Parent Company)
              </a>
              <Link href="/contact" className="text-sm text-[#64748B] transition-colors hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1E293B] pt-6">
          <p className="text-xs text-[#64748B]">
            {copyright ?? `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
