import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/realisations" replace />

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70" />

        <div className="absolute inset-0 flex flex-col justify-end z-10">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream text-xs font-mono uppercase tracking-[0.25em] mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Toutes les réalisations
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/70 block mb-4">
                {project.category} · {project.year}
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-9xl tracking-tightest font-light leading-[0.92] text-cream max-w-5xl text-balance">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details + intro */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sticky details */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-8">
                — Fiche projet
              </span>
              <dl className="space-y-5">
                {project.details.map((d) => (
                  <div key={d.label} className="border-b border-ink/10 pb-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss mb-1">
                      {d.label}
                    </dt>
                    <dd className="text-base text-ink">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 bg-ink text-cream px-6 py-4 text-xs font-medium tracking-[0.15em] uppercase rounded-full hover:bg-terracotta transition-colors duration-500"
              >
                Discuter d'un projet similaire
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Editorial copy */}
          <div className="lg:col-span-8">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tightest font-light leading-[1.05] text-balance mb-16">
              {project.description}
            </p>
            <div className="prose prose-lg max-w-none space-y-6">
              {project.longDescription.map((para, i) => (
                <p key={i} className="text-lg text-ink/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image showcase */}
      <section className="bg-bone py-20 lg:py-32">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className="mt-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-moss">
            <span>{project.title}</span>
            <span>{project.location} · {project.year}</span>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
            — Projet suivant
          </span>
          <Link
            to={`/realisations/${next.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 aspect-[4/3] overflow-hidden hover-fade">
              <img src={next.image} alt={next.title} className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5">
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tightest font-light leading-[1.02] mb-6 group-hover:text-terracotta transition-colors duration-500">
                {next.title}
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <span>Découvrir</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
