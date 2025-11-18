import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './assets/Componets/NavigationSection/Navigation.jsx'
import Hero from './assets/Componets/Herosection/Hero.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;