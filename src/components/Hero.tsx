import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/projects/volumes.jpg"
          alt="Alexandrine Veneri — Architecture d'intérieur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <p className="section-label text-stone-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Architecte d'intérieur
          </p>
          <h1
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Alexandrine
            <br />
            <em>Veneri</em>
          </h1>
          <p
            className="text-stone-300 text-lg font-light mb-12 max-w-md leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            Créatrice d'espaces qui allient élégance intemporelle et fonctionnalité contemporaine.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white border border-white/50 px-8 py-4 hover:bg-white hover:text-stone-900 transition-all duration-300"
            >
              Découvrir le portfolio
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
          <span className="text-xs tracking-widest uppercase text-stone-400 rotate-90 origin-center translate-y-6">Scroll</span>
          <div className="w-px h-16 bg-stone-400/50" />
        </div>
      </div>
    </section>
  )
}
