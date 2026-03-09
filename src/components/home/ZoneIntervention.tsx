import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'

const VILLES = [
  'Strasbourg', 'Schiltigheim', 'Illkirch-Graffenstaden', 'Obernai',
  'Molsheim', 'Sélestat', 'Haguenau', 'Saverne', 'Benfeld',
  'Erstein', 'Barr', 'Brumath', 'Lingolsheim', 'Ostwald',
]

export function ZoneIntervention() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="zone-title">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-forest-light mb-4">
              Zone d&apos;intervention
            </span>
            <h2
              id="zone-title"
              className="font-serif font-bold text-forest text-balance leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Strasbourg & Bas-Rhin,<br />
              <span className="text-walnut italic">partout chez vous</span>
            </h2>
            <p className="text-forest/60 font-sans leading-relaxed mb-8">
              Basé à Hangenbieten (67980), nous intervenons dans un rayon de 50 km autour de Strasbourg pour tous vos travaux de parqueterie. Contactez-nous pour vérifier votre commune.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {VILLES.map((ville) => (
                <span
                  key={ville}
                  className="inline-flex items-center gap-1 text-sm font-sans bg-linen text-forest rounded-xl px-3.5 py-1.5 border border-forest/8"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-forest-light" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="12" cy="10" r="3" fill="currentColor"/>
                  </svg>
                  {ville}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-forest/50 font-sans text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Lundi – Samedi : 08h00 – 19h30
            </div>
          </AnimatedSection>

          {/* Map placeholder */}
          <AnimatedSection direction="right" delay={150}>
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/3] bg-gradient-to-br from-forest via-forest-light to-walnut/40 flex items-center justify-center">
              {/* Decorative map-like pattern */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(200,169,106,0.3) 0%, transparent 60%),
                    repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(200,169,106,0.1) 20px, rgba(200,169,106,0.1) 21px),
                    repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(200,169,106,0.1) 20px, rgba(200,169,106,0.1) 21px)
                  `,
                }}
              />
              <div className="relative text-center text-cream">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="font-serif font-semibold text-xl mb-1">Hangenbieten</p>
                <p className="text-cream/60 font-sans text-sm">4 Rue des Jardins, 67980</p>
                <div className="mt-6 inline-flex items-center gap-2 bg-forest/50 backdrop-blur-sm text-cream/80 rounded-full px-5 py-2.5 font-sans text-sm border border-cream/10">
                  <span className="text-gold">●</span> Rayon 50 km autour de Strasbourg
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
