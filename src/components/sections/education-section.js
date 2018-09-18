import React, { Component } from 'react';
import data from '../data';

class EducationSection extends Component {

  constructor(props){
    super(props)
    this.state = {
      educationExperiences: data.educationExperiences
    }
  }

  render() {

    let educationList = this.state.educationExperiences.map((education) => {
      return (
        <education-card>
          <img className="education-img" src={education.logoFilePath} />
          <div className="education-description">
            <h3>{education.schoolName}</h3>
            <p>{education.location}</p>
            <p>{education.duration}</p>
            <p>{education.description}</p>
          </div>
        </education-card>
      )
    })


    return (
      <section>
        <h2 className="header">Education</h2>
        <p>I consider myself as a perpetual student, as I am always constantly looking for something new to learn.</p>
        <div className="reverse-flex">
          {educationList}
        </div>
      </section>
    );
  }
}

export default EducationSection;
