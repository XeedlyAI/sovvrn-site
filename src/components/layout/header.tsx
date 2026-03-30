'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface HeaderProps {
  brandName: string
  navLinks: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export function Header({ brandName, navLinks, ctaLabel, ctaHref }: HeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/80 backdrop-blur-xl transition-shadow duration-200"
      style={{ boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.06)' : 'none' }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-wider text-text-card-title">
          {brandName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-text-heading',
                isActive(link.href)
                  ? 'text-accent-blue'
                  : 'text-text-secondary'
              )}
            >
              {link.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md"
            >
              {ctaLabel}
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-text-card-title md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border-subtle bg-white px-5 py-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium hover:text-text-heading',
                isActive(link.href)
                  ? 'text-accent-blue'
                  : 'text-text-secondary'
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="rounded-lg bg-accent-blue px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          )}
        </nav>
      )}
    </header>
  )
}
