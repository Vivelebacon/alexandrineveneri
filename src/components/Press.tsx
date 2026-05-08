const press = [
  { name: 'Art & Décoration', issue: 'Nº 524 · 2024', quote: 'Une élégance qui ne crie jamais.' },
  { name: 'M comme Maison', issue: 'Saison 7 · C8', quote: 'L\'architecte qui réconcilie famille et beauté.' },
  { name: 'Immersive Home', issue: 'Édition 2023', quote: 'Le sur-mesure pensé jusqu\'au moindre détail.' },
  { name: 'AD Magazine', issue: 'Sept. 2023', quote: 'Une signature retenue, quasi invisible.' },
]

export function Press() {
  return (
    <section id="press" className="relative py-32 lg:py-48">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 scroll-reveal">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-6">
              — 04 / Presse
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tightest font-light leading-[1.02]">
              Ils en ont<br />
              <span className="italic text-terracotta">parlé.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {press.map((p) => (
              <div
                key={p.name}
                className="scroll-reveal bg-cream p-8 lg:p-10 hover:bg-bone transition-colors duration-700 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-2xl tracking-tightest">{p.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-moss">{p.issue}</span>
                </div>
                <p className="font-display text-xl lg:text-2xl italic text-ink/80 leading-snug">
                  « {p.quote} »
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
