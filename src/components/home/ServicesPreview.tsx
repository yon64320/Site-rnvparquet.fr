import Link from 'next/link'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'

const SERVICES = [
  {
    id: 'pose-parquet',
    title: 'Pose de parquet',
    description: 'Massif, contrecollé, stratifié ou vinyle. Pose droite, diagonale ou en point de Hongrie.',
    href: '/services#pose-parquet',
    tag: 'Neuf',
  },
  {
    id: 'renovation',
    title: 'Rénovation parquet',
    description: 'Réparation des lames, rebouchage, ponçage et finition complète pour retrouver un parquet comme neuf.',
    href: '/services#renovation',
    tag: 'Populaire',
  },
  {
    id: 'poncage',
    title: 'Ponçage',
    description: 'Machines professionnelles à aspiration intégrée pour un résultat lisse, sans poussière.',
    href: '/services#poncage',
    tag: null,
  },
  {
    id: 'vitrification',
    title: 'Vitrification',
    description: 'Vernis, huile ou cire — brillant, satiné ou mat. Protection et sublimation de votre parquet.',
    href: '/services#vitrification',
    tag: null,
  },
  {
    id: 'escaliers',
    title: 'Escaliers bois',
    description: 'Création et rénovation d\'escaliers sur mesure. Qualité ébénisterie, finitions soignées.',
    href: '/services#escaliers',
    tag: 'Sur mesure',
  },
  {
    id: 'terrasses',
    title: 'Terrasses bois',
    description: 'Ipé, douglas, pin traité ou composite. Résistant aux intempéries, esthétique et durable.',
    href: '/services#terrasses',
    tag: null,
  },
]

export function ServicesPreview() {
  return (
    <section className="section-padding bg-forest" aria-labelledby="services-title">
      <div className="container-site">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase text-gold mb-4">
            Nos prestations
          </span>
          <h2
            id="services-title"
            className="font-serif font-bold text-cream text-balance leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Tous les services parquet
          </h2>
          <p className="text-cream/65 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            De la pose neuve à la rénovation complète, finitions haut de gamme garanties.
          </p>
        </AnimatedSection>

        {/* Grid compacte */}
        <StaggeredChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          staggerMs={80}
          baseDelay={80}
        >
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative rounded-3xl flex flex-col p-7 transition-all duration-300 h-full"
              style={{
                background: 'rgba(31,77,53,0.35)',
                border: '1px solid rgba(200,169,106,0.18)',
              }}
              aria-label={service.title}
            >
              {/* Numéro décoratif */}
              <span className="text-gold/25 font-serif font-bold text-4xl leading-none mb-4 select-none group-hover:text-gold/40 transition-colors duration-300">
                {String(SERVICES.indexOf(service) + 1).padStart(2, '0')}
              </span>

              {/* Tag */}
              {service.tag && (
                <span className="self-start text-xs font-sans font-bold tracking-widest uppercase bg-gold text-forest rounded-full px-3 py-1 mb-3">
                  {service.tag}
                </span>
              )}

              {/* Titre */}
              <h3 className="font-serif font-semibold text-cream text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description courte */}
              <p className="text-cream/60 font-sans text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Lien */}
              <span className="mt-5 inline-flex items-center gap-2 text-gold font-sans font-semibold text-xs tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              {/* Bordure dorée au hover */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.5)' }}
                aria-hidden="true"
              />
            </Link>
          ))}
        </StaggeredChildren>

        <AnimatedSection className="text-center mt-12" delay={200}>
          <Link href="/services" className="btn-gold">
            Voir tous nos services en détail
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
