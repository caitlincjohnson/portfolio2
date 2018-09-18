import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <hero-container>
        <h1>CAITLIN C. JOHNSON</h1>
        <p>Full-Stack Development | Global Health | Innovation</p>
        <display-items>
          <a href="https://www.facebook.com/caitlin.johnson"><button className="heroButton" id="facebook"/></a>
          <a href="https://www.instagram.com/caitlincjohnson/?hl=en"><button className="heroButton" id="instagram"/></a>
          <a href="https://twitter.com/caitlincjohnson"><button className="heroButton" id="twitter"/></a>
          <a href="https://github.com/caitlincjohnson"><button className="heroButton" id="github"/></a>
          <a href="https://www.linkedin.com/in/caitlinchristinejohnson/"><button className="heroButton" id="linkedin"/></a>
        </display-items>
        <arrow-down class="bounce">
          <img width="40" height="40" src="assets/homepage/icon-arrow_dropdown.svg" alt="Down Arrow" />
        </arrow-down>
      </hero-container>
    );
  }
}

export default Hero;
