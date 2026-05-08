import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const links = [
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Presse', href: '/presse' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages, navbar always uses solid background (no hero video underneath)
  const useSolid = !isHome || scrolled

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        useSolid ? 'bg-cream/85 backdrop-blur-md py-4 border-b border-ink/5' : 'py-7'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 leading-none group">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-ink/10 ring-1 ring-ink/10 group-hover:ring-terracotta transition-all duration-500">
            <img src="/favicon.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={cn('font-display text-xl tracking-tightest transition-colors', isHome && !scrolled ? 'text-cream' : 'text-ink')}>
              Alexandrine Vénéri
            </span>
            <span className={cn('font-mono text-[9px] uppercase tracking-[0.25em] mt-0.5', isHome && !scrolled ? 'text-cream/60' : 'text-moss')}>
              Architecte d'intérieur · Paris
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium tracking-wide transition-colors relative group',
                  isHome && !scrolled
                    ? isActive ? 'text-cream' : 'text-cream/70 hover:text-cream'
                    : isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px transition-all duration-500 group-hover:w-full',
                      isHome && !scrolled ? 'bg-cream' : 'bg-ink',
                      isActive ? 'w-full' : 'w-0'
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={cn(
            'hidden lg:inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.15em] uppercase rounded-full transition-colors duration-500',
            isHome && !scrolled
              ? 'bg-cream text-ink hover:bg-terracotta hover:text-cream'
              : 'bg-ink text-cream hover:bg-terracotta'
          )}
        >
          Démarrer un projet
          <span className={cn('w-1.5 h-1.5 rounded-full', isHome && !scrolled ? 'bg-ink' : 'bg-cream')} />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={cn('w-6 h-px transition-transform duration-300', isHome && !scrolled ? 'bg-cream' : 'bg-ink', open && 'rotate-45 translate-y-[6px]')} />
          <span className={cn('w-6 h-px transition-opacity duration-300', isHome && !scrolled ? 'bg-cream' : 'bg-ink', open && 'opacity-0')} />
          <span className={cn('w-6 h-px transition-transform duration-300', isHome && !scrolled ? 'bg-cream' : 'bg-ink', open && '-rotate-45 -translate-y-[6px]')} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-ink/10"
          >
            <nav className="flex flex-col gap-6 px-6 py-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-tightest text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
