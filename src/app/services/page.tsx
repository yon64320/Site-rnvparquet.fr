import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Services parqueteur — Pose, rénovation, ponçage, vitrification',
  description:
    'Tous nos services de parqueterie : pose neuve, rénovation, ponçage, vitrification, escaliers bois et terrasses. Artisan parqueteur Strasbourg / Bas-Rhin.',
  alternates: { canonical: '/services' },
}

const SERVICES_DETAIL = [
  {
    id: 'pose-parquet',
    title: 'Pose de parquet',
    subtitle: 'Neuf, massif, contrecollé ou stratifié',
    description:
      'Que vous optiez pour un parquet massif en chêne, un contrecollé ou un stratifié, notre artisan vous accompagne dans le choix de l\'essence, de la couleur et du mode de pose. Nous réalisons des poses droites, diagonales, en bâtons rompus ou en point de Hongrie.',
    steps: [
      'Visite technique et prise de mesures',
      'Préparation du support (ragréage, pose sous-couche)',
      'Pose et fixation des lames',
      'Découpes et finitions (plinthes, barres de seuil)',
      'Nettoyage et livraison',
    ],
    idealFor: ['Appartements neufs', 'Rénovation de pièces', 'Bureaux et commerces'],
    photo: PHOTOS.pose,
    alt: 'Pose de parquet chêne massif dans un salon',
  },
  {
    id: 'renovation',
    title: 'Rénovation parquet',
    subtitle: 'Redonnez vie à votre parquet ancien',
    description:
      'Un parquet abîmé, rayé ou vieilli peut retrouver son éclat d\'origine grâce à une rénovation complète. Nous remplaçons les lames endommagées, rebouchons les interstices et procédons à un ponçage suivi d\'une finition soignée.',
    steps: [
      'Diagnostic complet de l\'état du parquet',
      'Remplacement des lames défectueuses',
      'Rebouchage des fissures et interstices',
      'Ponçage et uniformisation',
      'Application de la finition choisie',
    ],
    idealFor: ['Parquets anciens abîmés', 'Logements à rénover', 'Biens immobiliers en vente'],
    photo: PHOTOS.renovation,
    alt: 'Rénovation de parquet ancien abîmé',
  },
  {
    id: 'poncage',
    title: 'Ponçage',
    subtitle: 'Résultat lisse et homogène, sans poussière',
    description:
      'Le ponçage professionnel permet d\'éliminer rayures, taches et usures pour retrouver un parquet propre et uniforme. Nous utilisons des machines professionnelles à aspiration intégrée pour limiter la poussière au maximum.',
    steps: [
      'Protection du mobilier et préparation de la pièce',
      'Ponçage général avec machine professionnelle',
      'Ponçage de finition (bords et coins)',
      'Aspiration complète de la poussière',
      'Préparation pour la finition',
    ],
    idealFor: ['Parquets ternes ou rayés', 'Avant une vitrification', 'Changement de couleur de parquet'],
    photo: PHOTOS.poncage,
    alt: 'Ponçage professionnel de parquet',
  },
  {
    id: 'vitrification',
    title: 'Vitrification & finitions',
    subtitle: 'Vernis, huile ou cire — protection durable',
    description:
      'Après ponçage ou sur parquet neuf, la finition détermine l\'aspect final et la durabilité de votre parquet. Nous proposons vernis (brillant, satiné, mat), huile (naturelle ou pigmentée) et cire pour un rendu chaleureux.',
    steps: [
      'Conseil sur les finitions adaptées à votre usage',
      'Préparation et nettoyage du support',
      'Application de la 1ère couche',
      'Léger ponçage intermédiaire',
      'Application de la couche finale',
    ],
    idealFor: ['Après ponçage', 'Parquet neuf à protéger', 'Changement de rendu esthétique'],
    photo: PHOTOS.vitrification,
    alt: 'Vitrification et finition brillante de parquet',
  },
  {
    id: 'escaliers',
    title: 'Escaliers bois',
    subtitle: 'Création et rénovation sur mesure',
    description:
      'Fort de son expérience en ébénisterie, Mathieu Garcia réalise ou rénove vos escaliers en bois avec une précision d\'artisan. Marches massives, contremarches, rampes et balustres — chaque détail est soigné.',
    steps: [
      'Prise de mesures et conception sur mesure',
      'Choix des essences et finitions',
      'Fabrication en atelier ou sur site',
      'Pose et fixation des éléments',
      'Finition et protection du bois',
    ],
    idealFor: ['Escaliers abîmés ou bruyants', 'Construction neuve', 'Rénovation d\'escaliers peints'],
    photo: PHOTOS.escalier,
    alt: 'Escalier en bois sur mesure',
  },
  {
    id: 'terrasses',
    title: 'Terrasses bois',
    subtitle: 'Créez votre espace extérieur idéal',
    description:
      'Nous concevons et installons des terrasses en bois naturel (ipé, pin traité, douglas) ou composite, adaptées à votre extérieur. Résistantes aux intempéries et esthétiques, elles prolongent votre espace de vie.',
    steps: [
      'Visite et évaluation du terrain',
      'Conception et devis détaillé',
      'Préparation de la structure porteuse',
      'Pose des lames de terrasse',
      'Finitions et traitement du bois',
    ],
    idealFor: ['Jardins et terrasses', 'Espaces commerciaux extérieurs', 'Tour de piscine'],
    photo: PHOTOS.terrasse,
    alt: 'Terrasse en bois naturel',
  },
]

const FAQ = [
  {
    q: 'Combien de temps dure la pose d\'un parquet ?',
    a: 'La durée dépend de la surface et du type de pose. Pour une pièce standard (20–25 m²), comptez en général 1 à 2 jours. Un appartement entier peut prendre 3 à 5 jours.',
  },
  {
    q: 'Quel type de parquet choisir ?',
    a: 'Cela dépend de votre budget, de votre usage et de vos goûts. Le parquet massif est le plus durable mais aussi le plus cher. Le contrecollé est un excellent compromis qualité/prix. Le stratifié est plus accessible mais moins noble.',
  },
  {
    q: 'Le ponçage génère-t-il beaucoup de poussière ?',
    a: 'Avec nos machines professionnelles à aspiration intégrée, la poussière est réduite au minimum. Nous protégeons vos meubles et nettoyons après intervention.',
  },
  {
    q: 'Quelle est la différence entre vernis, huile et cire ?',
    a: 'Le vernis forme un film protecteur en surface (très résistant, facile d\'entretien). L\'huile pénètre dans le bois pour le nourrir (aspect naturel, réparation facile). La cire offre un rendu chaleureux mais demande plus d\'entretien.',
  },
  {
    q: 'Peut-on vivre dans la maison pendant les travaux ?',
    a: 'Pour les vernis, il faut généralement quitter la pièce 24–48h après application. Pour la pose, on peut intervenir pièce par pièce pour limiter les désagréments.',
  },
  {
    q: 'Intervenez-vous sur des chantiers professionnels ?',
    a: 'Oui, nous intervenons chez les particuliers, les entreprises (bureaux, commerces, hôtels) et les collectivités (écoles, bâtiments publics). Contactez-nous pour un devis adapté.',
  },
  {
    q: 'Dans quelles villes intervenez-vous ?',
    a: 'Nous intervenons dans tout le Bas-Rhin dans un rayon de 50 km autour de Hangenbieten : Strasbourg, Obernai, Molsheim, Haguenau, Sélestat, Saverne et toutes les communes alentour.',
  },
  {
    q: 'Quel délai pour obtenir un devis ?',
    a: 'Nous répondons généralement sous 24h. Le devis est gratuit et sans engagement, après visite sur site pour évaluer précisément votre projet.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest pt-32 pb-20">
        <div className="container-site text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              Nos prestations
            </span>
            <h1
              className="font-serif font-bold text-cream text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Services parqueterie
            </h1>
            <p className="text-cream/65 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              Artisan parqueteur dans le Bas-Rhin, nous réalisons tous vos travaux de pose, rénovation, ponçage, vitrification, escaliers et terrasses bois.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Services — layout alternant image / texte */}
      <div className="bg-cream">
        {SERVICES_DETAIL.map((service, index) => {
          const isReversed = index % 2 === 1
          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-padding ${isReversed ? 'bg-linen' : 'bg-cream'}`}
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="container-site">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>

                  {/* Photo */}
                  <AnimatedSection
                    className="w-full lg:w-[50%] flex-shrink-0"
                    direction={isReversed ? 'right' : 'left'}
                    delay={100}
                  >
                    <div className="rounded-3xl aspect-[4/3] overflow-hidden shadow-soft relative">
                      <Image
                        src={service.photo}
                        alt={service.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 560px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" aria-hidden="true" />
                    </div>
                  </AnimatedSection>

                  {/* Contenu */}
                  <AnimatedSection
                    className="w-full lg:w-[50%]"
                    direction={isReversed ? 'left' : 'right'}
                  >
                    <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-forest-light mb-3">
                      {service.subtitle}
                    </span>
                    <h2
                      id={`service-title-${service.id}`}
                      className="font-serif font-bold text-forest text-balance leading-tight mb-5"
                      style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-forest/65 font-sans leading-relaxed mb-7">
                      {service.description}
                    </p>

                    <div className="mb-7">
                      <h3 className="font-sans font-semibold text-forest text-sm uppercase tracking-wide mb-3">
                        Ce que ça inclut
                      </h3>
                      <ol className="space-y-2.5">
                        {service.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-forest text-gold font-sans font-bold text-xs flex items-center justify-center">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-forest/70 font-sans text-sm leading-relaxed pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-sans font-semibold text-forest text-sm uppercase tracking-wide mb-3">
                        Idéal pour
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((use) => (
                          <span key={use} className="text-xs font-sans bg-forest/8 text-forest rounded-xl px-3 py-1.5">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary mt-8 inline-flex">
                      Demander un devis pour ce service
                    </Link>
                  </AnimatedSection>

                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* FAQ */}
      <section className="section-padding bg-forest" aria-labelledby="faq-title">
        <div className="container-site max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              Questions fréquentes
            </span>
            <h2
              id="faq-title"
              className="font-serif font-bold text-cream text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              FAQ — Parqueterie
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="space-y-4"
            staggerMs={60}
            baseDelay={100}
          >
            {FAQ.map((item, i) => (
              <details
                key={i}
                className="group bg-forest-light/30 border border-cream/10 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-sans font-semibold text-cream text-sm select-none hover:bg-cream/5 transition-colors">
                  {item.q}
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    className="flex-shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-cream/65 font-sans text-sm leading-relaxed border-t border-cream/10 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-linen text-center">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="font-serif font-bold text-forest text-balance leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-forest/60 font-sans text-lg leading-relaxed mb-8">
              Demandez votre devis gratuit. Réponse sous 24h, sans engagement.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Demander un devis gratuit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
