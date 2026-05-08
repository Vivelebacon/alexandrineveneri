export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: numbered label */}
          <div className="lg:col-span-3 scroll-reveal">
            <div className="sticky top-32">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block">
                — 01 / Manifesto
              </span>
              <div className="mt-6 w-12 h-px bg-ink/30" />
            </div>
          </div>

          {/* Right: editorial text */}
          <div className="lg:col-span-9">
            <p className="scroll-reveal font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest font-light text-balance">
              <span className="text-ink">Concevoir un espace, c'est avant tout</span>{' '}
              <span className="italic text-terracotta">comprendre celles et ceux</span>{' '}
              <span className="text-ink">qui vont l'habiter.</span>
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="scroll-reveal">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-moss">Approche</span>
                <p className="mt-4 text-base lg:text-lg text-ink/75 leading-relaxed">
                  Mon travail commence toujours par l'écoute. Comprendre le quotidien,
                  les rituels, les contraintes et les envies — pour que chaque projet
                  soit un sur-mesure, jamais une signature imposée.
                </p>
              </div>
              <div className="scroll-reveal">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-moss">Convictions</span>
                <p className="mt-4 text-base lg:text-lg text-ink/75 leading-relaxed">
                  Je crois en une architecture qui dure : matériaux nobles, gestes
                  artisanaux, lumière naturelle. Une élégance qui ne se démode pas
                  parce qu'elle ne cherche pas à plaire.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="scroll-reveal mt-20 lg:mt-28 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10">
              {[
                ['15', 'Années de pratique'],
                ['80+', 'Projets livrés'],
                ['12', 'Publications presse'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-5xl md:text-7xl tracking-tightest font-light">{num}</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-moss">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
