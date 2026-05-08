import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/portfolio/${project.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3] mb-5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500" />
        </div>

        <div className="flex items-start justify-between">
          <div>
            <p className="section-label mb-1">{project.category}</p>
            <h3 className="font-serif text-xl font-light text-stone-900 group-hover:text-stone-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-stone-500 mt-1">{project.location} · {project.year}</p>
          </div>
          <span className="text-stone-400 group-hover:text-stone-900 transition-all duration-300 group-hover:translate-x-1 mt-1">
            →
          </span>
        </div>
      </Link>
    </article>
  )
}

interface ProjectsProps {
  limit?: number
}

export default function Projects({ limit }: ProjectsProps) {
  const displayed = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {displayed.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  )
}
