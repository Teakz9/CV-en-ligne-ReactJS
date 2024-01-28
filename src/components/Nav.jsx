import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/Nav.css'

const Nav = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const location = useLocation();

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
            <Link to="/" className="nav-link" >ACCUEIL</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/realisations" className="nav-link">RÉALISATIONS</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">BLOG</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">ME CONTACTER</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;