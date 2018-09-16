import React, { Component } from 'react';
import PortfolioCard from '../components/cards/portfolio-card';

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        title: 'Personal Website: Version 1',
        summary: 'The first version of my personal website which consists of both a portfolio section and a blog section.',
        techStack: 'Bootstrap, HTML, CSS, Netlify',
        github: 'https://github.com/caitlincjohnson/Portfolio',
        imgFilePath: '/assets/portfolio/personal_website.png'
      },
      {
        id: 2,
        title: 'Class Project: Tic Tac Toe',
        summary: 'Our first React.js project in boot camp consisted of a tic-tac-toe game..',
        techStack: 'ReactJS, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/tic-tac-toe-react',
        imgFilePath: '/assets/portfolio/tic-tac-toe.png'
      },
      {
        id: 3,
        title: 'Class Project: Keto Recipes',
        summary: 'Quick half-day assignment where I was instructed to build a recipes list.',
        techStack: 'React.js, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/keto-app',
        imgFilePath: '/assets/portfolio/keto-app.png'
      },
      {
        id: 4,
        title: 'NASA Asteroids',
        summary: 'Quick class assignment that involves incorporate NASAs public API into the website with CSS animation.',
        techStack: 'Tech Stack: ReactJS, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/nasa-api',
        imgFilePath: '/assets/portfolio/nasa_api.png'
      },
      {
        id: 5,
        title: 'Bones and Whiskers',
        summary: 'Landing page for a local dog daycare service, which aggregates email addresses.',
        techStack: 'Tech Stack: ReactJS, HTML, CSS, JavaScript',
        github: 'https://github.com/caitlincjohnson/bonesandwhiskers',
        imgFilePath: 'assets/portfolio/bonesandwhiskers.png'
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
