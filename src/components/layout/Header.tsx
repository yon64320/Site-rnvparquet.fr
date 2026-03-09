'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS } from '@/lib/metadata'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/entreprise', label: 'Entreprise' },
  { href: '/avis', label: 'Avis' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium ${
        scrolled
          ? 'bg-forest/98 backdrop-blur-md shadow-soft py-3'
          : 'bg-forest py-5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="RNV Parquet — Accueil">
          <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 14h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              <path d="M7 17h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <span className="block font-serif font-semibold text-cream text-lg leading-tight tracking-wide">
              RNV Parquet
            </span>
            <span className="block text-gold/80 text-xs font-sans tracking-widest uppercase">
              Artisan • Strasbourg
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-sans font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-cream bg-forest-light'
                    : 'text-cream/70 hover:text-cream hover:bg-white/10'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="hidden md:flex items-center gap-2 text-cream/80 hover:text-cream text-sm font-sans transition-colors duration-200"
            aria-label={`Appeler RNV Parquet au ${BUSINESS.phone}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {BUSINESS.phone}
          </a>

          <Link href="/contact" className="btn-gold hidden sm:inline-flex text-sm px-5 py-3">
            Devis gratuit
          </Link>

          {/* Burger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-cream relative z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      </header>

      {/* Mobile menu - OUTSIDE header to avoid backdrop-blur stacking context bug on iOS */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[55] overflow-y-auto"
          style={{
            backgroundColor: '#0B1F15',
            paddingTop: scrolled ? '64px' : '72px',
          }}
        >
        <nav className="flex flex-col p-6 gap-2" aria-label="Menu mobile">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-4 text-xl font-serif font-medium rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'text-cream bg-forest-light'
                    : 'text-cream/80 hover:text-cream hover:bg-forest-light/50'
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: menuOpen ? 1 : 0,
                  transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-6 pt-6 border-t border-cream/10 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="btn-primary-light w-full justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-gold w-full justify-center">
              Demander un devis
            </Link>
          </div>
        </nav>
      </div>
      )}
    </>
  )
}
