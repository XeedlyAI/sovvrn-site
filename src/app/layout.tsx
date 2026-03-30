import type { Metadata } from "next"
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Sovvrn | The Intelligence Layer for Multi-Unit Operators",
    template: "%s | Sovvrn",
  },
  description: "AI-powered business intelligence for multi-unit restaurant operators. Proactive coaching, anomaly detection, and actionable signals — delivered where you already work.",
  metadataBase: new URL('https://sovvrn.com'),
  icons: {
    icon: [
      { url: '/images/Sovvrn_tree_icon_blue.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/Sovvrn_tree_icon_blue.svg',
  },
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
      <body className={`${plusJakarta.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <Header
          brandName="SOVVRN"
          navLinks={navLinks}
          ctaLabel="Book a Demo"
          ctaHref="/contact"
        />
        <div className="topo-continuous-bg">
          {children}
        </div>
        <Footer
          brandName="Sovvrn"
          links={footerLinks}
          copyright={`© ${new Date().getFullYear()} Sovvrn. An XeedlyAI company.`}
        />
      </body>
    </html>
  )
}
