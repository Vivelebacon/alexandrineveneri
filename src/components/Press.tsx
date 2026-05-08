import { useScrollReveal } from '../hooks/useScrollReveal'

const pressItems = [
  {
    publication: 'Maison Française',
    date: 'Novembre 2023',
    title: '« Les espaces d\'Alexandrine Veneri respirent une élégance rare »',
    excerpt: 'Un reportage sur la rénovation d\'un duplex parisien qui a séduit la rédaction par son équilibre entre héritage architectural et modernité.',
  },
  {
    publication: 'AD France',
    date: 'Septembre 2023',
    title: '« Bourguignon et contemporain : l\'alchimie réussie »',
    excerpt: 'La maison de campagne signée Veneri fait la une de la rubrique rénovation du magazine.',
  },
  {
    publication: 'Elle Décoration',
    date: 'Mars 2022',
    title: '« Architectes à suivre en 2022 »',
    excerpt: 'Alexandrine Veneri figure parmi les dix créateurs d\'intérieur les plus prometteurs de sa génération.',
  },
]

export default function Press() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="section-label mb-4">Médias</p>
            <h2 className="heading-display text-4xl md:text-5xl">Presse</h2>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-stone-200">
          {pressItems.map((item, i) => (
            <div
              key={i}
              className={`py-10 grid grid-cols-1 md:grid-cols-4 gap-6 group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div>
                <p className="font-serif text-lg font-light text-stone-900">{item.publication}</p>
                <p className="text-xs text-stone-400 mt-1">{item.date}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-xl font-light text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
