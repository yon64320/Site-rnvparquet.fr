'use client'

import { useState } from 'react'

const PRESTATIONS = [
  { value: '', label: 'Type de prestation *' },
  { value: 'pose', label: 'Pose de parquet' },
  { value: 'renovation', label: 'Rénovation parquet' },
  { value: 'poncage', label: 'Ponçage' },
  { value: 'vitrification', label: 'Vitrification' },
  { value: 'escalier', label: 'Escalier bois' },
  { value: 'terrasse', label: 'Terrasse bois' },
  { value: 'autre', label: 'Autre' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green-600" aria-hidden="true">
            <path d="M9 12l2 2 4-4M12 3l.5 1.5L14 5l-1.5.5L12 7l-.5-1.5L10 5l1.5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        <h3 className="font-serif font-bold text-forest text-xl mb-2">Demande envoyée !</h3>
        <p className="text-forest/65 font-sans text-sm leading-relaxed max-w-sm mx-auto">
          Nous avons bien reçu votre message. Mathieu vous répondra dans les 24h avec votre devis gratuit.
        </p>
        <p className="text-forest/50 font-sans text-xs mt-3">
          Ou appelez directement : <a href="tel:+33672796734" className="text-forest-light font-semibold hover:underline">06 72 79 67 34</a>
        </p>
      </div>
    )
  }

  const inputClass = 'w-full bg-linen border border-forest/15 text-forest placeholder-forest/40 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-forest-light focus:bg-cream transition-all duration-200'
  const labelClass = 'block font-sans font-medium text-forest text-xs uppercase tracking-wide mb-1.5'

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de demande de devis">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="nom" className={labelClass}>Nom complet *</label>
          <input id="nom" name="nom" type="text" placeholder="Jean Dupont" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
          <input id="telephone" name="telephone" type="tel" placeholder="06 12 34 56 78" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" placeholder="jean@exemple.fr" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ville" className={labelClass}>Ville</label>
          <input id="ville" name="ville" type="text" placeholder="Strasbourg" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="prestation" className={labelClass}>Type de prestation *</label>
          <select id="prestation" name="prestation" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
            {PRESTATIONS.map((p) => (
              <option key={p.value} value={p.value} disabled={p.value === ''}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="surface" className={labelClass}>Surface estimée</label>
          <input id="surface" name="surface" type="text" placeholder="Ex : 30 m²" className={inputClass} />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className={labelClass}>Description du projet</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre projet : type de parquet, état actuel, finition souhaitée..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="photos" className={labelClass}>Photos (optionnel)</label>
        <div className="border-2 border-dashed border-forest/15 rounded-xl p-4 text-center hover:border-forest/30 transition-colors cursor-pointer">
          <input id="photos" name="photos" type="file" accept="image/*" multiple className="sr-only" aria-describedby="photos-help" />
          <label htmlFor="photos" className="cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-forest/30" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p id="photos-help" className="text-forest/40 font-sans text-xs">
              Cliquez pour ajouter des photos de votre chantier
            </p>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="rgpd"
            required
            className="mt-1 flex-shrink-0 w-4 h-4 rounded border-forest/30 accent-forest"
          />
          <span className="text-forest/55 font-sans text-xs leading-relaxed">
            J&apos;accepte que mes données soient utilisées par RNV Parquet pour traiter ma demande de devis, conformément à notre{' '}
            <a href="/mentions-legales" className="text-forest-light hover:underline">politique de confidentialité</a>.
            *
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-sans text-sm">
          Une erreur est survenue. Veuillez réessayer ou nous appeler directement au{' '}
          <a href="tel:+33672796734" className="font-semibold hover:underline">06 72 79 67 34</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/>
            </svg>
            Envoi en cours…
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Envoyer ma demande de devis
          </>
        )}
      </button>

      <p className="text-center text-forest/35 font-sans text-xs mt-3">
        Devis gratuit · Sans engagement · Réponse sous 24h
      </p>
    </form>
  )
}
