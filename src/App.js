import React, { Component } from 'react';
import Hero from './components/hero.js';
import PortfolioSection from './components/portfolio-section.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PortfolioSection />
      </div>
    );
  }
}

export default App;
