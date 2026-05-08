export interface Project {
  slug: string
  title: string
  subtitle: string
  location: string
  year: string
  surface: string
  image: string
  images: string[]
  description: string
  longDescription: string
  category: string
}

export const projects: Project[] = [
  {
    slug: 'campagne',
    title: 'Maison de Campagne',
    subtitle: 'Rénovation intégrale',
    location: 'Bourgogne, France',
    year: '2023',
    surface: '320 m²',
    image: '/projects/campagne.jpg',
    images: ['/projects/campagne.jpg'],
    description: 'Une maison de caractère réinventée dans le respect de son histoire.',
    longDescription: 'Cette demeure bourguignonne du XVIIIe siècle a fait l\'objet d\'une rénovation intégrale alliant authenticité et confort contemporain. Chaque espace a été repensé pour valoriser les volumes existants tout en intégrant les exigences du mode de vie actuel. Les matériaux naturels — pierre, bois, lin — dialoguent avec un mobilier soigneusement sélectionné pour créer une atmosphère à la fois sobre et chaleureuse.',
    category: 'Résidentiel',
  },
  {
    slug: 'duplex',
    title: 'Duplex Parisien',
    subtitle: 'Aménagement & décoration',
    location: 'Paris 7e, France',
    year: '2023',
    surface: '185 m²',
    image: '/projects/duplex.jpg',
    images: ['/projects/duplex.jpg'],
    description: 'Un duplex haussmannien revisité avec élégance et modernité.',
    longDescription: 'Au cœur du 7e arrondissement, ce duplex haussmannien a été entièrement repensé pour un jeune couple. La mission consistait à préserver l\'ADN architectural du bâtiment — moulures, parquet point de Hongrie, hauts plafonds — tout en insufflant une modernité discrète. La palette chromatique, jouant sur les tonalités de blanc cassé et de vert sauge, crée une cohérence visuelle entre les deux niveaux.',
    category: 'Résidentiel',
  },
  {
    slug: 'familiale',
    title: 'Villa Familiale',
    subtitle: 'Architecture d\'intérieur',
    location: 'Côte d\'Azur, France',
    year: '2022',
    surface: '450 m²',
    image: '/projects/familiale.jpg',
    images: ['/projects/familiale.jpg'],
    description: 'Une villa contemporaine pensée pour la vie en famille.',
    longDescription: 'Cette villa en bord de mer accueille une famille de cinq personnes. Le programme ambitieux intégrait de nombreuses contraintes : espace de vie ouvert sur l\'extérieur, chambres enfants évolutives, espaces de travail intégrés. La conception privilégie les matériaux locaux et une palette de teintes naturelles qui entrent en résonance avec le paysage méditerranéen environnant.',
    category: 'Résidentiel',
  },
  {
    slug: 'galerie',
    title: 'Galerie d\'Art',
    subtitle: 'Conception & scénographie',
    location: 'Lyon, France',
    year: '2022',
    surface: '280 m²',
    image: '/projects/galerie.jpg',
    images: ['/projects/galerie.jpg'],
    description: 'Un espace d\'exposition minimaliste au service des œuvres.',
    longDescription: 'Cette galerie d\'art contemporain lyonnaise a été conçue comme un écrin neutre et élégant pour les œuvres exposées. L\'enjeu principal résidait dans la maîtrise de la lumière naturelle, capturée par des puits de lumière zénithaux et modulée par un système de diffuseurs sur mesure. Les murs en plâtre taloché et les sols en béton ciré créent une continuité matérielle propice à la contemplation.',
    category: 'Commercial',
  },
  {
    slug: 'jacquard',
    title: 'Appartement Jacquard',
    subtitle: 'Rénovation complète',
    location: 'Paris 11e, France',
    year: '2021',
    surface: '95 m²',
    image: '/projects/jacquard.jpg',
    images: ['/projects/jacquard.jpg'],
    description: 'Un appartement entièrement transformé par le jeu des textures.',
    longDescription: 'Dans ce quartier populaire parisien, un appartement de 95 m² a été entièrement repensé pour un collectionneur de textiles. La demande était singulière : créer des espaces qui mettent en valeur une collection de tissus du monde entier. Le projet a donné lieu à des solutions d\'accrochage et de présentation innovantes, où l\'architecture d\'intérieur s\'efface pour laisser parler les matières.',
    category: 'Résidentiel',
  },
  {
    slug: 'volumes',
    title: 'Jeu de Volumes',
    subtitle: 'Architecture & intérieur',
    location: 'Bordeaux, France',
    year: '2021',
    surface: '520 m²',
    image: '/projects/volumes.jpg',
    images: ['/projects/volumes.jpg'],
    description: 'Une maison contemporaine sculptée par la lumière et les formes.',
    longDescription: 'Ce projet résidentiel d\'envergure explore le dialogue entre architecture et décoration intérieure. Conçu en collaboration avec l\'architecte, le travail d\'intérieur a consisté à habiter des volumes architecturaux forts — double hauteur, passerelles, toits-terrasses — tout en préservant leur puissance formelle. Le mobilier, en grande partie dessiné sur mesure, accompagne sans contrarier la géométrie des espaces.',
    category: 'Résidentiel',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
