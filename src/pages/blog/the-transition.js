import React, { Component } from 'react';

class TheTransitionBlogPost extends Component {
  render() {
    return (
      <div className="blog">
        <h1>The Transition</h1>
        <p style={{padding: "0"}}>June 22, 2018</p>
        <blog>
          <img className="img-post" src="/assets/blogs/post1/transition.jpg" alt="Transition" style={{float: "left"}} />
          <p>If someone told me five years ago that I would be starting my own blog, I would have probably laughed and shrugged it off as a joke. Not that I’m opposed to blogging or similar communications of sorts, but I’m a person of few words.</p>
          <p>Very few words.</p>
          <p>My friends and family can attest to this. This is why I’m drawn to social media apps that focus more on pictures (Instagram) or involve few words (Twitter). But blogs? I wouldn’t even know how to become a successful blogger with so few words,
          but maybe I can create my own style of blogging by communicating my experiences with more pictures and less words.</p>
          <p>So here I am, writing my first blog. And why am I here? Good question. For full transparency, I’m here because I’m making a career change to full stack development, and I want to leverage my experiences during the transition and onward and share them with the world, hoping to inspire others to pursue their passions as well.</p>
          <p>And why am I just now learning about full stack development? That’s another good question. I recently left my job as a senior consultant for a well-known healthcare management firm to take a full stack developer boot camp at LEARN Academy here
          in San Diego, and I plan to use this skillset to pursue my passion of developing innovative solutions and amplify my impact throughout the world. Going from consulting to programming may seem like a huge jump, but in reality I’ve been programming here and there over the past ten years, so the concepts aren’t foreign to me.</p>
          <p>Which leads to why I’m here. I’m hoping to use this medium to showcase my portfolio for full stack development and to interact with other innovators, developers, and individuals that are also passionate about changing the world. But I also hope
          to use this to share my experiences along the way.</p>
        </blog>
      </div>
    );
  }
}

export default TheTransitionBlogPost;
