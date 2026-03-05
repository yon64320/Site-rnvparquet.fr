import Link from 'next/link'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'

const AVIS = [
  {
    id: 1,
    name: 'Marie L.',
    ville: 'Strasbourg',
    note: 5,
    texte:
      'RNV Parquet a été formidable du début à la fin. Remise de devis très rapide. À l\'écoute et de bon conseil. Le chantier s\'est parfaitement bien déroulé, dans les temps et avec un résultat meilleur qu\'escompté.',
    date: 'Mars 2024',
    service: 'Pose de parquet',
  },
  {
    id: 2,
    name: 'Thomas R.',
    ville: 'Obernai',
    note: 5,
    texte:
      'Disponible, rapide, efficace. RNV Parquet a redonné une 2ème jeunesse à nos parquets. Le résultat est bluffant, on ne reconnaît plus notre ancien parquet !',
    date: 'Janvier 2024',
    service: 'Rénovation parquet',
  },
  {
    id: 3,
    name: 'Sophie M.',
    ville: 'Molsheim',
    note: 5,
    texte:
      'Un artisan passionné et professionnel. Mathieu a su nous conseiller sur les meilleures finitions. Chantier propre, délais respectés. Je recommande vivement !',
    date: 'Novembre 2023',
    service: 'Vitrification',
  },
]

function Stars({ count, light = false }: { count: number; light?: boolean }) {
  return (
    <div className="flex gap-1" aria-label={`Note : ${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16" height="16" viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          className="text-gold"
          style={{ opacity: i < count ? 1 : (light ? 0.2 : 0.15) }}
          aria-hidden="true"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  )
}

export function AvisPreview() {
  return (
    <section className="section-padding bg-linen relative overflow-hidden" aria-labelledby="avis-title">
      <div className="container-site relative">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase text-forest-light mb-4">
            Avis clients
          </span>
          <h2
            id="avis-title"
            className="font-serif font-bold text-forest text-balance leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Ce que disent nos clients
          </h2>
          {/* Note globale */}
          <div className="inline-flex items-center gap-4 bg-forest rounded-2xl px-6 py-3.5">
            <span className="font-serif font-bold text-cream text-3xl">5.0</span>
            <div className="flex flex-col items-start gap-1.5">
              <Stars count={5} light />
              <span className="text-cream/50 font-sans text-xs">Basé sur Google Reviews</span>
            </div>
          </div>
        </AnimatedSection>

        <StaggeredChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          staggerMs={100}
          baseDelay={100}
        >
          {AVIS.map((avis, i) => {
            const isCenter = i === 1
            return (
              <article
                key={avis.id}
                className="relative flex flex-col gap-5 rounded-3xl p-7 overflow-hidden"
                style={{
                  background: isCenter
                    ? 'linear-gradient(145deg, #0F2A1D 0%, #1F4D35 100%)'
                    : '#FFFFFF',
                  boxShadow: isCenter
                    ? '0 24px 64px rgba(15,42,29,0.30), 0 4px 16px rgba(15,42,29,0.12)'
                    : '0 4px 24px rgba(15,42,29,0.10), 0 1px 4px rgba(15,42,29,0.05)',
                  border: isCenter ? 'none' : '1px solid rgba(15,42,29,0.10)',
                  marginTop: isCenter ? '-12px' : '0',
                  marginBottom: isCenter ? '-12px' : '0',
                }}
              >
                {/* Guillemet décoratif */}
                <div
                  className="absolute top-4 right-5 font-serif text-8xl leading-none select-none pointer-events-none"
                  style={{ color: isCenter ? 'rgba(200,169,106,0.18)' : 'rgba(15,42,29,0.05)' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <Stars count={avis.note} light={isCenter} />

                <blockquote
                  className="font-sans text-sm leading-relaxed flex-1 relative z-10"
                  style={{ color: isCenter ? 'rgba(251,250,248,0.88)' : 'rgba(15,42,29,0.78)' }}
                >
                  {avis.texte}
                </blockquote>

                <span
                  className="text-xs font-sans font-semibold tracking-wide rounded-full px-3 py-1.5 self-start"
                  style={{
                    background: isCenter ? 'rgba(200,169,106,0.18)' : 'rgba(15,42,29,0.07)',
                    color: isCenter ? '#C8A96A' : 'rgba(15,42,29,0.60)',
                  }}
                >
                  {avis.service}
                </span>

                <footer
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: `1px solid ${isCenter ? 'rgba(255,255,255,0.1)' : 'rgba(15,42,29,0.08)'}` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: isCenter ? 'rgba(200,169,106,0.22)' : '#0F2A1D' }}
                    aria-hidden="true"
                  >
                    <span className="font-serif font-bold text-sm text-gold">
                      {avis.name[0]}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-sans font-semibold text-sm"
                      style={{ color: isCenter ? '#FBFAF8' : '#0F2A1D' }}
                    >
                      {avis.name}
                    </p>
                    <p
                      className="font-sans text-xs"
                      style={{ color: isCenter ? 'rgba(251,250,248,0.45)' : 'rgba(15,42,29,0.45)' }}
                    >
                      {avis.ville} · {avis.date}
                    </p>
                  </div>
                </footer>
              </article>
            )
          })}
        </StaggeredChildren>

        <AnimatedSection className="text-center mt-16" delay={200}>
          <Link href="/avis" className="btn-primary">
            Lire tous les avis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
