import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="/" className="brand">
        
          <img src="/logo.img/img1.png" className="brand-logo" alt="Asatha Logo" />
          <div className="brand-text">
             {/* <span className="brand-name">Asatha</span> */}
             {/* <span className="brand-subtitle">VILLA AND RESORT</span> */}
          </div>
        </a>

        <div className="nav-actions">
    
          <a href="#check-availability" className="btn btn-availability desktop-only">
            Check Availability
          </a>

          
          <button
            className="btn btn-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            MENU
            
            <span className="menu-icon-bars">
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
            </span>
          </button>
        </div>
        

        <nav className={`nav-menu-dropdown ${open ? 'open' : ''}`}>

           <a href="#home">Home</a>
           <a href="#rooms">Rooms</a>
           <a href="#amenities">Amenities</a>
           <a href="#pricing">Pricing</a>
           <a href="#contact">Contact</a>
        
           <a href="#check-availability" className="btn btn-availability mobile-only-in-menu">
             Check Availability
           </a>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;