import React, { Component } from 'react';

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
        <h4>Programming Languages</h4>
        <h4>Frameworks</h4>
        <h4>Technologies</h4>
      </section>
    );
  }
}

export default SkillsSection;
