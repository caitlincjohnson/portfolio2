import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <hero-container>
        <h1>CAITLIN C. JOHNSON</h1>
        <p>Full-Stack Development | Global Health | Innovation</p>
        <display-items>
          <button type="button">Github</button>
          <button type="button">LinkedIn</button>
          <button type="button">Resume</button>
          <button type="button">Twitter</button>
        </display-items>
      </hero-container>
    );
  }
}

export default Hero;
