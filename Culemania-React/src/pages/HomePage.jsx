import React from "react";
import "../styles/pages/HomePage.css";
import Matches from "../components/Matches";

function HomePage() {
  return (
    <main className="home-page">
      <header className="header-section">
        <img
          src="https://hch.tv/wp-content/uploads/2024/09/NUEVA-EQUIPACION-BARCELONA-FC2-1.jpg"
          alt="Camp Nou"
          className="header-image"
        />
        <div className="header-content">
          <div className="header-text">
            <h1>Més que un club</h1>
            <p>
              Bienvenidos al hogar de los culés, donde la pasión por el fútbol se une con la historia y la tradición.
            </p>
          </div>
        </div>
      </header>
      <section className="matches-section">
        <h2>Calendario</h2>
        <Matches />
      </section>
    </main>
  );
}

export default HomePage;
