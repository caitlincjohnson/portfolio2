import React, { Component } from 'react';
import Hero from '../components/hero';
import SkillsSection from '../components/sections/skills-section';
import PortfolioSection from '../components/sections/portfolio-section';
import AboutMeSection from '../components/sections/about-me-section';
import BlogSection from '../components/sections/blog-section';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PortfolioSection />
        <SkillsSection />
        <AboutMeSection />
        <BlogSection />
      </div>
    );
  }
}

export default Home;
