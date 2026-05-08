import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Écoute & diagnostic',
    description: 'Chaque collaboration commence par une immersion dans votre univers. Vos habitudes, vos aspirations, la singularité du lieu — rien n\'est laissé au hasard.',
  },
  {
    number: '02',
    title: 'Conception',
    description: 'Des plans aux matériaux, chaque décision est guidée par une vision cohérente qui concilie esthétique et fonctionnalité.',
  },
  {
    number: '03',
    title: 'Réalisation',
    description: 'Un suivi rigoureux de chantier garantit que la vision initiale se concrétise avec précision, dans le respect des délais et du budget.',
  },
]

export default function Approach() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 lg:px-12 bg-stone-100 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-label mb-4">Méthode</p>
          <h2 className="heading-display text-4xl md:text-5xl">
            La démarche
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-serif text-6xl font-light text-stone-300 mb-6">{step.number}</p>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
