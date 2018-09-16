import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class SkillsSection extends Component {

  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        language: 'Python',
        levelOfExperience: 3
      },
      {
        id: 2,
        language: 'Ruby',
        levelOfExperience: 3
      },
      {
        id: 3,
        language: 'JavaScript',
        levelOfExperience: 4
      },
      {
        id: 4,
        language: 'SQL',
        levelOfExperience: 2
      },
      {
        id: 5,
        language: 'HTML',
        levelOfExperience: 3
      },
      {
        id: 6,
        language: 'CSS',
        levelOfExperience: 3
      }
    ],[
      {
        id: 1,
        framework: 'Ruby on Rails',
        levelOfExperience: 3
      },
      {
        id: 2,
        framework: 'ReactJS',
        levelOfExperience: 3
      },
      {
        id: 3,
        framework: 'NumPy',
        levelOfExperience: 3
      },
      {
        id: 4,
        framework: 'SciPy',
        levelOfExperience: 3
      },
      {
        id: 5,
        framework: 'Pandas',
        levelOfExperience: 3
      },
      {
        id: 6,
        framework: 'Orange3',
        levelOfExperience: 3
      }
    ],[
      {
        id: 1,
        technology: 'Jupyter Notebook',
        levelOfExperience: 3
      },
      {
        id: 2,
        technology: 'Atom',
        levelOfExperience: 3
      },
      {
        id: 3,
        technology: 'Github/Git',
        levelOfExperience: 3
      },
      {
        id: 4,
        technology: 'Anaconda',
        levelOfExperience: 3
      },
      {
        id: 5,
        technology: 'Atom',
        levelOfExperience: 3
      },
      {
        id: 6,
        technology: 'Microsoft Visual Studio',
        levelOfExperience: 3
      }
    ]
  }

  render() {
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
            <p>Python</p>
            <ProgressBar bsStyle="info" now={70} label={`70%`}/>
            <p>Ruby</p>
            <ProgressBar bsStyle="info" now={50} label={`50%`}/>
            <p>JavaScript</p>
            <ProgressBar bsStyle="info" now={80} label={`80%`}/>
            <p>SQL</p>
            <ProgressBar bsStyle="info" now={40} label={`40%`}/>
            <p>HTML</p>
            <ProgressBar bsStyle="info" now={70} label={`70%`}/>
            <p>CSS</p>
            <ProgressBar bsStyle="info" now={80} label={`80%`}/>
          </div>
        </div>
        <div className="container" style={{display: "flex", flexDirection: "row"}}>
          <div className="col-md-4 skills-description-box">
            <h3>Libraries and Frameworks</h3>
            <p>This is by no means an exhaustive list, but these libraries and frameworks are the ones that I am most comfortable with. Going through full stack web development bootcamp gave me exposure to React.js and Ruby on Rails; however, I have gained exposure to NumPy, SciPy, and Pandas through my Data Science & Machine Learning courses.</p>
          </div>
          <div className="col-md-8 skills-level-box">
            <p>Ruby on Rails</p>
            <ProgressBar bsStyle="success" now={70} label={`70%`}/>
            <p>React.js</p>
            <ProgressBar bsStyle="success" now={70} label={`70%`}/>
            <p>NumPy / SciPy / Pandas</p>
            <ProgressBar bsStyle="success" now={60} label={`60%`}/>
            <p>Bootstrap</p>
            <ProgressBar bsStyle="success" now={40} label={`40%`}/>
          </div>
        </div>
        <div className="container" style={{display: "flex", flexDirection: "row"}}>
          <div className="col-md-4 skills-description-box">
            <h3>Technologies</h3>
            <p>Going through full stack web development bootcamp and supplemental courses relating to data science and machine learning have given me exposure to multiple tools.</p>
          </div>
          <div className="col-md-8 skills-level-box">
            <p>Jupyter Notebook</p>
            <ProgressBar bsStyle="danger" now={40} label={`40%`}/>
            <p>Atom</p>
            <ProgressBar bsStyle="danger" now={80} label={`80%`}/>
            <p>Anaconda</p>
            <ProgressBar bsStyle="danger" now={40} label={`40%`}/>
            <p>Microsoft Visual Studio</p>
            <ProgressBar bsStyle="danger" now={30} label={`30%`}/>
            <p>Git and Github</p>
            <ProgressBar bsStyle="danger" now={70} label={`70%`}/>
            <p>Terminal</p>
            <ProgressBar bsStyle="danger" now={80} label={`80%`}/>
            <p>Orange3</p>
            <ProgressBar bsStyle="danger" now={30} label={`30%`}/>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
