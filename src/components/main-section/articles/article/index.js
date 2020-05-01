import React from "react"

const Article = () => (
  <article className="article">
    <img className="article__img" src={process.env.PUBLIC_URL + "/assets/article1.jpg"} alt="1demayo"></img>
    <p className="articles-container__article--content">Un 1° de Mayo distinto, en plena cuarentena</p>
  </article>
)

export default Article
