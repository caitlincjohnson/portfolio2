import React, { Component } from 'react';

class PortfolioCard extends Component {
  render() {

    {id, title, summary, description, github} = this.props.portfolioItems

    return (
      <portfolio-card>
        <portfolio-title>{title}</portfolio-title>
        <p>{summary}</p>
        <p>Tech Stack: {techStack}</p>
        <a href={{github}} class="btn btn-sm">GitHub</a>
      </portfolio-card>
    );
  }
}

export default PortfolioCard;
