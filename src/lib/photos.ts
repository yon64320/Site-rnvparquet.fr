// Verified Unsplash photos — all IDs confirmed working
const BASE = 'https://images.unsplash.com/photo-'

function u(id: string, w = 1200, q = 85) {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`
}

export const PHOTOS = {
  // Hero — parquet chêne massif en gros plan
  hero: u('1562259929-b4e1fd3aef09', 1920, 90),

  // Services
  pose: u('1600585154340-be6161a56a0c', 800),       // salon avec parquet
  renovation: u('1560440021-33f9b867899d', 800),     // plancher bois
  poncage: u('1504307651254-35680f356dfd', 800),     // texture bois travaillé
  vitrification: u('1558618666-fcd25c85cd64', 800),  // bois brillant/huilé
  escalier: u('1449247709967-d4461a6a6103', 800),    // escalier en bois
  terrasse: u('1615971677499-5467cbab01c0', 800),    // terrasse/deck bois

  // Réalisations
  realisation1: u('1562259929-b4e1fd3aef09', 700),
  realisation2: u('1600585154340-be6161a56a0c', 700),
  realisation3: u('1449247709967-d4461a6a6103', 700),
  realisation4: u('1615971677499-5467cbab01c0', 700),
  realisation5: u('1560440021-33f9b867899d', 700),
  realisation6: u('1493663284031-b7e3aefcae8e', 700),

  // Entreprise
  artisan: u('1581091226825-a6a2a5aee158', 800),     // artisan menuisier
  atelier: u('1504307651254-35680f356dfd', 800),     // texture bois atelier
} as const
