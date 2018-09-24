import React, { Component } from 'react';

class BlogHorizontalCard extends Component {
  render() {

    let {title, date, summary, imgName, imgAlt} = this.props.blog

    return (
      <div id="portfolio" className="row">
        <div className="col-md-3">
          <img className="portfolio-img" src={imgName} alt={{imgAlt}} />
        </div>
        <div className="col-md-7 blog-content">
          <h2>{title}</h2>
          <p>{date}</p>
          <p className="portfolio-text">{summary}</p>
        </div>
      </div>
    );
  }
}

export default BlogHorizontalCard;
