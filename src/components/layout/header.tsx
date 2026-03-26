'use client'

import Link from 'next/link'
import { useState } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-xl tracking-wider text-foreground">
          {brandName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-blue/85"
            >
              {ctaLabel}
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border-subtle/60 bg-background px-5 py-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-foreground"
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
