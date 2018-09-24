import React, { Component } from 'react';

class AboutMeSection extends Component {
  render() {
    return (
      <section id="aboutmesection">
        <p>Hello, I’m Caitlin, a full-stack developer who is endeavoring to amplify my impact around the world through web development. This site showcases select projects and blog posts to demonstrate my talents and experiences. Contact me if you have questions!</p>
        <div id="about-me-btns">
          <a href="/aboutme" className="btn btn-m">Read My Story</a>
          <a href="https://drive.google.com/file/d/1-RxPaNqWRRxdacqqvUmoG7jsvhVNXiZN/view?usp=sharing" className="btn btn-m">Download Resume (PDF)</a>
        </div>
      </section>
    );
  }
}

export default AboutMeSection;
