import React, { Component } from 'react';
import Hero from './components/hero.js';
import PortfolioSection from './components/portfolio-section.js';
import AboutMeSection from './components/about-me-section.js';
import BlogSection from './components/blog-section.js';
import Contact from './components/contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PortfolioSection />
        <AboutMeSection />
        <BlogSection />
        <Contact />
      </div>
    );
  }
}

export default App;
