'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface QuoteData {
  prestation: string
  prestationLabel: string
  typeDetail: string
  typeDetailLabel: string
  logement: string
  logementLabel: string
  etage: string
  surface: string
  etat: string
  finition: string
  message: string
  nom: string
  telephone: string
  email: string
  ville: string
  rgpd: boolean
}

const INITIAL_DATA: QuoteData = {
  prestation: '',
  prestationLabel: '',
  typeDetail: '',
  typeDetailLabel: '',
  logement: '',
  logementLabel: '',
  etage: '',
  surface: '',
  etat: '',
  finition: '',
  message: '',
  nom: '',
  telephone: '',
  email: '',
  ville: '',
  rgpd: false,
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PRESTATIONS = [
  {
    value: 'pose',
    label: 'Pose de parquet',
    desc: 'Nouveau revêtement',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="13" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="7" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="7" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    value: 'renovation',
    label: 'Rénovation parquet',
    desc: 'Restaurer l\'existant',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'poncage',
    label: 'Ponçage',
    desc: 'Mise à nu du bois',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'vitrification',
    label: 'Vitrification',
    desc: 'Finition & protection',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'escalier',
    label: 'Escalier bois',
    desc: 'Sur mesure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h4v-4h4v-4h4v-4h4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'terrasse',
    label: 'Terrasse bois',
    desc: 'Extérieur',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12l9-9 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="21" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="21" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const TYPE_OPTIONS: Record<string, Array<{ value: string; label: string; desc?: string }>> = {
  pose: [
    { value: 'massif-chene', label: 'Parquet massif chêne', desc: 'Haut de gamme, durable' },
    { value: 'massif-autre', label: 'Autre essence massive', desc: 'Noyer, frêne, acacia…' },
    { value: 'contrecolle', label: 'Parquet contrecollé', desc: 'Stable et polyvalent' },
    { value: 'stratifie', label: 'Stratifié', desc: 'Économique et résistant' },
    { value: 'vinyle-lino', label: 'Vinyle / Lino', desc: 'Moderne, étanche' },
    { value: 'point-hongrie', label: 'Point de Hongrie', desc: 'Pose traditionnelle' },
  ],
  renovation: [
    { value: 'parquet-massif', label: 'Parquet massif' },
    { value: 'parquet-stratifie', label: 'Parquet stratifié' },
    { value: 'escalier-renov', label: 'Escalier bois' },
    { value: 'terrasse-renov', label: 'Terrasse bois' },
  ],
  poncage: [
    { value: 'parquet-entier', label: 'Parquet entier' },
    { value: 'parquet-escalier', label: 'Parquet + escalier' },
    { value: 'escalier-seul', label: 'Escalier seul' },
    { value: 'local-commercial', label: 'Local commercial' },
  ],
  vitrification: [
    { value: 'vernis-brillant', label: 'Vernis brillant' },
    { value: 'vernis-satine', label: 'Vernis satiné', desc: 'Le plus populaire' },
    { value: 'vernis-mat', label: 'Vernis mat' },
    { value: 'huile', label: 'Huile naturelle' },
    { value: 'cire', label: 'Cire traditionnelle' },
  ],
  escalier: [
    { value: 'creation', label: 'Création sur mesure' },
    { value: 'renovation-escalier', label: 'Rénovation complète' },
    { value: 'marches', label: 'Remplacement des marches' },
    { value: 'garde-corps', label: 'Garde-corps + marches' },
  ],
  terrasse: [
    { value: 'ipe', label: 'Ipé', desc: 'Bois exotique, ultra-durable' },
    { value: 'douglas', label: 'Douglas', desc: 'Résineux français' },
    { value: 'pin-traite', label: 'Pin traité autoclave', desc: 'Économique' },
    { value: 'composite', label: 'Composite', desc: 'Zéro entretien' },
  ],
}

const LOGEMENTS = [
  { value: 'maison', label: 'Maison individuelle', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12l9-9 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { value: 'appartement', label: 'Appartement', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="18" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="7" y="5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="14" y="5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="7" y="11" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="14" y="11" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )},
  { value: 'commercial', label: 'Local commercial', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 22V13h8v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { value: 'autre', label: 'Autre / Je ne sais pas', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )},
]

const SURFACES = [
  { value: 'moins-20', label: 'Moins de 20 m²' },
  { value: '20-50', label: '20 — 50 m²' },
  { value: '50-100', label: '50 — 100 m²' },
  { value: '100-200', label: '100 — 200 m²' },
  { value: 'plus-200', label: 'Plus de 200 m²' },
]

const ETAGES = [
  { value: 'rdc', label: 'Rez-de-chaussée' },
  { value: '1er', label: '1er étage' },
  { value: '2eme', label: '2ème étage' },
  { value: '3plus', label: '3ème étage et +' },
]

const STEP_LABELS = ['Prestation', 'Type', 'Logement', 'Coordonnées', 'Récapitulatif']
const TOTAL_STEPS = 5

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  selected,
  onClick,
  label,
  desc,
  icon,
}: {
  selected: boolean
  onClick: () => void
  label: string
  desc?: string
  icon?: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 flex items-center gap-4 group ${
        selected
          ? 'border-gold bg-gold/10 shadow-sm'
          : 'border-forest/20 bg-transparent hover:border-gold/50 hover:bg-forest/5'
      }`}
    >
      {icon && (
        <span className={`flex-shrink-0 ${selected ? 'text-gold' : 'text-forest/40 group-hover:text-gold/60'} transition-colors`}>
          {icon}
        </span>
      )}
      <span className="flex-1 min-w-0">
        <span className={`block font-sans font-semibold text-sm ${selected ? 'text-forest' : 'text-forest/80'}`}>
          {label}
        </span>
        {desc && (
          <span className={`block font-sans text-xs mt-0.5 ${selected ? 'text-forest/60' : 'text-forest/40'}`}>
            {desc}
          </span>
        )}
      </span>
      <span
        className={`flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
          selected ? 'border-gold bg-gold' : 'border-forest/25'
        }`}
      />
    </button>
  )
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        {STEP_LABELS.map((label, i) => {
          const num = i + 1
          const isDone = step > num
          const isCurrent = step === num
          return (
            <div key={label} className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-sans transition-all duration-300 ${
                  isDone
                    ? 'bg-gold text-forest'
                    : isCurrent
                    ? 'bg-forest text-gold border-2 border-gold'
                    : 'bg-forest/10 text-forest/30'
                }`}
              >
                {isDone ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  num
                )}
              </div>
              <span
                className={`hidden sm:block text-xs font-sans font-medium transition-colors ${
                  isCurrent ? 'text-forest' : isDone ? 'text-forest/60' : 'text-forest/30'
                }`}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>
      <div className="relative h-1.5 bg-forest/10 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gold rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}

// ─── Steps ────────────────────────────────────────────────────────────────────

function Step1({ data, set }: { data: QuoteData; set: (k: keyof QuoteData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-serif font-bold text-forest text-xl mb-1">Quelle prestation souhaitez-vous ?</h3>
      <p className="text-forest/50 font-sans text-sm mb-6">Choisissez le type de travaux.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PRESTATIONS.map((p) => (
          <OptionCard
            key={p.value}
            selected={data.prestation === p.value}
            onClick={() => { set('prestation', p.value); set('prestationLabel', p.label) }}
            label={p.label}
            desc={p.desc}
            icon={p.icon}
          />
        ))}
      </div>
    </div>
  )
}

function Step2({ data, set }: { data: QuoteData; set: (k: keyof QuoteData, v: string) => void }) {
  const options = TYPE_OPTIONS[data.prestation] ?? []
  return (
    <div>
      <h3 className="font-serif font-bold text-forest text-xl mb-1">Quel type précisément ?</h3>
      <p className="text-forest/50 font-sans text-sm mb-6">Pour {data.prestationLabel.toLowerCase()}.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((o) => (
          <OptionCard
            key={o.value}
            selected={data.typeDetail === o.value}
            onClick={() => { set('typeDetail', o.value); set('typeDetailLabel', o.label) }}
            label={o.label}
            desc={o.desc}
          />
        ))}
      </div>
    </div>
  )
}

function Step3({ data, set }: { data: QuoteData; set: (k: keyof QuoteData, v: string) => void }) {
  return (
    <div>
      <h3 className="font-serif font-bold text-forest text-xl mb-1">Votre bien et la surface</h3>
      <p className="text-forest/50 font-sans text-sm mb-6">Ces informations nous aident à estimer votre devis.</p>

      <p className="font-sans font-semibold text-forest/80 text-xs uppercase tracking-wide mb-3">Type de logement</p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {LOGEMENTS.map((l) => (
          <OptionCard
            key={l.value}
            selected={data.logement === l.value}
            onClick={() => { set('logement', l.value); set('logementLabel', l.label) }}
            label={l.label}
            icon={l.icon}
          />
        ))}
      </div>

      {data.logement === 'appartement' && (
        <div className="mb-8">
          <p className="font-sans font-semibold text-forest/80 text-xs uppercase tracking-wide mb-3">Étage</p>
          <div className="grid grid-cols-2 gap-3">
            {ETAGES.map((e) => (
              <OptionCard
                key={e.value}
                selected={data.etage === e.value}
                onClick={() => set('etage', e.value)}
                label={e.label}
              />
            ))}
          </div>
        </div>
      )}

      <p className="font-sans font-semibold text-forest/80 text-xs uppercase tracking-wide mb-3">Surface estimée</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SURFACES.map((s) => (
          <OptionCard
            key={s.value}
            selected={data.surface === s.value}
            onClick={() => set('surface', s.value)}
            label={s.label}
          />
        ))}
      </div>
    </div>
  )
}

const inputClass =
  'w-full bg-linen border border-forest/15 text-forest placeholder-forest/40 rounded-xl px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-forest-light focus:bg-cream transition-all duration-200'
const labelClass = 'block font-sans font-medium text-forest text-xs uppercase tracking-wide mb-1.5'

function Step4({ data, set }: { data: QuoteData; set: (k: keyof QuoteData, v: string | boolean) => void }) {
  return (
    <div>
      <h3 className="font-serif font-bold text-forest text-xl mb-1">Vos coordonnées</h3>
      <p className="text-forest/50 font-sans text-sm mb-6">Pour vous envoyer votre devis personnalisé.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelClass}>Nom complet *</label>
          <input
            type="text"
            placeholder="Jean Dupont"
            value={data.nom}
            onChange={(e) => set('nom', e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Téléphone *</label>
          <input
            type="tel"
            placeholder="06 12 34 56 78"
            value={data.telephone}
            onChange={(e) => set('telephone', e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            placeholder="jean@exemple.fr"
            value={data.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Ville</label>
          <input
            type="text"
            placeholder="Strasbourg"
            value={data.ville}
            onChange={(e) => set('ville', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Informations complémentaires (optionnel)</label>
        <textarea
          rows={3}
          placeholder="Précisez l'état actuel, vos souhaits de finition, la date souhaitée..."
          value={data.message}
          onChange={(e) => set('message', e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
    </div>
  )
}

function Step5({
  data,
  set,
  status,
  onSubmit,
}: {
  data: QuoteData
  set: (k: keyof QuoteData, v: string | boolean) => void
  status: Status
  onSubmit: () => void
}) {
  const rows = [
    { label: 'Prestation', value: data.prestationLabel },
    { label: 'Type', value: data.typeDetailLabel },
    { label: 'Logement', value: data.logementLabel + (data.etage ? ` — ${ETAGES.find(e => e.value === data.etage)?.label}` : '') },
    { label: 'Surface', value: SURFACES.find(s => s.value === data.surface)?.label ?? data.surface },
    { label: 'Contact', value: `${data.nom} · ${data.telephone}` },
    ...(data.email ? [{ label: 'Email', value: data.email }] : []),
    ...(data.ville ? [{ label: 'Ville', value: data.ville }] : []),
    ...(data.message ? [{ label: 'Infos', value: data.message }] : []),
  ]
  return (
    <div>
      <h3 className="font-serif font-bold text-forest text-xl mb-1">Récapitulatif de votre demande</h3>
      <p className="text-forest/50 font-sans text-sm mb-6">Vérifiez vos informations avant d'envoyer.</p>

      <div className="rounded-2xl border border-forest/10 overflow-hidden mb-6">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 px-5 py-3.5 ${i % 2 === 0 ? 'bg-linen' : 'bg-cream'}`}
          >
            <span className="font-sans font-semibold text-forest/50 text-xs uppercase tracking-wide w-20 flex-shrink-0 pt-0.5">
              {row.label}
            </span>
            <span className="font-sans text-forest text-sm flex-1">{row.value}</span>
          </div>
        ))}
      </div>

      <label className="flex items-start gap-3 cursor-pointer mb-6">
        <input
          type="checkbox"
          checked={data.rgpd}
          onChange={(e) => set('rgpd', e.target.checked)}
          required
          className="mt-1 flex-shrink-0 w-4 h-4 rounded border-forest/30 accent-forest"
        />
        <span className="text-forest/55 font-sans text-xs leading-relaxed">
          J&apos;accepte que mes données soient utilisées par RNV Parquet pour traiter ma demande de devis, conformément à notre{' '}
          <a href="/mentions-legales" className="text-forest-light hover:underline">
            politique de confidentialité
          </a>
          .{' *'}
        </span>
      </label>

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-sans text-sm">
          Une erreur est survenue. Veuillez réessayer ou nous appeler au{' '}
          <a href="tel:+33672796734" className="font-semibold hover:underline">
            06 72 79 67 34
          </a>
          .
        </div>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={!data.rgpd || status === 'loading'}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
            </svg>
            Envoi en cours…
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Envoyer ma demande de devis
          </>
        )}
      </button>
      <p className="text-center text-forest/35 font-sans text-xs mt-3">
        Devis gratuit · Sans engagement · Réponse sous 24h
      </p>
    </div>
  )
}

function SuccessScreen() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green-600" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="font-serif font-bold text-forest text-xl mb-2">Demande envoyée !</h3>
      <p className="text-forest/65 font-sans text-sm leading-relaxed max-w-sm mx-auto">
        Nous avons bien reçu votre demande de devis. Mathieu vous répondra dans les 24h avec une estimation personnalisée et gratuite.
      </p>
      <p className="text-forest/50 font-sans text-xs mt-3">
        Besoin urgent ?{' '}
        <a href="tel:+33672796734" className="text-forest font-semibold hover:underline">
          06 72 79 67 34
        </a>
      </p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<Status>('idle')
  const [data, setData] = useState<QuoteData>(INITIAL_DATA)

  function setField<K extends keyof QuoteData>(key: K, value: QuoteData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }

  function canNext(): boolean {
    if (step === 1) return !!data.prestation
    if (step === 2) return !!data.typeDetail
    if (step === 3) return !!data.logement && !!data.surface
    if (step === 4) return !!data.nom.trim() && !!data.telephone.trim()
    return true
  }

  function handleNext() {
    if (canNext()) setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  function handlePrev() {
    setStep((s) => Math.max(s - 1, 1))
  }

  async function handleSubmit() {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          nom: data.nom,
          telephone: data.telephone,
          email: data.email,
          ville: data.ville,
          prestation: data.prestationLabel,
          typeDetail: data.typeDetailLabel,
          logement: data.logementLabel,
          etage: data.etage,
          surface: SURFACES.find(s => s.value === data.surface)?.label ?? data.surface,
          message: data.message,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <SuccessScreen />

  return (
    <div>
      <ProgressBar step={step} />

      <div>
        {step === 1 && <Step1 data={data} set={setField} />}
        {step === 2 && <Step2 data={data} set={setField} />}
        {step === 3 && <Step3 data={data} set={setField} />}
        {step === 4 && <Step4 data={data} set={setField} />}
        {step === 5 && (
          <Step5 data={data} set={setField} status={status} onSubmit={handleSubmit} />
        )}
      </div>

      {/* Navigation buttons (not on step 5 which has its own submit) */}
      {step < TOTAL_STEPS && (
        <div className={`flex mt-8 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 text-forest/60 font-sans font-semibold text-sm hover:text-forest transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Retour
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canNext()}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Suivant
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {step === TOTAL_STEPS && step > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          className="mt-4 inline-flex items-center gap-2 text-forest/60 font-sans font-semibold text-sm hover:text-forest transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </button>
      )}
    </div>
  )
}
