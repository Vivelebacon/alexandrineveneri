import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-12 overflow-hidden">
      {/* Top: nav columns */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 pb-12 border-b border-cream/10">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 block mb-5">Studio</span>
          <p className="text-sm text-cream/80 leading-relaxed">Paris 7e<br />Île-de-France<br />France</p>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 block mb-5">Navigation</span>
          <ul className="space-y-2 text-sm">
            <li><Link to="/realisations" className="text-cream/80 hover:text-cream transition-colors">Réalisations</Link></li>
            <li><Link to="/a-propos" className="text-cream/80 hover:text-cream transition-colors">À propos</Link></li>
            <li><Link to="/presse" className="text-cream/80 hover:text-cream transition-colors">Presse</Link></li>
            <li><Link to="/contact" className="text-cream/80 hover:text-cream transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 block mb-5">Contact</span>
          <a href="mailto:alexandrineveneri@gmail.com" className="text-sm text-cream/80 hover:text-cream transition-colors break-all">alexandrineveneri@gmail.com</a>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40 block mb-5">Suivre</span>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.instagram.com/alexandrineveneri/" target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream transition-colors">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/alexandrine-veneri-373521313/" target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream transition-colors">LinkedIn</a></li>
            <li><a href="https://fr.pinterest.com/Alexandrineveneri1/" target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream transition-colors">Pinterest</a></li>
          </ul>
        </div>
      </div>

      {/* Giant signature */}
      <div className="overflow-hidden border-b border-cream/10 pb-8 mb-8">
        <h3 className="font-display text-[18vw] lg:text-[14vw] leading-[0.85] tracking-tightest font-light text-center text-cream/95 px-6">
          Alexandrine Vénéri
        </h3>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono uppercase tracking-[0.2em] text-cream/60">
        <span>© 2026 · Tous droits réservés</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          Studio basé à Paris
        </span>
        <span>Mentions légales</span>
      </div>
    </footer>
  )
}
