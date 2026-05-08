import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const press = [
  { name: 'Art & Décoration', issue: 'Nº 524 · 2024', quote: "Une élégance qui ne crie jamais. Le studio Vénéri impose un classicisme de bon aloi, où chaque détail compte.", project: "Le Jacquard Français" },
  { name: 'M comme Maison', issue: 'Saison 7 · C8', quote: "L'architecte qui réconcilie famille et beauté. Une approche profondément humaine de l'espace.", project: "Maison familiale sur-mesure" },
  { name: 'Immersive Home Design', issue: 'Édition 2023', quote: "Le sur-mesure pensé jusqu'au moindre détail, sans jamais peser. Une signature d'une rare cohérence.", project: "Appartement d'exception" },
  { name: 'AD Magazine', issue: 'Septembre 2023', quote: "Une signature retenue, quasi invisible, qui laisse parler les lieux et leurs habitants.", project: "Duplex Contemporain" },
  { name: 'Marie Claire Maison', issue: 'Mai 2023', quote: "Du sur-mesure intelligent, où chaque pièce trouve sa juste place dans l'économie du quotidien.", project: "Maison aux volumes repensés" },
  { name: 'Architectural Digest France', issue: 'Avril 2022', quote: "Restauration sensible d'une longère normande. Un dialogue maîtrisé entre patrimoine et modernité.", project: "Maison de campagne" },
]

export function PressPage() {
  useScrollReveal()
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-cream min-h-screen">
      {/* Header */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
          Presse · {press.length} publications
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tightest font-light leading-[0.92] text-balance">
          Ils en ont<br />
          <span className="italic text-terracotta">parlé.</span>
        </h1>
      </section>

      {/* Press list */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          {press.map((p, i) => (
            <motion.article
              key={p.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="bg-cream p-8 lg:p-12 hover:bg-bone transition-colors duration-700 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h2 className="font-display text-3xl tracking-tightest">{p.name}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss mt-1 block">
                    {p.issue}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-ink/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-terracotta" />
              </div>
              <p className="font-display text-xl lg:text-2xl italic text-ink/80 leading-snug mb-6">
                « {p.quote} »
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss border-t border-ink/10 pt-4 block">
                Sur le projet · {p.project}
              </span>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
