import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

const SERVICES = [
  {
    id: 'pose-parquet',
    photo: PHOTOS.pose,
    alt: 'Pose de parquet chêne massif',
    title: 'Pose de parquet',
    description:
      'Massif, contrecollé ou stratifié — pose droite, diagonale ou en point de Hongrie. Nous sélectionnons les meilleures essences et maîtrisons chaque technique de pose pour un résultat impeccable et durable.',
    href: '/services#pose-parquet',
    tag: 'Neuf',
  },
  {
    id: 'renovation',
    photo: PHOTOS.renovation,
    alt: 'Rénovation de parquet ancien',
    title: 'Rénovation parquet',
    description:
      'Redonnez vie à votre parquet ancien : réparation des lames abîmées, ponçage professionnel et finition complète. Un résultat comme neuf, sans tout remplacer, pour préserver le caractère de votre intérieur.',
    href: '/services#renovation',
    tag: 'Populaire',
  },
  {
    id: 'poncage',
    photo: PHOTOS.poncage,
    alt: 'Ponçage professionnel de parquet',
    title: 'Ponçage',
    description:
      'Résultat lisse et homogène garanti. Nos machines professionnelles à aspiration intégrée limitent la poussière et préservent votre intérieur pendant toute la durée du chantier.',
    href: '/services#poncage',
    tag: null,
  },
  {
    id: 'vitrification',
    photo: PHOTOS.vitrification,
    alt: 'Vitrification et finition de parquet',
    title: 'Vitrification',
    description:
      'Vernis, huile ou cire selon vos goûts et l\'usage de la pièce. Finition brillante, satinée ou mate pour sublimer et protéger durablement votre parquet. Rendu haut de gamme, longue durée de vie.',
    href: '/services#vitrification',
    tag: null,
  },
  {
    id: 'escaliers',
    photo: PHOTOS.escalier,
    alt: 'Escalier en bois sur mesure',
    title: 'Escaliers bois',
    description:
      'Création et rénovation d\'escaliers sur mesure. Qualité ébénisterie, chaque détail soigné pour un escalier qui allie beauté, solidité et durabilité — signé par 30 ans de savoir-faire.',
    href: '/services#escaliers',
    tag: 'Sur mesure',
  },
  {
    id: 'terrasses',
    photo: PHOTOS.terrasse,
    alt: 'Terrasse en bois naturel',
    title: 'Terrasses bois',
    description:
      'Ipé, pin traité, douglas ou composite. Des terrasses pensées pour résister aux intempéries alsaciennes, esthétiques et durables, qui embellissent votre extérieur été comme hiver.',
    href: '/services#terrasses',
    tag: null,
  },
]

export function ServicesPreview() {
  return (
    <section className="section-padding bg-forest" aria-labelledby="services-title">
      <div className="container-site">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
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

        {/* Alternating rows */}
        <div className="flex flex-col">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1
            return (
              <AnimatedSection key={service.id} delay={80}>
                <div
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center py-16 lg:py-20`}
                >
                  {/* Image */}
                  <div
                    className="w-full lg:w-[55%] relative rounded-3xl overflow-hidden group flex-shrink-0"
                    style={{ height: 'clamp(260px, 38vw, 440px)' }}
                  >
                    <Image
                      src={service.photo}
                      alt={service.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                    {service.tag && (
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-sans font-bold tracking-widest uppercase bg-gold text-forest rounded-full px-3 py-1.5">
                          {service.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div
                    className={`w-full lg:w-[45%] flex flex-col ${isReversed ? 'lg:items-end lg:text-right' : 'lg:items-start'}`}
                  >
                    <span className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-gold/70 mb-3">
                      0{index + 1}
                    </span>
                    <h3
                      className="font-serif font-bold text-cream leading-tight mb-4"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-cream/65 font-sans text-base lg:text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-gold font-sans font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all duration-300"
                    >
                      En savoir plus
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Divider (not after last) */}
                {index < SERVICES.length - 1 && (
                  <div className="border-t border-cream/8" />
                )}
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="text-center mt-10" delay={200}>
          <Link href="/services" className="btn-gold">
            Voir tous nos services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
