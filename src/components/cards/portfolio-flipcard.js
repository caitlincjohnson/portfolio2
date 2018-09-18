import React, { Component } from 'react';

class PortfolioFlipCard extends Component {
  render() {

    let {id, title, summary, description, techStack, github, imgFilePath} = this.props.portfolio

    return (
      <div>
        <div className="portfolio-card flip-container" onTouchStart="this.classList.toggle('hover');">
          <div className="flipper">
            <img className="portfolio-img front" src={imgFilePath} alt="Personal Website" />
            <div className="back">
              <portfolio-title>{title}</portfolio-title>
              <p className="portfolio-text">{summary}</p>
              <p className="portfolio-text">Tech Stack: {techStack}</p>
              <a href={{github}} className="btn btn-sm">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioFlipCard;
