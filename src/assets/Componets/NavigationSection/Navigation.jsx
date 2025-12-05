import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './Navigation.css';

function Navigation() {

  const [open, setOpen] = useState(false);   // ✅ only two values

  // ✅ function to close menu
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <img src="public/logo.img/img1.png" className="brand-logo" alt="Asatha Logo" />
        </Link>

        <div className="nav-actions">

          {/* <Link 
            to="/check-availability" 
            className="btn btn-availability desktop-only"
            onClick={closeMenu}
          >
            Check Availability
          </Link> */}

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

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About us</Link>
          <Link to="/rooms" onClick={closeMenu}>Rooms</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          {/* <Link 
            to="/check-availability" 
            className="btn btn-availability mobile-only-in-menu"
            onClick={closeMenu}
          >
            Check Availability
          </Link> */}

        </nav>
      </div>
    </header>
  );
}

export default Navigation;