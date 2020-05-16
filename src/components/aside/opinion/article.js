import React from "react"


const Articles = ({ articles = [] }) => {
  return (
    <section className>
      {articles.map((article) => (
        <article key={article.publishedAt} className="article">
          <img className="article__img" src={article.urlToImage} alt="1demayo"></img>
          <p className="article__content">{article.content}</p>
        </article>
      ))}
    </section>
  )
}

export default Articles