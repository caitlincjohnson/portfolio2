import React, { Component } from 'react';

class AboutMeSection extends Component {
  render() {
    return (
      <section>
        <p>Hello, I’m Caitlin, a full-stack developer who is endeavoring to amplify my impact within global health through web development. This site showcases select projects and blog posts to demonstrate my talents and experiences. Contact me if you have questions!</p>
        <display-items>
          <button type="button">Resume</button>
          <button type="button">Github Profile</button>
          <button type="button">LinkedIn</button>
        </display-items>
      </section>
    );
  }
}

export default AboutMeSection;
