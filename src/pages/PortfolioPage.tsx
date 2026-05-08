import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function PortfolioPage() {
  useScrollReveal()
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
          Portfolio · {projects.length} réalisations
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tightest font-light leading-[0.92] text-balance">
          Réalisations
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
          Une sélection de projets résidentiels et commerciaux, dessinés pour durer et
          pensés sur-mesure pour celles et ceux qui les habitent.
        </p>
      </div>

      {/* Editorial alternating grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 space-y-20 lg:space-y-32">
        {projects.map((p, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              <Link
                to={`/realisations/${p.slug}`}
                className={`lg:col-span-7 group relative overflow-hidden hover-fade aspect-[4/3] block ${isEven ? '' : 'lg:order-2'}`}
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink">{p.category}</span>
                </div>
              </Link>
              <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-4">
                  — Nº {String(i + 1).padStart(2, '0')} / {p.year}
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tightest font-light leading-[1.02] mb-6">
                  {p.title}
                </h2>
                <p className="text-base lg:text-lg text-ink/75 leading-relaxed mb-8 max-w-md">
                  {p.description}
                </p>
                <div className="flex items-center gap-6 mb-8 text-sm text-ink/60">
                  <span>{p.location}</span>
                  <span className="w-1 h-1 rounded-full bg-ink/40" />
                  <span>{p.surface}</span>
                </div>
                <Link
                  to={`/realisations/${p.slug}`}
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide"
                >
                  <span className="border-b border-ink/30 pb-1 group-hover:border-ink transition-colors">
                    Voir le projet
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
