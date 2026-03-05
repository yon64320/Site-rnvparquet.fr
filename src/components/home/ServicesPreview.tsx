import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

const SERVICES = [
  {
    id: 'pose-parquet',
    photo: PHOTOS.pose,
    alt: 'Pose de parquet chêne massif',
    title: 'Pose de parquet',
    description: 'Massif, contrecollé ou stratifié. Pose droite, diagonale ou en point de Hongrie.',
    href: '/services#pose-parquet',
    tag: 'Neuf',
  },
  {
    id: 'renovation',
    photo: PHOTOS.renovation,
    alt: 'Rénovation de parquet ancien',
    title: 'Rénovation parquet',
    description: 'Redonnez vie à votre parquet ancien : réparation, ponçage et finition complète.',
    href: '/services#renovation',
    tag: 'Populaire',
  },
  {
    id: 'poncage',
    photo: PHOTOS.poncage,
    alt: 'Ponçage professionnel de parquet',
    title: 'Ponçage',
    description: 'Résultat lisse et homogène. Machines professionnelles à aspiration intégrée.',
    href: '/services#poncage',
    tag: null,
  },
  {
    id: 'vitrification',
    photo: PHOTOS.vitrification,
    alt: 'Vitrification et finition de parquet',
    title: 'Vitrification',
    description: 'Vernis, huile ou cire pour protéger et sublimer. Brillant, satiné ou mat.',
    href: '/services#vitrification',
    tag: null,
  },
  {
    id: 'escaliers',
    photo: PHOTOS.escalier,
    alt: 'Escalier en bois sur mesure',
    title: 'Escaliers bois',
    description: 'Création et rénovation sur mesure. Qualité ébénisterie, chaque détail soigné.',
    href: '/services#escaliers',
    tag: 'Sur mesure',
  },
  {
    id: 'terrasses',
    photo: PHOTOS.terrasse,
    alt: 'Terrasse en bois naturel',
    title: 'Terrasses bois',
    description: 'Ipé, pin traité, douglas ou composite. Résistant aux intempéries, esthétique.',
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

        {/* Grid — cards photo-first sur fond sombre */}
        <StaggeredChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerMs={80}
          baseDelay={80}
        >
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(31,77,53,0.25)',
                border: '1px solid rgba(200,169,106,0.15)',
                backdropFilter: 'blur(2px)',
              }}
              aria-label={service.title}
            >
              {/* Photo en haut — grande */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag optionnel */}
                {service.tag && (
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-sans font-bold tracking-widest uppercase bg-gold text-forest rounded-full px-3 py-1">
                      {service.tag}
                    </span>
                  </div>
                )}
                {/* Icône hover */}
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-forest" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contenu texte */}
              <div className="flex flex-col gap-2 p-6 flex-1">
                <h3 className="font-serif font-semibold text-cream text-lg group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-cream/65 font-sans text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-gold font-sans font-semibold text-xs tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                  Découvrir
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

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
            Voir tous nos services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
