import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <hero-container>
        <h1>CAITLIN C. JOHNSON</h1>
        <p>Full-Stack Development | Global Health | Innovation</p>
        <display-items>
          <a href="https://www.facebook.com/caitlin.johnson" className="btn btn-sm">Facebook</a>
          <a href="https://twitter.com/caitlincjohnson" className="btn btn-sm">Twitter</a>
          <a href="https://github.com/caitlincjohnson" className="btn btn-sm">Github</a>
          <a href="https://www.linkedin.com/in/caitlinchristinejohnson/" className="btn btn-sm">LinkedIn</a>
        </display-items>
        <arrow-down class="bounce">
          <img width="40" height="40" src="assets/homepage/icon-arrow_dropdown.svg" alt="Down Arrow" />
        </arrow-down>
      </hero-container>
    );
  }
}

export default Hero;
