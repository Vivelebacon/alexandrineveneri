import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject, projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/portfolio" replace />

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <div className="pt-24">
      {/* Hero image */}
      <div className="aspect-[21/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <p className="section-label mb-3">{project.category}</p>
            <h1 className="heading-display text-5xl md:text-6xl mb-4">{project.title}</h1>
            <p className="font-serif text-xl font-light text-stone-500 italic">{project.subtitle}</p>
          </div>

          <div className="space-y-6">
            {[
              { label: 'Localisation', value: project.location },
              { label: 'Année', value: project.year },
              { label: 'Surface', value: project.surface },
            ].map(item => (
              <div key={item.label} className="border-b border-stone-200 pb-4">
                <p className="section-label mb-1">{item.label}</p>
                <p className="text-stone-900 font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mb-20">
          <p className="text-stone-600 leading-loose text-lg font-light">{project.longDescription}</p>
        </div>

        {/* Additional images */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {project.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt={`${project.title} ${i + 2}`} className="w-full aspect-[4/3] object-cover" />
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="border-t border-stone-200 pt-12 flex items-center justify-between">
          {prev ? (
            <Link to={`/portfolio/${prev.slug}`} className="group flex items-center gap-4">
              <span className="text-stone-400 group-hover:text-stone-900 transition-colors group-hover:-translate-x-1 duration-300">←</span>
              <div>
                <p className="section-label mb-1">Précédent</p>
                <p className="font-serif text-lg font-light text-stone-900">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/portfolio/${next.slug}`} className="group flex items-center gap-4 text-right">
              <div>
                <p className="section-label mb-1">Suivant</p>
                <p className="font-serif text-lg font-light text-stone-900">{next.title}</p>
              </div>
              <span className="text-stone-400 group-hover:text-stone-900 transition-colors group-hover:translate-x-1 duration-300">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
