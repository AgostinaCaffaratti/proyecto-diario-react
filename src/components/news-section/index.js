import React, { Component } from "react"

import Article from "../article"
import "./style.scss"
import MainArticle from "../main-article"

class SectionNews extends Component {
  render() {
    return (
      <section className="news-container">
        <div className="main-section-container">
          <MainArticle main={this.props.news[0]} />
        </div>
        <div className="secondary-new">
          {this.props.news.map((e) => (
            <Article new={e} key={e.id} />
          ))}
        </div>
      </section>
    )
  }
}

export default SectionNews
