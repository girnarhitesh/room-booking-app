import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './Navigation.css';

function Navigation() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand">
          <img src="public/logo.img/img1.png" className="brand-logo" alt="Asatha Logo" />
          <div className="brand-text">
            {/* Logo Text (optional) */}
          </div>
        </Link>

        <div className="nav-actions">

          <Link to="/check-availability" className="btn btn-availability desktop-only">
            Check Availability
          </Link>

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

          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          {/* <Link to="/amenities">Amenities</Link> */}
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/check-availability" className="btn btn-availability mobile-only-in-menu">
            Check Availability
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navigation;