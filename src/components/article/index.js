import React, { Component } from "react"

import "./style.scss"

class Article extends Component {
  render() {
    return (
      <article className="new">
        <img className="Imagen" src={this.props.new.imagen} alt="img-new" />
        <h2>{this.props.new.title}</h2>
        <p>{this.props.new.Texto}</p>
        <button> Ir a la noticia </button>
      </article>
    )
  }
}

export default Article
