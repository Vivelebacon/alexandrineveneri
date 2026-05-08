import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { cn } from '../lib/utils'

const sizeMap = {
  wide: 'lg:col-span-8 aspect-[16/10]',
  tall: 'lg:col-span-4 aspect-[3/4]',
  square: 'lg:col-span-6 aspect-square',
  large: 'lg:col-span-12 aspect-[21/9]',
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-40 bg-bone">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="scroll-reveal">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
              — 02 / Réalisations
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tightest font-light leading-[0.95]">
              Une sélection<br />
              <span className="italic">de projets</span>
            </h2>
          </div>
          <Link
            to="/realisations"
            className="scroll-reveal group inline-flex items-center gap-3 text-sm font-medium tracking-wide self-start lg:self-end"
          >
            <span className="border-b border-ink/30 pb-1 group-hover:border-ink transition-colors">
              Voir l'intégralité du portfolio
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={cn(sizeMap[p.size])}
            >
            <Link
              to={`/realisations/${p.slug}`}
              className="group relative overflow-hidden hover-fade bg-ink/5 cursor-pointer block w-full h-full"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Top tag */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink">{p.category}</span>
              </div>

              {/* Bottom info — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl text-cream tracking-tightest leading-tight">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80">
                      <span>{p.location}</span>
                      <span className="w-1 h-1 rounded-full bg-cream/50" />
                      <span>{p.year}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0 -translate-y-1 group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4 text-ink" />
                  </div>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
