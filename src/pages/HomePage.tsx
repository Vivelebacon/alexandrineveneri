import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Approach from '../components/Approach'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Selected projects */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="section-label mb-4">Sélection</p>
              <h2 className="heading-display text-4xl md:text-5xl">Projets récents</h2>
            </div>
            <Link to="/portfolio" className="btn-ghost hidden md:inline-flex">
              Voir tout le portfolio →
            </Link>
          </div>
          <Projects limit={3} />
          <div className="mt-16 text-center md:hidden">
            <Link to="/portfolio" className="btn-primary">
              Voir tout le portfolio
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Approach />
    </>
  )
}
