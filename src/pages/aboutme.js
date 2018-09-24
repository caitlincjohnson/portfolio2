import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="pagePadding">
      <h1>About Me</h1>
        <aboutme>
          <img className="img-post" src="assets/about_me/aboutMePortrait.jpg" alt="Caitlin C Johnson" style={{float: "left"}} />
          <p className="lead"><em>"You owe it to yourself to try so you don’t try so you don’t have any regrets later in life."</em></p>
          <p>Upon reading the above quote in Your One Word by Evan Carmichael, I had a life-altering self realization that eventually resulted in me leaving a well-paying, stable job at a healthcare management consulting firm to take a leap of faith and get into software programming. I distinctly remember that moment – I was on an Avianca flight somewhere over Mexico’s Sierra Madre del Sur mountain range on my way back from Bolivia. But before I get into the “why”, I’ll give you some background about myself.</p>
          <p>My name is Caitlin Johnson. I was born in New Mexico, raised outside of Atlanta in the suburbs, and spent the majority of my twenties in different parts of the United States until I found my forever home in the San Diego-Tijuana metropolitan area. And as I moved around the country, I also wore many different hats: biomedical engineer, customer service representative, technical analyst, and healthcare management senior consultant. And somewhere along the way, I discovered that I’m truly passionate about making a positive impact on the world through the creation of innovative solutions. I knew that my current job situation didn’t allow me to pursue my passions; however, at that moment, I didn’t fully understand that I had the power to make decisions that would allow me to do so.</p>
          <img className="img-post" src="assets/about_me/aboutMeBrewery.jpg" alt="Sin Fronteras Brewery" style={{float:"right"}} />
          <p>Upon realizing this, I decided to embark on my career transition into full stack web development, starting with a four-month long bootcamp program in San Diego. To you as the reader, there may seem to be a disconnection between full stack development and my background as a healthcare management consultant, but throughout my career I’ve always done a little bit of programming on the side, whether it was to create a complicated Microsoft Excel macro in VBA or to develop simple iPhone iOS applications in Swift. Programming, to me, gives me the perfect balance of utilizing the logical side of the brain and the creative side of the brain, and I decided it was time to take this on as a full-time gig.</p>
          <p>Which leads to why I’m here. I’m hoping to use this medium to showcase my portfolio for full stack development and to interact with other innovators, developers, and individuals that are also passionate about changing the world. But I also hope to use this to share my experiences along the way.</p>
        </aboutme>
      </div>
    );
  }
}

export default AboutMe;
