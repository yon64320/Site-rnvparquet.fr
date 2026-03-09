'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PHOTOS } from '@/lib/photos'

type Tag = 'Tous' | 'Pose' | 'Rénovation' | 'Escalier' | 'Terrasse'
const TAGS: Tag[] = ['Tous', 'Pose', 'Rénovation', 'Escalier', 'Terrasse']

const REALISATIONS = [
  { id: 1, title: 'Parquet chêne massif — Appartement Strasbourg', tag: 'Pose' as Tag, ville: 'Strasbourg', finition: 'Huilé naturel', photo: PHOTOS.realisation1, alt: 'Parquet chêne massif posé dans un appartement à Strasbourg' },
  { id: 2, title: 'Rénovation parquet ancien — Maison Obernai', tag: 'Rénovation' as Tag, ville: 'Obernai', finition: 'Vitrifié satiné', photo: PHOTOS.realisation2, alt: 'Rénovation complète de parquet ancien à Obernai' },
  { id: 3, title: 'Escalier bois sur mesure — Villa Molsheim', tag: 'Escalier' as Tag, ville: 'Molsheim', finition: 'Bois naturel ciré', photo: PHOTOS.realisation3, alt: 'Escalier en bois sur mesure à Molsheim' },
  { id: 4, title: 'Terrasse en ipé — Maison Schiltigheim', tag: 'Terrasse' as Tag, ville: 'Schiltigheim', finition: 'Ipé naturel', photo: PHOTOS.realisation4, alt: 'Terrasse en ipé à Schiltigheim' },
  { id: 5, title: 'Parquet point de Hongrie — Bureau Strasbourg', tag: 'Pose' as Tag, ville: 'Strasbourg', finition: 'Vitrifié brillant', photo: PHOTOS.realisation5, alt: 'Parquet en point de Hongrie dans un bureau à Strasbourg' },
  { id: 6, title: 'Ponçage & vitrification — Appartement Illkirch', tag: 'Rénovation' as Tag, ville: 'Illkirch', finition: 'Mat naturel', photo: PHOTOS.realisation6, alt: 'Ponçage et vitrification de parquet à Illkirch' },
]

export function RealisationsPreview() {
  const [activeTag, setActiveTag] = useState<Tag>('Tous')

  const filtered = activeTag === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.tag === activeTag)

  return (
    <section className="section-padding bg-forest" aria-labelledby="realisations-title">
      <div className="container-site">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
            Portfolio
          </span>
          <h2
            id="realisations-title"
            className="font-serif font-bold text-cream text-balance leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Nos réalisations
          </h2>
          <p className="text-cream/60 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Photos réelles de chantiers. Chaque projet reflète notre exigence du détail.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10" delay={100}>
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-gold text-forest'
                  : 'bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream'
              }`}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden shadow-soft"
              style={{ transition: `opacity 0.4s ease ${i * 60}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/20 to-transparent" aria-hidden="true" />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-sans font-semibold bg-forest/80 text-cream rounded-full px-3 py-1 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-cream/70 font-sans mb-0.5">{item.finition} · {item.ville}</p>
                  <h3 className="font-serif font-semibold text-cream text-base leading-snug">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={200}>
          <Link href="/realisations" className="btn-primary-light">
            Voir toutes les réalisations
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
