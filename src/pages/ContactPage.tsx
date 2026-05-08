import { Contact } from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function ContactPage() {
  useScrollReveal()
  return (
    <div className="pt-20 bg-cream">
      <Contact />
    </div>
  )
}
