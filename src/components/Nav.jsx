import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Nav.css'

const Nav = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/realisations" className="nav-link">Réalisations</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/mlegales" className="nav-link">Mentions Légales</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;