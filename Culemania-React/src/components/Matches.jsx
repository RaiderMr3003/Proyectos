import React, { useEffect, useState } from "react";
import "../styles/components/Matches.css";


const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/matches");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError("Error al obtener los partidos");
      }
    };

    fetchMatches();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="matches-container">
      {matches.map((match, index) => (
        <article key={index} className="match-card">
          <header className="match-header">
            <div className="match-tournament">
              <div
                className="competition-logo"
                dangerouslySetInnerHTML={{ __html: match.competicion.logo }}
              />
            </div>
            <div className="match-date">
              <time className="match-date">
                {match.fecha} <strong>{match.hora}</strong>
              </time>
            </div>
          </header>

          <div className="match-content">
            <div className="column">
              <div className="team team--home">
                <figure className="team-logo">
                  <img
                    src={match.local.logo}
                    alt={`${match.local.equipo} logo`}
                  />
                </figure>
                <h2 className="team-name">{match.local.equipo}</h2>
              </div>
            </div>

            <div className="column">
              <div className="match-details">
                <div className="match-score">
                  <span className="match-score-number match-score-number--leading">
                    VS
                  </span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="team team--away">
                <figure className="team-logo">
                  <img
                    src={match.visitante.logo}
                    alt={`${match.visitante.equipo} logo`}
                  />
                </figure>
                <h2 className="team-name">{match.visitante.equipo}</h2>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Matches;
