import type { Metadata } from 'next'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Avis clients — Parqueteur Strasbourg',
  description:
    'Découvrez les avis de nos clients sur nos travaux de parqueterie. RNV Parquet, artisan parqueteur noté 5★ dans le Bas-Rhin.',
  alternates: { canonical: '/avis' },
}

const AVIS = [
  {
    id: 1,
    name: 'Marie L.',
    ville: 'Strasbourg',
    note: 5,
    texte:
      "RNV Parquet a été formidable du début à la fin. Remise de devis très rapide. À l'écoute et de bon conseil. Le chantier s'est parfaitement bien déroulé, dans les temps et avec un résultat meilleur qu'escompté.",
    service: 'Pose de parquet',
    date: 'Mars 2024',
  },
  {
    id: 2,
    name: 'Thomas R.',
    ville: 'Obernai',
    note: 5,
    texte:
      "Disponible, rapide, efficace. RNV Parquet a redonné une 2ème jeunesse à nos parquets. Le résultat est bluffant, on ne reconnaît plus notre ancien parquet !",
    service: 'Rénovation parquet',
    date: 'Janvier 2024',
  },
  {
    id: 3,
    name: 'Sophie M.',
    ville: 'Molsheim',
    note: 5,
    texte:
      "Un artisan passionné et professionnel. Mathieu a su nous conseiller sur les meilleures finitions pour notre intérieur. Chantier propre, délais respectés. Je recommande vivement !",
    service: 'Vitrification',
    date: 'Novembre 2023',
  },
  {
    id: 4,
    name: 'Pierre B.',
    ville: 'Schiltigheim',
    note: 5,
    texte:
      "Très satisfait de la pose de notre terrasse en ipé. Travail soigné, finitions impeccables. Mathieu est ponctuel, sérieux et de très bon conseil. Nous n'hésiterons pas à faire appel à lui pour nos futurs projets.",
    service: 'Terrasse bois',
    date: 'Octobre 2023',
  },
  {
    id: 5,
    name: 'Isabelle K.',
    ville: 'Illkirch',
    note: 5,
    texte:
      "Excellent travail de ponçage et vitrification. Notre parquet de 40 ans a retrouvé une seconde vie. Propre, rapide et professionnel. Le prix était très correct pour la qualité rendue.",
    service: 'Ponçage & vitrification',
    date: 'Septembre 2023',
  },
  {
    id: 6,
    name: 'Marc D.',
    ville: 'Haguenau',
    note: 5,
    texte:
      "Mathieu a rénové notre escalier en bois qui était très abîmé. Le résultat est magnifique, on dirait qu'il est neuf ! Très professionnel, travail de qualité. Merci !",
    service: 'Escalier bois',
    date: 'Juillet 2023',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          className={i < count ? 'text-gold' : 'text-forest/20'}
          aria-hidden="true"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  )
}

export default function AvisPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest pt-32 pb-20">
        <div className="container-site text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              Témoignages
            </span>
            <h1
              className="font-serif font-bold text-cream text-balance leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Avis de nos clients
            </h1>
            {/* Note globale */}
            <div className="flex items-center justify-center gap-4">
              <span className="font-serif font-bold text-cream text-5xl">5.0</span>
              <div className="flex flex-col items-start gap-2">
                <Stars count={5} />
                <span className="text-cream/50 font-sans text-sm">
                  Note moyenne · Google Reviews
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Avis grid */}
      <section className="section-padding bg-linen" aria-label="Témoignages clients">
        <div className="container-site">
          <StaggeredChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerMs={80}
            baseDelay={100}
          >
            {AVIS.map((avis) => (
              <article
                key={avis.id}
                className="bg-cream rounded-3xl p-7 shadow-card flex flex-col gap-4 hover:shadow-soft transition-shadow duration-300"
              >
                <Stars count={avis.note} />
                <blockquote className="text-forest/70 font-sans text-sm leading-relaxed flex-1">
                  &ldquo;{avis.texte}&rdquo;
                </blockquote>
                <footer className="border-t border-forest/8 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="font-serif font-bold text-gold text-sm">{avis.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-forest text-sm">{avis.name}</p>
                      <p className="font-sans text-forest/40 text-xs">{avis.ville} · {avis.date}</p>
                    </div>
                  </div>
                  <span className="inline-block text-xs bg-forest/8 text-forest/60 rounded-full px-3 py-1 font-sans">
                    {avis.service}
                  </span>
                </footer>
              </article>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Laisser un avis */}
      <section className="section-padding bg-forest text-center">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl mx-auto">
            <span className="text-4xl mb-4 block" aria-hidden="true">⭐</span>
            <h2 className="font-serif font-bold text-cream text-balance leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Vous avez fait appel à nous ?
            </h2>
            <p className="text-cream/65 font-sans text-lg leading-relaxed mb-8">
              Votre avis nous aide à progresser et aide d&apos;autres clients à nous faire confiance.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4"
            >
              Laisser un avis sur Google
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
