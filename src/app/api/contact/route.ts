import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { nom, telephone, email, ville, prestation, typeDetail, logement, etage, surface, message } = body

    // Validate required fields
    if (!nom || !telephone || !prestation) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    // In production, integrate with email service (Resend, Nodemailer, etc.)
    // For now, log the request and return success
    console.log('=== NOUVELLE DEMANDE DE DEVIS ===')
    console.log(`Nom: ${nom}`)
    console.log(`Téléphone: ${telephone}`)
    console.log(`Email: ${email || 'Non renseigné'}`)
    console.log(`Ville: ${ville || 'Non renseignée'}`)
    console.log(`Prestation: ${prestation}`)
    console.log(`Type: ${typeDetail || 'Non renseigné'}`)
    console.log(`Logement: ${logement || 'Non renseigné'}`)
    console.log(`Étage: ${etage || 'Non renseigné'}`)
    console.log(`Surface: ${surface || 'Non renseignée'}`)
    console.log(`Message: ${message || 'Aucun message'}`)
    console.log('================================')

    // TODO: Add email sending here
    // Example with Resend:
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@parquet-strasbourg-67-rnv.fr',
    //   to: 'contact@rnvparquet.fr',
    //   subject: `Nouvelle demande de devis - ${prestation} - ${nom}`,
    //   html: `...`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
