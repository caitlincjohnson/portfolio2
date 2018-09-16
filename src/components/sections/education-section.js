import React, { Component } from 'react';

class EducationSection extends Component {

  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        schoolName: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        duration: "Aug. 2008 - Dec. 2012",
        description: "Dean's List",
        logoFilePath: "./assets/education/georgiatech.jpg"
      },{
        id: 2,
        schoolName: "University of North Carolina",
        location: "Chapel Hill, NC",
        duration: "Aug. 2014 - May 2016",
        description: "Graduated with Honors",
        logoFilePath: "./assets/education/unc.jpg"
      },{
        id: 3,
        schoolName: "LEARN Academy",
        location: "San Diego, CA",
        duration: "July 2018 - Present",
        description: "Specialized in data visualization",
        logoFilePath: "./assets/education/learn.jpg"
      }
    ]
  }

  render() {

    return (
      <section>
        <h2 className="header">Education</h2>
        <p>I consider myself as a perpetual student, as I am always constantly looking for something new to learn.</p>
        <div className="reverse-flex">
          <education-card>
            <img className="education-img" src={this.state[0].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[0].schoolName}</h3>
              <p>{this.state[0].location}</p>
              <p>{this.state[0].duration}</p>
              <p>{this.state[0].description}</p>
            </div>
          </education-card>
          <education-card>
            <img className="education-img" src={this.state[1].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[1].schoolName}</h3>
              <p>{this.state[1].location}</p>
              <p>{this.state[1].duration}</p>
              <p>{this.state[1].description}</p>
            </div>
          </education-card>
          <education-card>
            <img className="education-img" src={this.state[2].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[2].schoolName}</h3>
              <p>{this.state[2].location}</p>
              <p>{this.state[2].duration}</p>
              <p>{this.state[2].description}</p>
            </div>
          </education-card>
        </div>
      </section>
    );
  }
}

export default EducationSection;
