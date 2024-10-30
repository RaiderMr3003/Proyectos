import React from "react";
import "../styles/components/Matches.css";

function Matches() {
  return (
    <section className="matches-container">
      <article className="match-card">
        <header className="match-header">
          <div className="match-tournament">
            <img
              src="https://assets.laliga.com/assets/logos/LL_RGB_h_color/LL_RGB_h_color.png"
              alt="Tournament Logo"
            />
            <span>La Liga</span>
          </div>
          <div className="match-date">
            <time className="match-date" dateTime="2023-08-12T19:00">
              26 Oct <strong>21:00</strong>
            </time>
          </div>
        </header>

        <div className="match-content">
          <div className="column">
            <div className="team team--home">
              <figure className="team-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/640px-Real_Madrid_CF.svg.png"
                  alt="Chelsea Logo"
                />
              </figure>
              <h2 className="team-name">Real Madrid</h2>
            </div>
          </div>

          <div className="column">
            <div className="match-details">
              <div className="match-score">
                <span className="match-score-number match-score-number--leading">
                  0
                </span>
                <span className="match-score-divider">:</span>
                <span className="match-score-number">4</span>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="team team--away">
              <figure className="team-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png"
                  alt="West Ham Logo"
                />
              </figure>
              <h2 className="team-name">FC BARCELONA</h2>
            </div>
          </div>
        </div>
      </article>
      
    </section>
  );
}

export default Matches;
