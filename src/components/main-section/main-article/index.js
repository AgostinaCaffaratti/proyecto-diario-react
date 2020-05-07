import React from "react"

import "./style.scss"

const MainArticle = ({ data }) => {
  console.log(data)
  return data[0].main.map((article) => (
    <article className="main-article">
      <img className="main-article__img" name="prop" src={process.env.PUBLIC_URL + "/assets/main-new.jpg"} alt="ccc"></img>
      <p className="main-article__content">{article.title}</p>
    </article>
  ))
}

export default MainArticle
