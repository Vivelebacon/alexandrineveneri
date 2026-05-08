import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.15)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', type: 'Résidentiel' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to a form handler (Netlify Forms, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="section-label mb-6">Travailler ensemble</p>
            <h2 className="heading-display text-4xl md:text-5xl mb-8">
              Parlons de
              <br />
              <em>votre projet</em>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10">
              Chaque projet est unique. Prenez contact pour un premier échange — sans engagement — afin de découvrir comment nous pouvons collaborer.
            </p>
            <div className="space-y-4 text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <span className="text-stone-400">✉</span>
                <a href="mailto:contact@alexandrineveneri.fr" className="hover:text-stone-900 transition-colors">
                  contact@alexandrineveneri.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-stone-400">◎</span>
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-64">
                <div className="text-center">
                  <p className="font-serif text-3xl font-light text-stone-900 mb-3">Merci !</p>
                  <p className="text-stone-500 text-sm">Votre message a bien été envoyé. Je reviendrai vers vous rapidement.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="section-label block mb-2">Nom</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="section-label block mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-sm"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="section-label block mb-2">Type de projet</label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option>Résidentiel</option>
                    <option>Commercial</option>
                    <option>Hôtellerie</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="section-label block mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors text-sm resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
