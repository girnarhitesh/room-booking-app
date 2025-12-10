import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Navigation from './assets/Componets/NavigationSection/Navigation.jsx'
import Hero from './assets/Componets/Herosection/Hero.jsx'
import './App.css'
import RoomSection from './assets/Componets/RoomesSection/RoomSection.jsx'
import RoomDetails from './assets/Componets/RoomDetalis/RoomDetalis.jsx'
import Contactpage from './assets/Componets/Contactpage/Contactpage.jsx'
import AboutSectionContainer from './assets/Componets/AboutSectionContainer/AboutSectionContainer.jsx'
import FooterSection from './assets/Componets/FooterSection/FooterSection.jsx'

function App() {
  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/8200233998?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutSectionContainer />} />
          <Route path="/rooms" element={<RoomSection />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
      {/* WhatsApp Button with Ripple Animation */}
      <div className="whatsapp-container">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp />
        </a>
        <div className="whatsapp-ring"></div>
        <div className="whatsapp-ring"></div>
        <div className="whatsapp-ring"></div>
      </div>
    </>
  )
}

export default App