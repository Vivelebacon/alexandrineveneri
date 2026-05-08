import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <img src="/logo.jpg" alt="Alexandrine Veneri" className="h-8 w-auto mb-6 brightness-0 invert opacity-60" />
            <p className="text-sm leading-relaxed text-stone-500">
              Architecte d'intérieur, créatrice d'espaces qui allient élégance et fonctionnalité.
            </p>
          </div>

          <div>
            <p className="section-label text-stone-600 mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/presse', label: 'Presse' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-stone-500 hover:text-stone-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label text-stone-600 mb-6">Contact</p>
            <div className="space-y-3 text-sm text-stone-500">
              <p>Paris, France</p>
              <a
                href="mailto:contact@alexandrineveneri.fr"
                className="block hover:text-stone-300 transition-colors"
              >
                contact@alexandrineveneri.fr
              </a>
              <a
                href="https://www.instagram.com/alexandrine.veneri"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-stone-300 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Alexandrine Veneri. Tous droits réservés.
          </p>
          <p className="text-xs text-stone-700">
            Architecte d'intérieur CFAI
          </p>
        </div>
      </div>
    </footer>
  )
}
