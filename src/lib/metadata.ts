import type { Metadata } from 'next'

const SITE_NAME = 'RNV Parquet'
const SITE_URL = 'https://www.parquet-strasbourg-67-rnv.fr'
const SITE_DESCRIPTION =
  'Artisan parqueteur à Strasbourg et Bas-Rhin — Pose, rénovation, ponçage et vitrification de parquet. 30 ans d\'expérience. Devis gratuit.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Parqueteur à Strasbourg (67)`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'parqueteur strasbourg',
    'pose parquet strasbourg',
    'rénovation parquet bas-rhin',
    'ponçage vitrification parquet',
    'artisan parquet 67',
    'RNV parquet hangenbieten',
  ],
  authors: [{ name: 'Mathieu Garcia — RNV Parquet' }],
  creator: 'RNV Parquet',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Parqueteur à Strasbourg (67)`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Parqueteur à Strasbourg (67)`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const BUSINESS = {
  name: 'RNV Parquet',
  fullName: 'Re.Nous.Vos Parquet',
  owner: 'Mathieu Garcia',
  phone: '06 72 79 67 34',
  phoneClean: '+33672796734',
  email: 'contact@rnvparquet.fr',
  address: '4 Rue des Jardins',
  city: 'Hangenbieten',
  zip: '67980',
  country: 'France',
  region: 'Bas-Rhin (67)',
  zone: 'Strasbourg + Bas-Rhin (rayon 50 km)',
  experience: '30 ans',
  hours: 'Lundi – Samedi : 08h00 – 19h30',
  url: SITE_URL,
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: BUSINESS.phoneClean,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    postalCode: BUSINESS.zip,
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.518,
    longitude: 7.643,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:30',
    },
  ],
  priceRange: '€€',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.518,
      longitude: 7.643,
    },
    geoRadius: '50000',
  },
}
