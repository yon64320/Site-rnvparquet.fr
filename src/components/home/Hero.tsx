'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Présentation RNV Parquet"
    >
      {/* Background photo — terrasse bois */}
      <img
        src="/images/hero-terrace.png"
        alt="Terrasse bois et parquet chêne — RNV Parquet Strasbourg"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />

      {/* Overlay léger — gradient asymétrique */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(8,24,14,0.88) 0%, rgba(8,24,14,0.70) 35%, rgba(8,24,14,0.35) 70%, rgba(8,24,14,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Vignette douce */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, transparent 30%, rgba(8,24,14,0.40) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Ligne dorée top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(184,148,78,0.55) 20%, rgba(184,148,78,0.55) 80%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* ═══ Contenu principal — deux colonnes ═══ */}
      <div className="relative z-10 flex-1 container-site flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center py-20 lg:py-0">

          {/* ════ GAUCHE : Tous les textes ════ */}
          <div className="max-w-2xl">

            {/* Sur-titre */}
            <div
              style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
            >
              <span
                className="inline-flex items-center gap-2 font-sans font-bold tracking-[0.18em] uppercase text-xs"
                style={{ color: 'rgba(184,148,78,0.95)' }}
              >
                <span
                  className="inline-block w-8 h-px"
                  style={{ background: 'rgba(184,148,78,0.7)' }}
                  aria-hidden="true"
                />
                Artisan parqueteur · Bas-Rhin
              </span>
            </div>

            {/* H1 — élégant, serif */}
            <h1
              className="font-serif font-bold leading-[1.05] mt-4 mb-5"
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                color: '#FBFAF8',
                textShadow: '0 2px 32px rgba(0,0,0,0.55), 0 1px 8px rgba(0,0,0,0.35)',
                animation: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both',
                letterSpacing: '-0.01em',
                marginLeft: '-1.5rem',
              }}
            >
              Parqueteur à Strasbourg —<br />
              <em
                className="not-italic"
                style={{ color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 400 }}
              >
                Pose &amp; rénovation
              </em>
            </h1>

            {/* Sous-titre */}
            <p
              className="font-sans leading-relaxed mb-8 max-w-lg"
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: 'rgba(251,250,248,0.75)',
                textShadow: '0 1px 12px rgba(0,0,0,0.5)',
                animation: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both',
              }}
            >
              Mathieu Garcia, 30 ans de savoir-faire. Finitions haut de gamme, devis gratuit sous 24h. Particuliers &amp; professionnels dans tout le Bas-Rhin.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              style={{ animation: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both' }}
            >
              <Link
                href="/contact"
                className="btn-gold px-7 py-3.5 text-sm w-full sm:w-auto"
                style={{ boxShadow: '0 6px 28px rgba(184,148,78,0.38)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Devis gratuit sous 24h
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans font-semibold text-sm rounded-2xl border transition-all duration-300 hover:bg-white/12 active:scale-[0.98] w-full sm:w-auto"
                style={{
                  background: 'rgba(251,250,248,0.08)',
                  backdropFilter: 'blur(6px)',
                  color: 'rgba(251,250,248,0.88)',
                  borderColor: 'rgba(251,250,248,0.22)',
                }}
              >
                Voir les réalisations
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Badges confiance */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.52s both' }}
            >
              {[
                { icon: '★', text: '5.0 Google Reviews' },
                { icon: '✦', text: '30 ans d\'expérience' },
                { icon: '🌱', text: '1 chantier = 10 arbres' },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 font-sans text-xs"
                  style={{ color: 'rgba(251,250,248,0.60)' }}
                >
                  <span style={{ color: 'rgba(184,148,78,0.85)', fontSize: '0.65rem' }}>{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>

          </div>

          {/* ════ DROITE : Image showcase (desktop only) ════ */}
          <div
            className="hidden lg:block"
            style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s both' }}
          >
            <div
              className="relative rounded-2xl overflow-hidden h-96"
              style={{
                background: 'rgba(247,245,240,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(247,245,240,0.15)',
                boxShadow: '0 20px 60px rgba(11,31,21,0.5), 0 0 0 1px rgba(184,148,78,0.15)',
              }}
            >
              {/* Image — si elle existe */}
              <img
                src="/images/hero-baignoire.png"
                alt="Création Mathieu Garcia — Pose & rénovation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(8,24,14,0) 0%, rgba(8,24,14,0.60) 100%)' }}
                aria-hidden="true"
              />

              {/* Badge texte overlay bas-droit */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div
                  className="rounded-lg p-4"
                  style={{
                    background: 'rgba(11,31,21,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(184,148,78,0.2)',
                  }}
                >
                  <p className="font-sans text-xs font-bold tracking-[0.14em] uppercase mb-2" style={{ color: 'rgba(184,148,78,0.95)' }}>
                    ✓ Création Mathieu Garcia
                  </p>
                  <p className="font-serif text-sm mb-2 leading-snug" style={{ color: '#FBFAF8' }}>
                    Pose &amp; rénovation<br />de carrelage
                  </p>
                  <p className="font-sans text-xs" style={{ color: 'rgba(251,250,248,0.60)' }}>
                    Un aperçu de notre savoir-faire au service de votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══ Bandeau stats bas ═══ */}
      <div
        className="relative z-10 border-t"
        style={{
          borderColor: 'rgba(251,250,248,0.08)',
          background: 'rgba(8,24,14,0.72)',
          backdropFilter: 'blur(12px)',
          animation: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.62s both',
        }}
      >
        <div className="container-site">
          <div
            className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{ borderColor: 'rgba(251,250,248,0.07)' }}
          >
            {[
              { value: '30+', label: "ans d'expérience" },
              { value: '100%', label: 'devis gratuits' },
              { value: '50 km', label: 'rayon intervention' },
              { value: '5 ★', label: 'avis clients' },
            ].map((stat) => (
              <div key={stat.label} className="py-4 px-4 md:px-6 text-center">
                <p
                  className="font-serif font-bold text-lg md:text-xl mb-0.5"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-sans text-xs tracking-wide"
                  style={{ color: 'rgba(251,250,248,0.48)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
