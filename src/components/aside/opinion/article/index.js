import React from "react"

const OpinionArticle = () => (
  <article className="opinion-container__article">
    <img className="opinion-container__author" src={process.env.PUBLIC_URL + "assets/user.png"} alt="author"></img>
    <p className="opinion-container__name">Mariano Bergero</p>
    <p className="opinion-container__content">Schiaretti reconfigura su “nueva normalidad”</p>
  </article>
)

export default OpinionArticle
