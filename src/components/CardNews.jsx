import React, { Component } from "react";
import { formatDateTime } from '../utils'

class CardNews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-card">
          <div className="heading">
            <span className="news-title">{ this.props.data.title }</span>
            <span className="news-time">{ formatDateTime(this.props.data.publishedAt) }</span>
          </div>
          <div className="content">
            <div className={ this.props.idx == 0 ? "news-image" : "news-image-hidden" } style={{ backgroundImage: `url(${this.props.data.urlToImage})` }} ></div>
            <div className="news-desc">{ this.props.data.description }</div>
          </div>
      </div>
    );
  }
};

export default CardNews