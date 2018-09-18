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

    for (let i = 0; i < 4; i++) {

    }
    let portfolioItems = this.state.portfolioItems.map((portfolio, index) => {

      return (
        <PortfolioFlipCard portfolio={this.state.portfolioItems[index]}/>
      )
    })

    return (
      <section>
        <h2 className="header">Portfolio</h2>
        <p>Shown below are my most recent projects. Check out my portfolio page for a chronological list of all projects.</p>
        <div className="display-items" style={{display: "flex", flexDirection: "row-reverse"}}>
          {portfolioItems}
        </div>
        <a href="/portfolio" className="btn btn-sm">View All</a>
      </section>
    );
  }
}

export default PortfolioSection;
