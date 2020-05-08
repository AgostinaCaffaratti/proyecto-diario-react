import React from "react"

import "./style.scss"

const Articles = ({ articles = [] }) => {
  console.log(articles)
  return (
    <section className="articles-container">
      {articles.map((article) => (
        <article className="article">
          <img className="article__img" src={article.urlToImage} alt="1demayo"></img>
          <p className="article__content">{article.content}</p>
        </article>
      ))}
    </section>
  )
}

export default Articles
