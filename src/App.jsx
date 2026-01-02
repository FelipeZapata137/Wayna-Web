import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import Footer from './components/Footer'
import Shop from './components/shop/Shop'
import WhatsappButton from './components/WhatsappButton'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="bg-white relative">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
        </Routes>
        
        <Footer />

        <WhatsappButton />
      </div>
    </Router>
  )
}

export default App