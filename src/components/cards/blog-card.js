import React, { Component } from 'react';

class BlogCard extends Component {
  render() {

    let {id, title, date, summary, imgName, imgAlt} = this.props.blog

    return (
      <div className="blog-card">
        <img className="blog-img" src={imgName} alt={imgAlt} />
        <div className="middle">
          <a data-toggle="modal" data-target="#blogPost1" class="btn btn-sm">Read</a>
        </div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-date">{date}</p>
        <p className="blog-snippet">{summary}</p>
      </div>
    );
  }
}

export default BlogCard;
