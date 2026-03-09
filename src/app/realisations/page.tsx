'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

type Tag = 'Tous' | 'Pose' | 'Rénovation' | 'Escalier' | 'Terrasse'
const TAGS: Tag[] = ['Tous', 'Pose', 'Rénovation', 'Escalier', 'Terrasse']

const REALISATIONS = [
  { id: 1, title: 'Parquet chêne massif en point de Hongrie', tag: 'Pose' as Tag, ville: 'Strasbourg', finition: 'Huilé naturel', surface: '45 m²', photo: PHOTOS.realisation1, alt: 'Parquet chêne massif en point de Hongrie' },
  { id: 2, title: 'Rénovation complète parquet ancien', tag: 'Rénovation' as Tag, ville: 'Obernai', finition: 'Vitrifié satiné', surface: '60 m²', photo: PHOTOS.realisation2, alt: 'Rénovation de parquet ancien' },
  { id: 3, title: 'Escalier en chêne sur mesure', tag: 'Escalier' as Tag, ville: 'Molsheim', finition: 'Bois naturel ciré', surface: '—', photo: PHOTOS.realisation3, alt: 'Escalier en chêne sur mesure' },
  { id: 4, title: 'Terrasse en ipé — villa avec piscine', tag: 'Terrasse' as Tag, ville: 'Schiltigheim', finition: 'Ipé naturel', surface: '30 m²', photo: PHOTOS.realisation4, alt: 'Terrasse en bois ipé' },
  { id: 5, title: 'Parquet bâtons rompus — appartement neuf', tag: 'Pose' as Tag, ville: 'Strasbourg', finition: 'Vitrifié brillant', surface: '35 m²', photo: PHOTOS.realisation5, alt: 'Parquet en bâtons rompus' },
  { id: 6, title: 'Ponçage & vitrification — parquet chêne', tag: 'Rénovation' as Tag, ville: 'Illkirch', finition: 'Mat naturel', surface: '55 m²', photo: PHOTOS.realisation6, alt: 'Parquet chêne après ponçage et vitrification' },
  { id: 7, title: 'Terrasse bois composite', tag: 'Terrasse' as Tag, ville: 'Haguenau', finition: 'Composite gris', surface: '22 m²', photo: PHOTOS.terrasse, alt: 'Terrasse bois composite' },
  { id: 8, title: 'Parquet massif pose droite — maison', tag: 'Pose' as Tag, ville: 'Sélestat', finition: 'Huilé blanc', surface: '80 m²', photo: PHOTOS.pose, alt: 'Parquet massif pose droite' },
  { id: 9, title: 'Rénovation escalier — remplacement marches', tag: 'Escalier' as Tag, ville: 'Saverne', finition: 'Vitrifié satiné', surface: '—', photo: PHOTOS.escalier, alt: 'Rénovation escalier bois' },
]

export default function RealisationsPage() {
  const [activeTag, setActiveTag] = useState<Tag>('Tous')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeTag === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.tag === activeTag)
  const lightboxItem = lightbox !== null ? REALISATIONS.find(r => r.id === lightbox) : null

  return (
    <>
      {/* Hero */}
      <div className="bg-forest pt-32 pb-20">
        <div className="container-site text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">Portfolio</span>
            <h1
              className="font-serif font-bold text-cream text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Nos réalisations
            </h1>
            <p className="text-cream/65 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez nos chantiers en photos. Chaque projet est unique, chaque finition est soignée.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Gallery */}
      <section className="section-padding bg-cream" aria-label="Galerie de réalisations">
        <div className="container-site">
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-forest text-cream shadow-soft'
                    : 'bg-linen text-forest hover:bg-forest/10'
                }`}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                className="group text-left rounded-3xl overflow-hidden shadow-card hover:shadow-soft-lg transition-all duration-350 ease-premium hover:-translate-y-1"
                onClick={() => setLightbox(item.id)}
                aria-label={`Voir le projet : ${item.title}`}
                style={{
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: `opacity 0.4s ease ${i * 50}ms, transform 0.4s ease ${i * 50}ms, box-shadow 0.35s ease, translate 0.35s ease`,
                }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.photo}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="text-xs font-sans font-semibold bg-forest/80 text-cream rounded-full px-3 py-1 backdrop-blur-sm">
                      {item.tag}
                    </span>
                    {item.surface !== '—' && (
                      <span className="text-xs font-sans bg-cream/80 text-forest rounded-full px-3 py-1 backdrop-blur-sm">
                        {item.surface}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-forest/80 backdrop-blur-sm flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cream" aria-hidden="true">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-cream p-5">
                  <h2 className="font-serif font-semibold text-forest text-base mb-1 group-hover:text-forest-light transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-forest/50 font-sans text-xs">
                    {item.finition} · {item.ville}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-cream rounded-3xl overflow-hidden max-w-2xl w-full shadow-soft-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={lightboxItem.photo}
                alt={lightboxItem.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" aria-hidden="true" />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest/80 text-cream flex items-center justify-center hover:bg-forest transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Fermer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="p-7">
              <span className="text-xs font-sans font-semibold bg-forest/8 text-forest rounded-full px-3 py-1 mb-3 inline-block">
                {lightboxItem.tag}
              </span>
              <h2 className="font-serif font-bold text-forest text-xl mb-2">{lightboxItem.title}</h2>
              <p className="text-forest/60 font-sans text-sm mb-1">{lightboxItem.finition} · {lightboxItem.ville}</p>
              {lightboxItem.surface !== '—' && (
                <p className="text-forest/50 font-sans text-sm">Surface : {lightboxItem.surface}</p>
              )}
              <Link href="/contact" className="btn-primary mt-6 w-full justify-center" onClick={() => setLightbox(null)}>
                Demander un devis similaire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-forest text-center">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="font-serif font-bold text-cream text-balance leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Votre projet, notre prochain chef-d&apos;œuvre
            </h2>
            <p className="text-cream/65 font-sans text-lg leading-relaxed mb-8">
              Contactez-nous pour un devis gratuit et des conseils personnalisés.
            </p>
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Demander un devis
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
