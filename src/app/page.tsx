import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { ConfidenceBlock } from '@/components/home/ConfidenceBlock'
import { RealisationsPreview } from '@/components/home/RealisationsPreview'
import { AvisPreview } from '@/components/home/AvisPreview'
import { ZoneIntervention } from '@/components/home/ZoneIntervention'
import { CTAFinal } from '@/components/home/CTAFinal'

export const metadata: Metadata = {
  title: 'Parqueteur à Strasbourg — Pose & rénovation de parquet | RNV Parquet',
  description:
    'RNV Parquet — Artisan parqueteur à Strasbourg et Bas-Rhin. Pose, rénovation, ponçage, vitrification, escaliers et terrasses bois. 30 ans d\'expérience. Devis gratuit.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ConfidenceBlock />
      <RealisationsPreview />
      <AvisPreview />
      <ZoneIntervention />
      <CTAFinal />
    </>
  )
}
