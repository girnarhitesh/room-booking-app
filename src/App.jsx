import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './assets/Componets/NavigationSection/Navigation.jsx'
import Hero from './assets/Componets/Herosection/Hero.jsx'
import './App.css'
import RoomSection from './assets/Componets/RoomesSection/RoomSection.jsx'
import RoomDetails from './assets/Componets/RoomDetalis/RoomDetalis.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Rooms" element={<RoomSection />} />
          <Route path="/room/:id" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;