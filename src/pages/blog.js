import React, { Component } from 'react';
import BlogHorizontalCard from '../components/cards/blog-horizontalCard';
import data from '../components/data';

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      blogItems: data.blogs
    }
  }

  render() {

    let blogItems = this.state.blogItems.map((blog, index) => {

      return (
          <BlogHorizontalCard blog={this.state.blogItems[index]}/>
      )
    })

    return (
      <div className="pagePadding">
        <h1>Personal Blog</h1>
        <p>Description goes here.</p>
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
          {blogItems}
        </div>
      </div>
    );
  }
}

export default Blog;
