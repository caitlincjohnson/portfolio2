import React, { Component } from 'react';

class ExperienceSection extends Component {

  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        workName: "Epic",
        location: "Verona, WI",
        duration: "Jan. 2013 - June 2014",
        responsibilities: "Responsibilities goes here.",
        logoFilePath: "./assets/experience/epic.png"
      },{
        id: 2,
        workName: "ECG Management Consultants",
        location: "Washington D.C.",
        duration: "May 2015 - June 2016",
        responsibilities: "Responsibilities goes here.",
        logoFilePath: "./assets/experience/ecg.jpeg"
      },{
        id: 3,
        workName: "ECG Management Consultants",
        location: "San Diego",
        duration: "June 2016 - June 2018",
        responsibilities: "Responsibilities goes here.",
        logoFilePath: "./assets/experience/ecg.jpeg"
      }
    ]
  }

  render() {

    return (
      <section>
        <h2 className="header">Experience</h2>
        <p>Work experience description.</p>
        <div className="reverse-flex">
          <education-card>
            <img className="education-img" src={this.state[0].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[0].workName}</h3>
              <p>{this.state[0].location}</p>
              <p>{this.state[0].duration}</p>
              <p>{this.state[0].responsibilities}</p>
            </div>
          </education-card>
          <education-card>
            <img className="education-img" src={this.state[1].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[1].workName}</h3>
              <p>{this.state[1].location}</p>
              <p>{this.state[1].duration}</p>
              <p>{this.state[1].responsibilities}</p>
            </div>
          </education-card>
          <education-card>
            <img className="education-img" src={this.state[2].logoFilePath} />
            <div className="education-description">
              <h3>{this.state[2].workName}</h3>
              <p>{this.state[2].location}</p>
              <p>{this.state[2].duration}</p>
              <p>{this.state[2].responsibilities}</p>
            </div>
          </education-card>
        </div>
      </section>
    );
  }
}

export default ExperienceSection;
