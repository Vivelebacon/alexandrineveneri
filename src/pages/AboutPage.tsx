import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AboutPage() {
  useScrollReveal()
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-cream min-h-screen">
      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
          À propos · Studio Alexandrine Vénéri
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-[9rem] tracking-tightest font-light leading-[0.95] text-balance max-w-6xl"
        >
          Concevoir un espace,<br />
          <span className="italic text-terracotta">c'est avant tout</span><br />
          comprendre celles et ceux<br />
          qui vont l'habiter.
        </motion.h1>
      </section>

      {/* Bio */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-24 lg:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/projects/galerie.jpg" alt="Studio" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-moss">
              Studio · Paris
            </div>
          </div>
          <div className="lg:col-span-7 scroll-reveal lg:pt-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
              — Parcours
            </span>
            <div className="space-y-6 text-lg lg:text-xl text-ink/80 leading-relaxed">
              <p>
                Diplômée de l'École Camondo, j'ai d'abord exercé en agence d'architecture
                aux côtés de praticiens reconnus avant de fonder mon propre studio en 2010.
              </p>
              <p>
                Quinze années plus tard, je continue de défendre la même conviction : la
                meilleure architecture intérieure est celle qui se fait oublier au profit
                de la vie qu'elle accueille.
              </p>
              <p>
                Le studio intervient sur des projets résidentiels haut de gamme et des
                lieux commerciaux exigeants, en France comme à l'étranger. Chaque mission
                est traitée comme un sur-mesure absolu, du concept jusqu'à la livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy grid */}
      <section className="bg-ink text-cream py-24 lg:py-40 grain relative overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 block mb-6">
            — Philosophie
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tightest font-light leading-[1.02] mb-16 lg:mb-24 max-w-5xl">
            <span className="italic text-sand">Quatre principes</span> qui guident chaque projet.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10">
            {[
              ['L\'écoute', 'Avant le dessin, l\'écoute. Comprendre les rituels, les contraintes, les rêves. C\'est de cette compréhension que naît un projet juste.'],
              ['La matière', 'Bois, pierre, métal, textile. Les matériaux nobles, choisis pour leur capacité à vieillir avec grâce, plutôt que pour leur éclat éphémère.'],
              ['La lumière', 'L\'élément architectural le plus puissant. Naturelle ou artificielle, elle structure l\'espace et révèle les volumes mieux que n\'importe quelle cloison.'],
              ['Le silence', 'Une architecture qui ne crie pas. Qui ne cherche pas à se faire remarquer. Une élégance qui appartient à ceux qui l\'habitent.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-ink p-8 lg:p-12 hover:bg-ash transition-colors duration-700">
                <h3 className="font-display text-2xl lg:text-3xl tracking-tightest mb-4">{title}</h3>
                <p className="text-base text-cream/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-24 lg:mt-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink/10 pt-12">
          {[
            ['15', 'Années de pratique'],
            ['80+', 'Projets livrés'],
            ['12', 'Publications presse'],
            ['3', 'Pays d\'intervention'],
          ].map(([num, label]) => (
            <div key={label} className="scroll-reveal">
              <div className="font-display text-5xl md:text-7xl tracking-tightest font-light">{num}</div>
              <div className="mt-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-moss">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
