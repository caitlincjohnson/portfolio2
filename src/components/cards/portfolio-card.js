import React, { Component } from 'react';

class PortfolioCard extends Component {
  render() {

    let {id, title, description, techStack, github, imgFilePath, date, liveLink} = this.props.portfolio
    let techStackString = techStack.join(", ")

    return (
      <div id="portfolio" className="row">
        <div className="col-md-2">
          {date}
        </div>
        <div className="col-md-3">
          <img className="portfolio-img" src={imgFilePath} alt="Personal Website" />
        </div>
        <div className="col-md-7 portfolio-content">
          <portfolio-title>{title}</portfolio-title>
          <p className="portfolio-text">{description}</p>
          <p className="portfolio-text">Tech Stack: {techStackString}</p>
          <a href={{github}} className="btn-sm btn">GitHub</a>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
