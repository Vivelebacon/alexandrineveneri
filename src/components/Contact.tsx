import { ArrowUpRight } from 'lucide-react'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
)

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.2-5.2 1.2-5.2s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.6-4.4-3.1 0-5 2.3-5 4.7 0 .9.4 1.9.8 2.5.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.3 3 7.3 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.3-1.5 3.1.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
)

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="scroll-reveal max-w-6xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-moss block mb-8">
            — 05 / Contact
          </span>
          <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] tracking-tightest font-light leading-[0.92]">
            Parlons de<br />
            <span className="italic text-terracotta">votre projet.</span>
          </h2>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 scroll-reveal">
            <a
              href="mailto:alexandrineveneri@gmail.com"
              className="group inline-flex items-baseline gap-4 font-display text-3xl md:text-5xl lg:text-6xl tracking-tightest font-light hover:text-terracotta transition-colors duration-500"
            >
              <span className="break-all">alexandrineveneri@gmail.com</span>
              <ArrowUpRight className="w-8 h-8 lg:w-12 lg:h-12 transition-transform duration-500 group-hover:rotate-45 flex-shrink-0" />
            </a>
            <p className="mt-8 max-w-lg text-lg text-ink/70 leading-relaxed">
              Chaque projet commence par une conversation. Que ce soit pour une rénovation,
              une création complète ou un simple conseil, je vous réponds personnellement
              sous 48 heures.
            </p>
          </div>

          <div className="lg:col-span-5 scroll-reveal grid grid-cols-2 gap-8 content-start">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss block mb-3">Studio</span>
              <p className="text-base">Paris 7e<br />Île-de-France</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss block mb-3">Disponibilité</span>
              <p className="text-base">Projets 2026<br /><span className="text-terracotta">2 places restantes</span></p>
            </div>
            <div className="col-span-2 mt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss block mb-4">Suivre</span>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors duration-500" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors duration-500" aria-label="LinkedIn">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors duration-500" aria-label="Pinterest">
                  <PinterestIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
