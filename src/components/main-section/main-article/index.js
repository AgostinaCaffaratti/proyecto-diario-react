import React from "react"

import "./style.scss"

const MainArticle = ({ noticias = [] }) => {
  console.log(noticias)
  return noticias.map((article) => (
    <article className="main-article">
      <img className="main-article__img" name="prop" src={article.urlToImage} alt="ccc"></img>
      <p className="main-article__content">{article.content}</p>
    </article>
  ))
}

export default MainArticle
