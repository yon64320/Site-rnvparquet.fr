import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BUSINESS } from '@/lib/metadata'

export function CTAFinal() {
  return (
    <section className="section-padding bg-forest relative overflow-hidden" aria-labelledby="cta-title">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(200,169,106,0.5) 30px,
            rgba(200,169,106,0.5) 31px
          )`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true"/>

      <div className="container-site relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-4">
            Prêt à démarrer votre projet ?
          </span>
          <h2
            id="cta-title"
            className="font-serif font-bold text-cream text-balance leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Votre parquet mérite le<br />
            <span className="text-gold italic">meilleur savoir-faire</span>
          </h2>
          <p className="text-cream/65 font-sans text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 24h. Intervention dans tout le Bas-Rhin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-gold text-base px-8 py-4 w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Demander un devis gratuit
            </Link>
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="btn-primary-light text-base px-8 py-4 w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.13 12 19.79 19.79 0 011.06 3.4 2 2 0 013.04 1.21h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          {/* Mini form */}
          <div className="bg-forest-light/40 backdrop-blur-sm rounded-3xl p-7 border border-cream/10 max-w-lg mx-auto">
            <p className="text-cream font-serif font-semibold text-lg mb-5">Contact rapide</p>
            <form
              action="/api/contact"
              method="POST"
              className="flex flex-col gap-3"
              aria-label="Formulaire de contact rapide"
            >
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                required
                className="bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold focus:bg-cream/15 transition-all"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Votre téléphone *"
                required
                className="bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold focus:bg-cream/15 transition-all"
              />
              <select
                name="projet"
                defaultValue=""
                className="bg-cream/10 border border-cream/20 text-cream/70 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold focus:bg-cream/15 transition-all appearance-none"
              >
                <option value="" disabled>Type de projet</option>
                <option value="pose">Pose de parquet</option>
                <option value="renovation">Rénovation parquet</option>
                <option value="poncage">Ponçage / Vitrification</option>
                <option value="escalier">Escalier bois</option>
                <option value="terrasse">Terrasse bois</option>
                <option value="autre">Autre</option>
              </select>
              <button type="submit" className="btn-gold w-full justify-center mt-1">
                Envoyer ma demande
              </button>
              <p className="text-cream/30 font-sans text-xs text-center mt-1">
                Réponse garantie sous 24h · Devis gratuit sans engagement
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
