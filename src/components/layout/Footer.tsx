import Link from 'next/link'
import { BUSINESS } from '@/lib/metadata'

const SERVICES_LINKS = [
  { href: '/services#pose-parquet', label: 'Pose de parquet' },
  { href: '/services#renovation', label: 'Rénovation parquet' },
  { href: '/services#poncage', label: 'Ponçage' },
  { href: '/services#vitrification', label: 'Vitrification' },
  { href: '/services#escaliers', label: 'Escaliers' },
  { href: '/services#terrasses', label: 'Terrasses bois' },
]

const CITIES = [
  'Strasbourg', 'Schiltigheim', 'Illkirch-Graffenstaden', 'Obernai',
  'Sélestat', 'Molsheim', 'Haguenau', 'Saverne', 'Benfeld',
]

export function Footer() {
  return (
    <footer className="bg-forest text-cream/80" aria-label="Pied de page">
      {/* Main footer */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <div className="w-9 h-9 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="block font-serif font-semibold text-cream text-base">RNV Parquet</span>
              <span className="block text-gold/70 text-xs tracking-widest uppercase">Artisan • Strasbourg</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-cream/60 mb-6">
            Parqueteur artisan à Hangenbieten, spécialiste de la pose et rénovation de parquet dans le Bas-Rhin depuis 30 ans.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            1 chantier = 10 arbres plantés 🌱
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-serif font-semibold text-cream text-base mb-5">Services</h3>
          <ul className="space-y-2.5">
            {SERVICES_LINKS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Zone */}
        <div>
          <h3 className="font-serif font-semibold text-cream text-base mb-5">Zone d&apos;intervention</h3>
          <p className="text-sm text-cream/60 mb-4">Strasbourg et Bas-Rhin dans un rayon de 50 km :</p>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span
                key={city}
                className="text-xs bg-forest-light/50 text-cream/70 rounded-lg px-2.5 py-1"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif font-semibold text-cream text-base mb-5">Contact</h3>
          <ul className="space-y-4 text-sm text-cream/60">
            <li className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0 text-gold" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>{BUSINESS.address}<br />{BUSINESS.zip} {BUSINESS.city}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href={`tel:${BUSINESS.phoneClean}`} className="hover:text-cream transition-colors">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-cream transition-colors">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0 text-gold" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>{BUSINESS.hours}<br />Dimanche : fermé</span>
            </li>
          </ul>

          <Link href="/contact" className="mt-6 btn-gold w-full justify-center text-sm">
            Demander un devis
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} RNV Parquet — Tous droits réservés</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-cream/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-cream/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
