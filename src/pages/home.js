import React, { Component } from 'react';
import Hero from '../components/hero.js';
import SkillsSection from '../components/skills-section.js';
import ExperienceSection from '../components/experience-section.js';
import EducationSection from '../components/education-section.js';
import PortfolioSection from '../components/portfolio-section.js';
import AboutMeSection from '../components/about-me-section.js';
import BlogSection from '../components/blog-section.js';
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
