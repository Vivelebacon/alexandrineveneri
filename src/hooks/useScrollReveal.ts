import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
