import React, { Component } from 'react';
import PortfolioCard from '../components/cards/portfolio-card';
import data from '../components/data';

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      portfolioItems: data.portfolio
    }
  }

  render() {

    let portfolioItems = this.state.portfolioItems.map((portfolio, index) => {

      return (
          <PortfolioCard portfolio={this.state.portfolioItems[index]}/>
      )
    })

    return (
      <div className="portfolioSection">
        <h1>Portfolio</h1>
        <p>Shown below are the portfolio items that were either created during the full stack development bootcamp or during my own personal time. I wanted to showcase all of the items so that you can see the progression of skills obtained throughout the 3-month period for the bootcamp.</p>
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
          {portfolioItems}
        </div>
      </div>
    );
  }
}

export default Portfolio;
