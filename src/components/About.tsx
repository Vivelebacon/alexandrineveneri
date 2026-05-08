import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="section-label mb-6">À propos</p>
            <h2 className="heading-display text-4xl md:text-5xl mb-8">
              Une approche singulière
              <br />
              <em>de l'espace</em>
            </h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Architecte d'intérieur diplômée du CFAI, Alexandrine Veneri développe depuis plus de dix ans une pratique exigeante au service de projets résidentiels et commerciaux d'exception.
              </p>
              <p>
                Son approche place le dialogue au cœur du processus créatif. Chaque projet naît d'une écoute attentive des usages, des aspirations et de la singularité du lieu pour aboutir à des espaces qui portent l'empreinte de leurs habitants.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/a-propos" className="btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/projects/familiale.jpg"
              alt="Alexandrine Veneri"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-stone-50 p-8 max-w-xs">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Années d\'expérience' },
                  { value: '60+', label: 'Projets réalisés' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-light text-stone-900">{stat.value}</p>
                    <p className="text-xs text-stone-500 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
