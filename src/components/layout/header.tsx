'use client'

import Link from 'next/link'
import Image from 'next/image'
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

// Pages with light hero backgrounds where nav text needs to be dark
const lightPages = ['/about', '/pricing', '/blog', '/contact']

export function Header({ brandName, navLinks, ctaLabel, ctaHref }: HeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isLightPage = lightPages.includes(pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  // When scrolled, the backdrop is dark on all pages — always use light text
  // When not scrolled on a light page, use dark text
  const useDarkText = isLightPage && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'border-b border-white/[0.08]'
          : 'border-b border-transparent'
      )}
      style={{
        background: scrolled ? 'rgba(12, 15, 20, 0.30)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-0" aria-label={brandName}>
          <Image
            src={useDarkText ? '/images/sovvrn_tree_logo-blue.svg' : '/images/sovvrn_tree_logo_white_blue.svg'}
            alt={`${brandName} logo`}
            width={820}
            height={350}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                isActive(link.href)
                  ? 'text-[#38b6ff]'
                  : useDarkText
                    ? 'text-slate-700 hover:text-slate-900'
                    : 'text-white/70 hover:text-white'
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
          className={cn(
            'md:hidden transition-colors duration-200',
            useDarkText ? 'text-slate-700' : 'text-white/80'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav — always dark backdrop */}
      {mobileOpen && (
        <nav
          className="flex flex-col gap-4 border-t border-white/[0.08] px-5 py-5 md:hidden"
          style={{
            background: 'rgba(12, 15, 20, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                isActive(link.href)
                  ? 'text-[#38b6ff]'
                  : 'text-white/70 hover:text-white'
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
