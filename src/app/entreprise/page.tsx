import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, StaggeredChildren } from '@/components/ui/AnimatedSection'
import { BUSINESS } from '@/lib/metadata'
import { PHOTOS } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Notre entreprise — Artisan parqueteur Mathieu Garcia',
  description:
    'Découvrez RNV Parquet : 30 ans de savoir-faire en ébénisterie et parqueterie. Mathieu Garcia, artisan passionné basé à Hangenbieten, Bas-Rhin.',
  alternates: { canonical: '/entreprise' },
}

const VALEURS = [
  {
    title: 'Qualité',
    description: 'Chaque chantier est réalisé avec les meilleures essences de bois et les finitions les plus soignées.',
    icon: '✦',
  },
  {
    title: 'Précision',
    description: 'L\'ébénisterie exige une précision au millimètre. C\'est cette rigueur qui différencie un travail ordinaire d\'un travail d\'exception.',
    icon: '◈',
  },
  {
    title: 'Respect du bois',
    description: 'Le bois est un matériau vivant. Nous le travaillons avec respect, en choisissant des essences durables et des traitements naturels.',
    icon: '🌿',
  },
  {
    title: 'Engagement',
    description: 'Nous nous engageons sur les délais, la qualité et votre satisfaction. Et sur l\'environnement : 1 chantier = 10 arbres plantés.',
    icon: '●',
  },
]

const COMPETENCES = [
  'Parqueterie (pose & rénovation)',
  'Ébénisterie & sculpture sur bois',
  'Ponçage professionnel',
  'Vitrification & finitions',
  'Menuiserie escaliers',
  'Terrasses bois & composite',
  'Lambris & bardage bois',
  'Conseil en essences de bois',
]

export default function EntreprisePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest pt-32 pb-20">
        <div className="container-site text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              L&apos;entreprise
            </span>
            <h1
              className="font-serif font-bold text-cream text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Mathieu Garcia,<br />
              <span className="text-gold italic">artisan parqueteur</span>
            </h1>
            <p className="text-cream/65 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              Basé à Hangenbieten (67), fort de 30 ans d&apos;expérience en ébénisterie et parqueterie.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-cream" aria-labelledby="story-title">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-forest-light mb-4">
                Notre histoire
              </span>
              <h2
                id="story-title"
                className="font-serif font-bold text-forest text-balance leading-tight mb-6"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.7rem)' }}
              >
                Un artisan passionné<br />par le bois
              </h2>
              <div className="space-y-4 text-forest/65 font-sans leading-relaxed">
                <p>
                  Mathieu Garcia a débuté sa carrière il y a plus de 30 ans dans l&apos;ébénisterie et la sculpture sur bois — un apprentissage minutieux qui lui a transmis un respect profond pour ce matériau vivant.
                </p>
                <p>
                  Fort de cette expérience, il a naturellement évolué vers la parqueterie, un métier qui réunit technique et esthétique. C&apos;est ainsi qu&apos;est née <strong className="text-forest font-semibold">RNV Parquet</strong> — Re.Nous.Vos Parquet — à Hangenbieten, dans le Bas-Rhin.
                </p>
                <p>
                  Aujourd&apos;hui, Mathieu intervient chez les particuliers, les professionnels et les collectivités dans tout le Bas-Rhin. Son crédo : des finitions irréprochables, un travail honnête et une relation de confiance avec chaque client.
                </p>
                <p>
                  Engagé pour l&apos;environnement, RNV Parquet plante <strong className="text-forest font-semibold">10 arbres par chantier réalisé</strong>, via la plateforme Tree-Nation.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-5">
                <div>
                  <p className="font-serif font-bold text-forest text-2xl">30+</p>
                  <p className="text-forest/50 font-sans text-xs">années d&apos;expérience</p>
                </div>
                <div className="w-px h-12 bg-forest/15" />
                <div>
                  <p className="font-serif font-bold text-forest text-2xl">50 km</p>
                  <p className="text-forest/50 font-sans text-xs">de rayon d&apos;intervention</p>
                </div>
                <div className="w-px h-12 bg-forest/15" />
                <div>
                  <p className="font-serif font-bold text-forest text-2xl">5★</p>
                  <p className="text-forest/50 font-sans text-xs">satisfaction client</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Portrait artisan */}
            <AnimatedSection direction="right" delay={100}>
              <div className="rounded-3xl overflow-hidden shadow-soft-lg aspect-[3/4] relative">
                <Image
                  src={PHOTOS.artisan}
                  alt="Mathieu Garcia, artisan parqueteur — RNV Parquet Strasbourg"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif font-semibold text-cream text-xl">Mathieu Garcia</p>
                  <p className="text-cream/70 font-sans text-sm">Artisan parqueteur — 30 ans d&apos;expérience</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="section-padding bg-linen" aria-labelledby="competences-title">
        <div className="container-site">
          <AnimatedSection className="text-center mb-12">
            <h2
              id="competences-title"
              className="font-serif font-bold text-forest text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Compétences & savoir-faire
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            staggerMs={60}
            baseDelay={100}
          >
            {COMPETENCES.map((c) => (
              <div key={c} className="bg-cream rounded-2xl px-5 py-4 shadow-card flex items-center gap-3">
                <span className="text-gold flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 12l2 2 4-4M12 3l.5 1.5L14 5l-1.5.5L12 7l-.5-1.5L10 5l1.5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
                <span className="font-sans text-sm text-forest font-medium">{c}</span>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-forest" aria-labelledby="valeurs-title">
        <div className="container-site">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              Ce qui nous guide
            </span>
            <h2
              id="valeurs-title"
              className="font-serif font-bold text-cream text-balance leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Nos valeurs
            </h2>
          </AnimatedSection>

          <StaggeredChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerMs={80}
            baseDelay={100}
          >
            {VALEURS.map((v) => (
              <div key={v.title} className="bg-forest-light/30 border border-cream/10 rounded-3xl p-7 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{v.icon}</div>
                <h3 className="font-serif font-semibold text-cream text-lg mb-3">{v.title}</h3>
                <p className="text-cream/60 font-sans text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Engagement écologique */}
      <section className="section-padding bg-linen" aria-labelledby="eco-title">
        <div className="container-site">
          <div className="bg-cream rounded-3xl p-10 shadow-soft max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="text-5xl mb-4 block" aria-hidden="true">🌱</span>
              <h2 id="eco-title" className="font-serif font-bold text-forest text-xl mb-4">
                1 chantier commandé = 10 arbres plantés
              </h2>
              <p className="text-forest/65 font-sans leading-relaxed mb-6">
                RNV Parquet s&apos;engage pour l&apos;environnement. À chaque chantier réalisé, nous plantons 10 arbres via <strong className="text-forest">Tree-Nation</strong>, la plateforme mondiale de reforestation. Une façon concrète de compenser notre impact et de préserver les forêts qui nous fournissent ce beau matériau qu&apos;est le bois.
              </p>
              <Link href="/contact" className="btn-primary">
                Démarrer votre projet
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
