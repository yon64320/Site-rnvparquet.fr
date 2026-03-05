import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Mentions légales — RNV Parquet',
  description: 'Mentions légales du site RNV Parquet, parqueteur artisan à Strasbourg et Bas-Rhin.',
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="container-site max-w-3xl">
        <h1 className="font-serif font-bold text-forest mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Mentions légales
        </h1>

        <div className="prose prose-stone max-w-none font-sans text-forest/70 space-y-8">
          <section>
            <h2 className="font-serif font-semibold text-forest text-xl mb-3">Éditeur du site</h2>
            <p>
              <strong className="text-forest">{BUSINESS.name}</strong> ({BUSINESS.fullName})<br />
              Artisan parqueteur — auto-entrepreneur<br />
              {BUSINESS.address}, {BUSINESS.zip} {BUSINESS.city}<br />
              Téléphone : {BUSINESS.phone}<br />
              Email : {BUSINESS.email}
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-forest text-xl mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-forest text-xl mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de {BUSINESS.name}. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-forest text-xl mb-3">Protection des données personnelles</h2>
            <p>
              Les données collectées via le formulaire de contact (nom, téléphone, email) sont utilisées uniquement pour traiter votre demande de devis. Elles ne sont pas transmises à des tiers.
            </p>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à : {BUSINESS.email}
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-forest text-xl mb-3">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies à des fins publicitaires. Des cookies techniques peuvent être utilisés pour le bon fonctionnement du site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
