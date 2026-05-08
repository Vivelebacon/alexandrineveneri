const steps = [
  {
    n: '01',
    title: 'Écoute',
    desc: 'Comprendre vos modes de vie, vos rituels, vos contraintes. Ressentir le lieu, son histoire, sa lumière.',
  },
  {
    n: '02',
    title: 'Conception',
    desc: 'Dessiner les volumes, choisir les matières, orchestrer la lumière. Présentation de planches et perspectives 3D.',
  },
  {
    n: '03',
    title: 'Suivi',
    desc: 'Coordination des artisans, sélection des pièces sur-mesure, suivi de chantier jusqu\'aux dernières finitions.',
  },
  {
    n: '04',
    title: 'Livraison',
    desc: 'Mise en scène finale, styling, photographies professionnelles. Le lieu vous est restitué, prêt à être habité.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative py-32 lg:py-48 bg-ink text-cream overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl scroll-reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 block mb-6">
            — 03 / Méthode
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] tracking-tightest font-light leading-[0.95]">
            Quatre temps<br />
            <span className="italic text-sand">pour un projet juste.</span>
          </h2>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {steps.map((s) => (
            <div
              key={s.n}
              className="scroll-reveal bg-ink p-8 lg:p-10 group hover:bg-ash transition-colors duration-700"
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-display text-6xl lg:text-7xl font-light text-sand/80">{s.n}</span>
                <span className="w-2 h-2 rounded-full bg-terracotta" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl tracking-tightest mb-4">{s.title}</h3>
              <p className="text-sm lg:text-base text-cream/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
