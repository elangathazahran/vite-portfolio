import './App.css'

// import components
import CostumCursor from './assets/components/CostumCursor'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Experience from './assets/components/Experience'
import Skills from './assets/components/Skills'
import Portfolio from './assets/components/Portfolio'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
import BackToTop from './assets/components/BackToTop'

function App() {


  return (
    <>
      <CostumCursor />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* back to top */}
      <BackToTop />
    </>
  )
}

export default App