import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="section-label mb-6">À propos</p>
            <h1 className="heading-display text-5xl md:text-6xl mb-12">
              Alexandrine
              <br />
              <em>Veneri</em>
            </h1>

            <div className="space-y-6 text-stone-600 leading-loose">
              <p>
                Architecte d'intérieur diplômée du CFAI (Centre de Formation des Architectes d'Intérieur), Alexandrine Veneri a fondé son agence en 2013 après plusieurs années passées au sein de cabinets parisiens de renom.
              </p>
              <p>
                Sa pratique se distingue par une attention particulière portée à l'écoute du client et à la singularité de chaque lieu. Convaincue que l'architecture intérieure doit servir la vie de ceux qui l'habitent, elle développe des projets sur mesure, qu'il s'agisse de rénovations intégrales ou de missions de conseil et de décoration.
              </p>
              <p>
                Son esthétique, volontiers qualifiée de « contemporaine et ancrée », puise dans les traditions artisanales françaises tout en restant résolument actuelle. Elle travaille avec un réseau d'artisans et de fabricants sélectionnés pour leur savoir-faire exceptionnel.
              </p>
              <p>
                Ses projets ont été publiés dans Maison Française, AD France, Elle Décoration et Architectural Digest.
              </p>
            </div>

            <div className="mt-12">
              <Link to="/contact" className="btn-primary">
                Prendre contact
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="/projects/duplex.jpg"
              alt="Alexandrine Veneri"
              className="w-full aspect-[3/4] object-cover"
            />

            <div className="grid grid-cols-3 gap-6 bg-stone-100 p-8">
              {[
                { value: '10+', label: 'Années d\'expérience' },
                { value: '60+', label: 'Projets réalisés' },
                { value: '3', label: 'Prix reçus' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl font-light text-stone-900">{stat.value}</p>
                  <p className="text-xs text-stone-500 mt-2 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-32">
          <p className="section-label mb-8">Services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-200 border border-stone-200">
            {[
              {
                title: 'Architecture d\'intérieur',
                description: 'Conception complète de l\'espace : plans, matériaux, mobilier, lumière. De la feuille blanche à la livraison.',
              },
              {
                title: 'Décoration',
                description: 'Mise en scène et composition d\'espaces existants. Sélection de mobilier, objets et textiles.',
              },
              {
                title: 'Conseil',
                description: 'Accompagnement ponctuel pour des décisions précises : choix de matériaux, organisation spatiale, palette chromatique.',
              },
            ].map(service => (
              <div key={service.title} className="p-10">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-4">{service.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
