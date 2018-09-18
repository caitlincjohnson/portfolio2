import React, { Component } from 'react';
import PortfolioFlipCard from '../cards/portfolio-flipcard';
import data from '../data';

class PortfolioSection extends Component {

  constructor(props){
    super(props)
    this.state ={
      portfolioItems: data.portfolio
    }
  }

  render() {

    let portfolioItems = this.state.portfolioItems.map((portfolio, index) => {
      if (index > this.state.portfolioItems.length-5) {
        return (
          <PortfolioFlipCard portfolio={this.state.portfolioItems[index]}/>
        )
      }
    })

    return (
      <section>
        <h2 className="header">Portfolio</h2>
        <p id="skills-section-intro">Shown below are my most recent projects. Check out my portfolio page for a chronological list of all projects.</p>
        <div className="display-items" style={{display: "flex", flexDirection: "row-reverse"}}>
          {portfolioItems}
        </div>
        <a href="/portfolio" className="btn btn-med">View All</a>
      </section>
    );
  }
}

export default PortfolioSection;
