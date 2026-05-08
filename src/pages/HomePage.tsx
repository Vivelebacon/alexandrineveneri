import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Approach } from '../components/Approach'
import { Press } from '../components/Press'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function HomePage() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Press />
    </>
  )
}
