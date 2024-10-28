import React from "react";
import "../styles/pages/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="header-section">
        <img
          src="https://hch.tv/wp-content/uploads/2024/09/NUEVA-EQUIPACION-BARCELONA-FC2-1.jpg"
          alt="Camp Nou"
          className="header-image"
        />
        <div className="header-content">
          <div className="header-text">
            <h1>Més que un club</h1>
            <p>
              Bienvenidos al hogar de los culés, donde la pasión por el fútbol
              se une con la historia y la tradición.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
