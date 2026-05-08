export type Project = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  location: string
  surface?: string
  description: string
  longDescription: string[]
  image: string
  size: 'wide' | 'tall' | 'square' | 'large'
  details: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'jacquard',
    slug: 'le-jacquard-francais',
    title: 'Le Jacquard Français',
    category: 'Retail',
    year: '2024',
    location: 'Paris',
    surface: '180 m²',
    description: "Rénovation d'une boutique haut de gamme et mise en scène d'un patrimoine textile français.",
    longDescription: [
      "Pour cette boutique iconique de la Rive Gauche, le défi était de moderniser l'expérience client tout en honorant l'héritage textile centenaire de la maison Le Jacquard Français.",
      "Le mobilier a été entièrement dessiné sur mesure : présentoirs en bois clair pour révéler les nappages brodés, parois aimantées pour rotation rapide des collections, et un coin coloration permettant aux clients de visualiser leurs draperies dans la lumière du jour.",
      "L'éclairage architectural, ponctuel et chaud, sublime la matière sans jamais éclipser le produit. Une réflexion menée main dans la main avec les artisans de la maison.",
    ],
    image: '/projects/jacquard.jpg',
    size: 'wide',
    details: [
      { label: 'Lieu', value: 'Paris 1er' },
      { label: 'Année', value: '2024' },
      { label: 'Surface', value: '180 m²' },
      { label: 'Mission', value: 'Rénovation complète, mobilier sur-mesure' },
      { label: 'Typologie', value: 'Boutique haut de gamme' },
    ],
  },
  {
    id: 'volumes',
    slug: 'maison-volumes-repenses',
    title: 'Maison aux volumes repensés',
    category: 'Résidentiel',
    year: '2024',
    location: 'Île-de-France',
    surface: '220 m²',
    description: 'Réorganisation complète des volumes pour révéler la lumière naturelle et fluidifier les circulations.',
    longDescription: [
      "Une maison familiale figée dans son plan d'origine, où chaque pièce semblait déconnectée des autres. La mission : ouvrir, alléger, faire respirer.",
      "Suppression de cloisons porteuses, déplacement de la cage d'escalier, création d'une double-hauteur dans le séjour : trois gestes architecturaux ont suffi à métamorphoser le quotidien des habitants.",
      "Les matériaux ont été choisis pour leur capacité à vieillir : chêne brossé pour les sols, enduit chaux pour les murs, marbre Calacatta dans la cuisine. Une élégance qui se patine au fil des années.",
    ],
    image: '/projects/volumes.jpg',
    size: 'tall',
    details: [
      { label: 'Lieu', value: 'Île-de-France' },
      { label: 'Année', value: '2024' },
      { label: 'Surface', value: '220 m²' },
      { label: 'Mission', value: 'Architecture intérieure complète' },
      { label: 'Typologie', value: 'Résidence familiale' },
    ],
  },
  {
    id: 'galerie',
    slug: 'appartement-exception',
    title: "Appartement d'exception",
    category: 'Résidentiel',
    year: '2023',
    location: 'Paris',
    surface: '160 m²',
    description: "Un appartement pensé comme une galerie d'art habitée, où chaque pièce devient un cadre.",
    longDescription: [
      "Les propriétaires, collectionneurs passionnés, voulaient un lieu capable d'accueillir leur collection sans la museifier. Pas un musée — une maison.",
      "L'enjeu : créer une scénographie qui change avec les saisons d'accrochage. Cimaises invisibles, éclairage muséal pilotable, sols en pierre naturelle qui amplifient la lumière sans la voler aux œuvres.",
      "Le mobilier, dessiné sur mesure et minimaliste, s'efface volontairement. Les œuvres d'art prennent toute la place — comme dans une galerie blanche, mais avec l'intimité d'un foyer.",
    ],
    image: '/projects/galerie.jpg',
    size: 'square',
    details: [
      { label: 'Lieu', value: 'Paris 7e' },
      { label: 'Année', value: '2023' },
      { label: 'Surface', value: '160 m²' },
      { label: 'Mission', value: 'Architecture intérieure, scénographie' },
      { label: 'Typologie', value: 'Appartement haussmannien' },
    ],
  },
  {
    id: 'familiale',
    slug: 'maison-familiale-sur-mesure',
    title: 'Maison familiale sur-mesure',
    category: 'Résidentiel',
    year: '2023',
    location: 'Île-de-France',
    surface: '280 m²',
    description: 'Rénovation complète pour une famille, alliant convivialité, durabilité et matériaux nobles.',
    longDescription: [
      "Une famille de cinq, des envies contradictoires : un lieu chaleureux et structuré, ouvert sans être bruyant, design sans être froid. Un défi.",
      "La réponse passe par une cuisine-salle à manger surdimensionnée, véritable cœur de la maison, et par des chambres pensées comme des cocons : matières douces, palette tonale, rangements intégrés.",
      "Les enfants ont été consultés à chaque étape. Leur chambre porte leur empreinte, sans céder aux modes éphémères du marché jeunesse.",
    ],
    image: '/projects/familiale.jpg',
    size: 'square',
    details: [
      { label: 'Lieu', value: 'Île-de-France' },
      { label: 'Année', value: '2023' },
      { label: 'Surface', value: '280 m²' },
      { label: 'Mission', value: 'Rénovation complète, décoration' },
      { label: 'Typologie', value: 'Maison familiale' },
    ],
  },
  {
    id: 'duplex',
    slug: 'duplex-contemporain',
    title: 'Duplex Contemporain',
    category: 'Résidentiel',
    year: '2023',
    location: 'Paris',
    surface: '140 m²',
    description: 'Un duplex parisien sublimé par un graphisme architectural fort et une palette tonale maîtrisée.',
    longDescription: [
      "Un duplex sous les toits parisiens, avec ses contraintes techniques (poutres apparentes, plafonds inégaux) transformées en atouts narratifs.",
      "Un escalier sculptural en acier noir relie les deux niveaux et devient l'élément architectural central. Les volumes plus bas sont traités en niches habitées : bibliothèques, banquettes, espace lecture.",
      "Une palette resserrée — beige sable, noir mat, laiton vieilli — donne au lieu une cohérence quasi cinématographique.",
    ],
    image: '/projects/duplex.jpg',
    size: 'wide',
    details: [
      { label: 'Lieu', value: 'Paris 16e' },
      { label: 'Année', value: '2023' },
      { label: 'Surface', value: '140 m²' },
      { label: 'Mission', value: 'Architecture intérieure complète' },
      { label: 'Typologie', value: 'Duplex sous-toit' },
    ],
  },
  {
    id: 'campagne',
    slug: 'maison-de-campagne',
    title: 'Maison de campagne',
    category: 'Résidentiel',
    year: '2022',
    location: 'Normandie',
    surface: '200 m²',
    description: "Mariage subtil entre matériaux naturels d'origine et confort contemporain.",
    longDescription: [
      "Une longère normande du XVIIIe siècle, à réveiller sans la trahir. Les murs en pierre, les poutres et les sols en tomette ont été conservés et restaurés à l'identique.",
      "Le confort moderne s'invite avec discrétion : chauffage par le sol invisible, domotique cachée, salle de bains ouverte sur le paysage.",
      "Le projet a été pensé comme un dialogue entre l'architecte et les artisans locaux — couvreurs, tailleurs de pierre, ébénistes. Le résultat : un lieu enraciné, qui semble avoir toujours été là.",
    ],
    image: '/projects/campagne.jpg',
    size: 'tall',
    details: [
      { label: 'Lieu', value: 'Normandie' },
      { label: 'Année', value: '2022' },
      { label: 'Surface', value: '200 m²' },
      { label: 'Mission', value: 'Restauration, architecture intérieure' },
      { label: 'Typologie', value: 'Longère du XVIIIe' },
    ],
  },
]
