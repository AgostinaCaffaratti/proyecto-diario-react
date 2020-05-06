import React from "react"

import "./style.scss"

const Article = () => (
  <article className="article">
    <img className="article__img" src={process.env.PUBLIC_URL + "/assets/article1.jpg"} alt="1demayo"></img>
    <p className="article__content">Un 1° de mayo tras la pandemia, calles vacias</p>
  </article>
)

export default Article
