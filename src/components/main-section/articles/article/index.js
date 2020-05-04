import React from "react"

import "./style.scss"

const Article = () => (
  <article className="article">
    <img className="article__img" src={process.env.PUBLIC_URL + "/assets/article1.jpg"} alt="1demayo"></img>
    <p className="article__content">Un 1° de Mayo distinto, en plena cuarentena</p>
  </article>
)

export default Article
