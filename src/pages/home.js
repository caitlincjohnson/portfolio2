import React, { Component } from 'react';
import Hero from '../components/hero';
import SkillsSection from '../components/sections/skills-section';
// import ExperienceSection from '../components/sections/experience-section';
// import EducationSection from '../components/sections/education-section';
import PortfolioSection from '../components/sections/portfolio-section';
import AboutMeSection from '../components/sections/about-me-section';
import BlogSection from '../components/sections/blog-section';
import Contact from '../components/contact';

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
