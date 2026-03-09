'use client'

import Link from 'next/link'
import { BUSINESS } from '@/lib/metadata'

export function MobileSticky() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-inset-bottom">
      <div className="flex border-t border-cream/10 bg-forest/98 backdrop-blur-md">
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-cream font-sans font-semibold text-sm active:bg-forest-light transition-colors"
          aria-label={`Appeler RNV Parquet au ${BUSINESS.phone}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Appeler
        </a>
        <div className="w-px bg-cream/10" />
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-forest font-sans font-bold text-sm active:brightness-90 transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Devis gratuit
        </Link>
      </div>
    </div>
  )
}
