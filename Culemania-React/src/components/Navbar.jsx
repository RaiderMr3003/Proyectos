import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import FC_Barcelona from "../assets/img/FC_Barcelona.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <img
          src={FC_Barcelona}
          alt="FC Barcelona Logo"
          className="navbar-logo"
        />
        <Link to="/" className="navbar-title-link" onClick={toggleMenu}>
          CULÉMANIA
        </Link>
      </h1>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">☰</span>
      </button>
      <ul className={`navbar-links ${isOpen ? "navbar-links-active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>INICIO</Link>
        </li>
        <li>
          <Link to="/noticias" onClick={toggleMenu}>NOTICIAS</Link>
        </li>
        <li>
          <Link to="/plantilla" onClick={toggleMenu}>PLANTILLA</Link>
        </li>
        <li>
          <Link to="/historia" onClick={toggleMenu}>HISTORIA</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
