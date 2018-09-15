import React, { Component } from 'react';

class AboutMeSection extends Component {
  render() {
    return (
      <section id="aboutmesection">
        <p>Hello, I’m Caitlin, a full-stack developer who is endeavoring to amplify my impact within global health through web development. This site showcases select projects and blog posts to demonstrate my talents and experiences. Contact me if you have questions!</p>
        <display-items>
          <a href="/aboutme" className="btn btn-sm">Read My Story</a>
          <a href="/aboutme" className="btn btn-sm">Download Resume (PDF)</a>
        </display-items>
      </section>
    );
  }
}

export default AboutMeSection;
