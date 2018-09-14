import React, { Component } from 'react';
import BlogCard from './blog-card';

class BlogSection extends Component {

  constructor(props){
    super(props)
    this.state = [
      {
        id: 1,
        title: 'The Transition',
        date: 'June 22, 2018',
        summary: 'If someone told me five years ago that I would be starting my own blog, I would have probably laughed and shrugged it off as a joke. Not that I’m opposed to blogging or similar communications of sorts, but I’m a person of few words. Very few words. My friends and family can attest to […]',
        imgName: 'assets/blogs/post1/transition.jpg',
        imgAtl: 'Career Change'
      },
      {
        id: 2,
        title: 'Bigger. Bolder. Global.',
        date: 'July 8, 2018',
        summary: '“Entrepreneurship is the window to change the world.” Rob Ryan During my first week of “funemployment”, I decided to get a head start on developing my network by attending a handful of sessions at San Diego Startup Week that took place at the end of June. While there were many valuable takeaways from all of […]',
        imgName: 'assets/blogs/post2/startup_week.jpg',
        imgAtl: 'Startup San Diego Week Badge'
      },
      {
        id: 3,
        title: 'Build Bridges, Not Walls',
        date: 'July 18, 2018',
        summary: 'And while people far away from the border argue about how to close it off, residents of San Diego and Tijuana are plotting to build bridges across it – by sharing airports, cultural offerings, businesses and even sporting events – so that they can accomplish even more together. Vanishing Frontiers by Andrew Selee As a continuation […]',
        imgName: 'assets/blogs/post3/border.jpg',
        imgAtl: 'San Diego-Tijuana Border'
      }
    ]
  }

  render() {

    let blogItems = this.state.map((blog, index) => {

      return (
          <BlogCard blog={this.state[index]}/>
      )
    })

    return (
      <section>
        <h2 className="header">Personal Blog</h2>
        <div className="display-items" style={{display: "flex", flexDirection: "row-reverse"}}>
          {blogItems}
        </div>
        <a href="#blog" className="btn btn-sm">View All</a>
      </section>
    );
  }
}

export default BlogSection;
