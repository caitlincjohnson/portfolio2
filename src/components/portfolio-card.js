import React, { Component } from 'react';

class PortfolioCard extends Component {
  render() {

    let {id, title, summary, description, techStack, github, imgName} = this.props.portfolio

    let imgFilePath = "assets/portfolio_section/" + imgName

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

export default PortfolioCard;
