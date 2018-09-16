import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import data from '../data';

class SkillsSection extends Component {

  constructor(props){
    super(props)
    this.state = {
      languages: data.languages,
      frameworks: data.frameworks,
      technologies: data.technologies
  }
}

  render() {
    let { languages, frameworks, technologies } = this.state

    let languageBars = this.state.languages.map((language) => {
      return (
        <div>
          <p>{language.name}</p>
          <ProgressBar bsStyle="info" now={language.levelOfExperience} label={`${language.levelOfExperience}%`}/>
        </div>
      )
    })

    let frameworkBars = this.state.frameworks.map((framework) => {
      return (
        <div>
          <p>{framework.name}</p>
          <ProgressBar bsStyle="success" now={framework.levelOfExperience} label={`${framework.levelOfExperience}%`}/>
        </div>
      )
    })

    let technologyBars = this.state.technologies.map((technology) => {
      return (
        <div>
          <p>{technology.name}</p>
          <ProgressBar bsStyle="danger" now={technology.levelOfExperience} label={`${technology.levelOfExperience}%`}/>
        </div>
      )
    })

    return (
      <section>
        <h2 className="header">Skills</h2>
        <p id="skills-section-intro">My relative familiarity with each language, framework/library, and technology, expressed as a percentage (100% representing mastery, 0% total ignorance)</p>
        <div className="container" style={{display: "flex", flexDirection: "row"}}>
          <div className="col-md-4 skills-description-box">
            <h3>Programming Languages</h3>
            <p>While I am more skilled on the front end, I align more closely with back end languages, specifically with Python due to my extended experience with the language and ongoing education relating to data visualization and machine learning. My SQL experience has been primarily focused on Postgres and MongoDB.</p>
          </div>
          <div className="col-md-8 skills-level-box">
            {languageBars}
          </div>
        </div>
        <div className="container" style={{display: "flex", flexDirection: "row"}}>
          <div className="col-md-4 skills-description-box">
            <h3>Libraries and Frameworks</h3>
            <p>This is by no means an exhaustive list, but these libraries and frameworks are the ones that I am most comfortable with. Going through full stack web development bootcamp gave me exposure to React.js and Ruby on Rails; however, I have gained exposure to NumPy, SciPy, and Pandas through my Data Science & Machine Learning courses.</p>
          </div>
          <div className="col-md-8 skills-level-box">
            {frameworkBars}
          </div>
        </div>
        <div className="container" style={{display: "flex", flexDirection: "row"}}>
          <div className="col-md-4 skills-description-box">
            <h3>Technologies</h3>
            <p>Going through full stack web development bootcamp and supplemental courses relating to data science and machine learning have given me exposure to multiple tools.</p>
          </div>
          <div className="col-md-8 skills-level-box">
            {technologyBars}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
