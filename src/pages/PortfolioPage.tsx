import Projects from '../components/Projects'

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="section-label mb-4">Réalisations</p>
          <h1 className="heading-display text-5xl md:text-6xl">Portfolio</h1>
        </div>
        <Projects />
      </div>
    </div>
  )
}
