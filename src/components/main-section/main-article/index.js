import React from "react"

import "./style.scss"

const MainArticle = ({ noticias = [] }) => {
  console.log(noticias)
  return (
    <article className="main-article">
      <img className="main-article__img" name="prop" src={noticias.urlToImage} alt="ccc"></img>
      <p className="main-article__content">{noticias.content}</p>
    </article>
  )
}

export default MainArticle
