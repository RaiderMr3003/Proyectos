import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../styles/components/Matches.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Matches = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      { breakpoint: 1800, settings: { slidesToShow: 3, slidesToScroll: 3,} },
      { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 725, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/matches");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError("Error al obtener los partidos");
      }
    };

    fetchMatches();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <Slider {...settings}>
      {matches.map((match, index) => (
        <div key={index} className="match-card">
          <div className="competition-header-container">
            <div
              className="competition-logo"
              dangerouslySetInnerHTML={{ __html: match.competicion.logo }}
            />
            <div className="competition-header">{match.jornada}</div>
          </div>
          <div className="match-info">
            <div className="teams">
              <div className="team">
                <img
                  src={match.local.logo}
                  alt={`${match.local.equipo} logo`}
                />
                <span>{match.local.equipo}</span>
              </div>
              <span className="versus">VS</span>
              <div className="team">
                <img
                  src={match.visitante.logo}
                  alt={`${match.visitante.equipo} logo`}
                />
                <span>{match.visitante.equipo}</span>
              </div>
            </div>
            <div className="match-time">
              <span>{match.hora}</span><span>{match.fecha}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Matches;
