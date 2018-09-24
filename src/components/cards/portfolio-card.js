import React, { Component } from 'react';

class PortfolioCard extends Component {
  render() {

    let {title, description, techStack, github, imgFilePath, date} = this.props.portfolio
    let techStackString = techStack.join(", ")

    return (
      <div id="portfolio" className="row">
        <div id="portfolio-date" className="col-md-2">
          {date}
        </div>
        <div className="col-md-3">
          <img className="portfolio-img" src={imgFilePath} alt="Personal Website" />
        </div>
        <div className="col-md-7 portfolio-content">
          <h3 id="portfolio-title">{title}</h3>
          <p className="portfolio-text">{description}</p>
          <p className="portfolio-text">Tech Stack: {techStackString}</p>
          <a href={{github}} id="portfolio-btn" className="btn-sm btn">GitHub</a>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
