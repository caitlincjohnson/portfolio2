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
      <page>
        <h1>Portfolio</h1>
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
          {portfolioItems}
        </div>
      </page>
    );
  }
}

export default Portfolio;
