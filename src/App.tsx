import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { AboutPage } from './pages/AboutPage'
import { PressPage } from './pages/PressPage'
import { ContactPage } from './pages/ContactPage'
import { ProjectPage } from './pages/ProjectPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/realisations" element={<PortfolioPage />} />
            <Route path="/realisations/:slug" element={<ProjectPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/presse" element={<PressPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
