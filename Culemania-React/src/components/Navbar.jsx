import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import FC_Barcelona from "../assets/img/FC_Barcelona.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <img
          src={FC_Barcelona}
          alt="FC Barcelona Logo"
          className="navbar-logo"
        />
        CULÉMANIA
      </h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/noticias">NOTICIAS</Link>
        </li>
        <li>
          <Link to="/plantilla">PLANTILLA</Link>
        </li>
        <li>
          <Link to="/historia">HISTORIA</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
