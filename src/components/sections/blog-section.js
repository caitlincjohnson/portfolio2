import React, { Component } from 'react';
import BlogCard from '../cards/blog-card';
import data from '../data';

class BlogSection extends Component {

  constructor(props){
    super(props)
    this.state = {
      blogs: data.blogs
    }
  }

  render() {

    let blogItems = this.state.blogs.map((blog, index) => {

      return (
          <BlogCard blog={this.state.blogs[index]}/>
      )
    })

    return (
      <section>
        <h2 className="header">Personal Blog</h2>
        <div className="display-items flex-direction" id="reverse">
          {blogItems}
        </div>
      </section>
    );
  }
}

export default BlogSection;
