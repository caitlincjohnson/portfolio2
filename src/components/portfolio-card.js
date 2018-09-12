import React, { Component } from 'react';

class PortfolioCard extends Component {
  render() {

    let {id, title, summary, description, techStack, github} = this.props.portfolio

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
