import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BUSINESS } from '@/lib/metadata'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Devis gratuit — RNV Parquet Strasbourg',
  description:
    'Contactez RNV Parquet pour un devis gratuit. Parqueteur artisan à Strasbourg et Bas-Rhin. Réponse sous 24h.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest pt-32 pb-20">
        <div className="container-site text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
              Nous contacter
            </span>
            <h1
              className="font-serif font-bold text-cream text-balance leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Demander un devis gratuit
            </h1>
            <p className="text-cream/65 font-sans text-lg max-w-xl mx-auto leading-relaxed">
              Décrivez votre projet, nous vous répondons sous 24h avec un devis personnalisé et gratuit.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact grid */}
      <section className="section-padding bg-linen" aria-label="Formulaire et informations de contact">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            {/* Form — col 3/5 */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-cream rounded-3xl p-8 shadow-soft">
                  <h2 className="font-serif font-bold text-forest text-xl mb-6">Votre demande de devis</h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Info — col 2/5 */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right" delay={100}>
                <div className="bg-forest rounded-3xl p-7 text-cream">
                  <h2 className="font-serif font-semibold text-cream text-lg mb-6">Informations pratiques</h2>
                  <ul className="space-y-5 text-sm">
                    <li className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold mt-0.5" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div>
                        <p className="text-cream/50 text-xs mb-1">Téléphone</p>
                        <a href={`tel:${BUSINESS.phoneClean}`} className="text-cream font-semibold hover:text-gold transition-colors text-base">
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold mt-0.5" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <div>
                        <p className="text-cream/50 text-xs mb-1">Email</p>
                        <a href={`mailto:${BUSINESS.email}`} className="text-cream hover:text-gold transition-colors">
                          {BUSINESS.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold mt-0.5" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <div>
                        <p className="text-cream/50 text-xs mb-1">Adresse</p>
                        <p>{BUSINESS.address}<br />{BUSINESS.zip} {BUSINESS.city}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gold mt-0.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <div>
                        <p className="text-cream/50 text-xs mb-1">Horaires</p>
                        <p>{BUSINESS.hours}</p>
                        <p className="text-cream/50 text-xs mt-0.5">Dimanche fermé</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={200}>
                <div className="bg-cream rounded-3xl p-6 shadow-card border border-forest/8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-forest text-sm">Réponse rapide</p>
                      <p className="text-forest/50 text-xs">Devis sous 24h</p>
                    </div>
                  </div>
                  <p className="text-forest/65 font-sans text-sm leading-relaxed">
                    Nous vous répondons dans les 24h avec un devis gratuit et sans engagement, adapté à votre projet.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={300}>
                <div className="bg-cream rounded-3xl p-6 shadow-card border border-forest/8">
                  <p className="font-sans font-semibold text-forest text-sm mb-1">Zone d&apos;intervention</p>
                  <p className="text-forest/65 font-sans text-sm leading-relaxed">
                    Strasbourg et Bas-Rhin dans un rayon de 50 km autour de Hangenbieten.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
