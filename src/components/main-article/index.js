import React, { Component } from "react"

import "./style.scss"

class MainArticle extends Component {
  render() {
    return (
      <article className="main-new">
        <img className="Imagen" src={this.props.main.imagen} alt="img-new" />
        <h2>{this.props.main.title}</h2>
        <p>{this.props.main.Texto}</p>
      </article>
    )
  }
}

export default MainArticle
