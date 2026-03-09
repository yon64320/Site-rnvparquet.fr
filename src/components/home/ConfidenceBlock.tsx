import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

const AVANTAGES = [
  {
    icon: '✦',
    title: 'Travail soigné & garanti',
    desc: 'Finitions haut de gamme à chaque chantier. Nous ne livrons que ce dont nous sommes fiers.',
  },
  {
    icon: '◇',
    title: 'Devis gratuit sous 24h',
    desc: 'Réponse rapide, conseils personnalisés sur les essences, finitions et techniques adaptées.',
  },
  {
    icon: '●',
    title: 'Particuliers & Professionnels',
    desc: 'Particuliers, entreprises et collectivités dans tout le Bas-Rhin.',
  },
]

const ETAPES = [
  { n: '01', label: 'Visite sur site & écoute de vos besoins' },
  { n: '02', label: 'Devis détaillé, gratuit et sans engagement' },
  { n: '03', label: 'Réalisation soignée dans les délais convenus' },
  { n: '04', label: 'Livraison et contrôle qualité final avec vous' },
]

export function ConfidenceBlock() {
  return (
    <section className="overflow-hidden" aria-labelledby="confiance-title">

      {/* === BLOC 1 : Texte gauche / Photo droite === */}
      <div className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texte */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase text-forest-light mb-4">
                Pourquoi nous choisir
              </span>
              <h2
                id="confiance-title"
                className="font-serif font-bold text-forest leading-tight mb-6"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
              >
                Un artisan à votre écoute,<br />
                <em className="text-walnut not-italic">des finitions qui durent</em>
              </h2>
              <p className="text-forest/75 font-sans leading-relaxed mb-8">
                Mathieu Garcia met à votre service 30 ans de savoir-faire en ébénisterie et parqueterie. Chaque chantier est traité avec la même exigence, du premier contact à la livraison.
              </p>

              <div className="space-y-4 mb-10">
                {AVANTAGES.map((a) => (
                  <div key={a.title} className="flex items-start gap-4 group">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center text-base font-serif font-bold"
                      aria-hidden="true"
                    >
                      {a.icon}
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-forest text-sm mb-1">{a.title}</p>
                      <p className="text-forest/65 font-sans text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Obtenir mon devis gratuit
              </Link>
            </AnimatedSection>

            {/* Photo droite */}
            <AnimatedSection direction="right" delay={120}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5]">
                  <Image
                    src={PHOTOS.artisan}
                    alt="Mathieu Garcia, artisan parqueteur à Strasbourg"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" aria-hidden="true" />
                </div>
                {/* Card flottante */}
                <div
                  className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-5 shadow-soft-lg border border-forest/8 flex items-center gap-4"
                  style={{ maxWidth: '240px' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-forest text-xl">30</span>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-forest text-sm">ans d&apos;expérience</p>
                    <p className="text-forest/55 font-sans text-xs mt-0.5">Ébénisterie & parqueterie</p>
                  </div>
                </div>
                {/* Badge dorée */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-forest border-4 border-cream flex flex-col items-center justify-center shadow-soft">
                  <span className="text-gold font-serif font-bold text-lg leading-none">5★</span>
                  <span className="text-cream/60 font-sans text-xs leading-none mt-0.5">avis</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* === BLOC 2 : Photo gauche / Étapes droite — fond sombre === */}
      <div className="section-padding bg-forest">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo gauche */}
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/3]">
                <Image
                  src={PHOTOS.pose}
                  alt="Pose de parquet chêne massif en cours"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 to-transparent" aria-hidden="true" />
                {/* Chip sur la photo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 bg-forest/80 backdrop-blur-sm text-cream rounded-xl px-4 py-2.5 text-sm font-sans">
                    <span className="text-gold">🌱</span>
                    1 chantier = 10 arbres plantés
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Étapes droite */}
            <AnimatedSection direction="right" delay={120}>
              <span className="inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase text-gold mb-4">
                Notre méthode
              </span>
              <h2
                className="font-serif font-bold text-cream leading-tight mb-8"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
              >
                Un process simple,<br />
                <em className="text-gold not-italic">un résultat impeccable</em>
              </h2>

              <div className="space-y-5">
                {ETAPES.map((e, i) => (
                  <div
                    key={e.n}
                    className="flex items-start gap-5 group"
                    style={{
                      opacity: 1,
                      transition: `opacity 0.5s ease ${i * 80}ms`,
                    }}
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-1">
                      <div className="w-11 h-11 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                        <span className="font-sans font-bold text-gold text-xs tracking-wide">{e.n}</span>
                      </div>
                      {i < ETAPES.length - 1 && (
                        <div className="w-px h-6 bg-gradient-to-b from-gold/30 to-transparent" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className="text-cream font-sans text-base leading-relaxed">{e.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { v: '50 km', l: "zone d'action" },
                  { v: '24h', l: 'délai de réponse' },
                  { v: '100%', l: 'devis gratuits' },
                ].map((s) => (
                  <div key={s.l} className="bg-forest-light/30 rounded-2xl p-4 text-center border border-cream/8">
                    <p className="font-serif font-bold text-gold text-xl mb-0.5">{s.v}</p>
                    <p className="text-cream/50 font-sans text-xs">{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

    </section>
  )
}
