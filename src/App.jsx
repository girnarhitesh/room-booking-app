import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './assets/Componets/NavigationSection/Navigation.jsx'
import Hero from './assets/Componets/Herosection/Hero.jsx'
import './App.css'
import RoomSection from './assets/Componets/RoomesSection/RoomSection.jsx'
import RoomDetails from './assets/Componets/RoomDetalis/RoomDetalis.jsx'
import Contactpage from './assets/Componets/Contactpage/Contactpage.jsx'
import AboutSectionContainer from './assets/Componets/AboutSectionContainer/AboutSectionContainer.jsx'
import FooterSection from './FooterSection/FooterSection.jsx'



function App() {
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
    </>
  )
}

export default App;