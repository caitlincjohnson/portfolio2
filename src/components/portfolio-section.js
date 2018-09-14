import React, { Component } from 'react';
import PortfolioCard from './portfolio-card';

class PortfolioSection extends Component {

  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        title: 'Personal Website: Version 1',
        summary: 'The first version of my personal website which consists of both a portfolio section and a blog section.',
        techStack: 'Bootstrap, HTML, CSS, Netlify',
        github: 'https://github.com/caitlincjohnson/Portfolio',
        imgName: 'personal_website.png'
      },
      {
        id: 2,
        title: 'Class Project: Tic Tac Toe',
        summary: 'Our first React.js project in boot camp consisted of a tic-tac-toe game..',
        techStack: 'ReactJS, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/tic-tac-toe-react',
        imgName: 'tic-tac-toe.png'
      },
      {
        id: 3,
        title: 'Class Project: Keto Recipes',
        summary: 'Quick half-day assignment where I was instructed to build a recipes list.',
        techStack: 'React.js, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/keto-app',
        imgName: 'keto-app.png'
      }
    ]
  }

  render() {

    let portfolioItems = this.state.map((portfolio, index) => {

      return (
          <PortfolioCard portfolio={this.state[index]}/>
      )
    })

    return (
      <section>
        <h2 className="header">Full-Stack Development Portfolio</h2>
        <div className="display-items" style={{display: "flex", flexDirection: "row-reverse"}}>
          {portfolioItems}
        </div>
        <a href="#portfolio" className="btn btn-sm">View All</a>
      </section>
    );
  }
}

export default PortfolioSection;
