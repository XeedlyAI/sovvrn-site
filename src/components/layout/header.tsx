'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-200"
      style={{
        backgroundColor: scrolled ? 'rgba(11, 17, 32, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30, 41, 59, 0.5)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
        <Link href="/" className="font-heading text-xl font-medium tracking-wider text-white">
          {brandName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#CBD5E1] transition-colors hover:text-white"
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
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-[#1E293B] bg-[#0B1120] px-5 py-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#CBD5E1] hover:text-white"
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
