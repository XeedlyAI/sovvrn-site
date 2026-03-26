import type { Metadata } from "next"
import { Newsreader, Inter, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import "./globals.css"

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: "Sovvrn | The Intelligence Layer for Multi-Unit Operators",
    template: "%s | Sovvrn",
  },
  description: "AI-powered business intelligence for multi-unit restaurant operators. Proactive coaching, anomaly detection, and actionable signals — delivered where you already work.",
  metadataBase: new URL('https://sovvrn.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sovvrn',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Restaurants', href: '/restaurants' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const footerLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Restaurants', href: '/restaurants' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header
          brandName="SOVVRN"
          navLinks={navLinks}
          ctaLabel="Book a Demo"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brandName="Sovvrn"
          links={footerLinks}
          copyright={`© ${new Date().getFullYear()} Sovvrn. An XeedlyAI company.`}
        />
      </body>
    </html>
  )
}
