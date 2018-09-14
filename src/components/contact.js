import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="contactme">
        <h2>Contact Me</h2>
        <img id="contactme-img" src="assets/homepage/portrait.jpg" alt="Caitlin C Johnson" />
        <p id="contactme-heading">Caitlin C. Johnson</p>
        <p>San Diego, California, USA</p>
        <a href="mailto:caitlin.ch.johnson@gmail.com">caitlin.ch.johnson@gmail.com</a>
      </section>
    );
  }
}

export default Contact;
