import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import SpicePortfolio from './sections/SpicePortfolio'
import KeralaToUAE from './sections/KeralaToUAE'
import QualityProcess from './sections/QualityProcess'
import WhyAnjillan from './sections/WhyAnjillan'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <SpicePortfolio />
        <KeralaToUAE />
        <QualityProcess />
        <WhyAnjillan />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
