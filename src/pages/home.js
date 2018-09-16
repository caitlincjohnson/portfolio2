import React, { Component } from 'react';
import Hero from '../components/hero.js';
import SkillsSection from '../components/sections/skills-section.js';
import ExperienceSection from '../components/sections/experience-section.js';
import EducationSection from '../components/sections/education-section.js';
import PortfolioSection from '../components/sections/portfolio-section.js';
import AboutMeSection from '../components/sections/about-me-section.js';
import BlogSection from '../components/sections/blog-section.js';
import Contact from '../components/contact.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <SkillsSection />
        <AboutMeSection />
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <BlogSection />
      </div>
    );
  }
}

export default Home;
