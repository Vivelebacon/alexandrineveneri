import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-ink flex flex-col">
      {/* Background video with parallax */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/projects/galerie.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />
      </motion.div>

      {/* Floating meta info */}
      <div className="absolute top-32 left-6 lg:left-12 z-10 text-xs font-mono uppercase tracking-[0.3em] text-cream/60">
        <span className="block">Est. 2010</span>
        <span className="block mt-1">Paris · Île-de-France</span>
      </div>

      <div className="absolute top-32 right-6 lg:right-12 z-10 text-xs font-mono uppercase tracking-[0.3em] text-cream/60 text-right">
        <span className="block">N°001</span>
        <span className="block mt-1">Studio</span>
      </div>

      {/* Centered content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex-1 max-w-[1600px] w-full mx-auto px-6 lg:px-12 pt-32 lg:pt-36 pb-10 flex flex-col justify-center items-center text-center"
      >
        {/* Massive serif headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="font-display font-light text-[clamp(2.25rem,7vw,7rem)] leading-[0.95] tracking-tightest text-balance text-cream"
        >
          <span className="block">Concevoir</span>
          <span className="block italic font-normal text-sand">des espaces</span>
          <span className="block">qui se vivent.</span>
        </motion.h1>

        {/* Scroll indicator centered below title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-14 lg:mt-20 flex flex-col items-center gap-4"
        >
          <Link
            to="/realisations"
            className="w-14 h-14 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-ink transition-all duration-500 group"
            aria-label="Voir les projets"
          >
            <ArrowDown className="w-4 h-4 text-cream group-hover:text-ink transition-colors animate-bounce" />
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Découvrir les projets
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom marquee — now a flex item, no longer absolute */}
      <div className="relative border-t border-cream/20 py-5 overflow-hidden bg-ink/30 backdrop-blur-sm z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 mr-12 font-mono text-xs uppercase tracking-[0.35em] text-cream/60">
              <span>Art & Décoration</span>
              <span className="w-1 h-1 rounded-full bg-cream/40" />
              <span>M comme Maison</span>
              <span className="w-1 h-1 rounded-full bg-cream/40" />
              <span>Immersive Home Design</span>
              <span className="w-1 h-1 rounded-full bg-cream/40" />
              <span>C8 · Télévision</span>
              <span className="w-1 h-1 rounded-full bg-cream/40" />
              <span>Le Jacquard Français</span>
              <span className="w-1 h-1 rounded-full bg-cream/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
