import React from "react"

import "./style.scss"

const Articles = ({ data }) => {
  console.log(data)
  return (
    <section className="articles-container">
      {data[1].articles.map((article) => (
        <article className="article">
          <img className="article__img" src={process.env.PUBLIC_URL + "/assets/article1.jpg"} alt="1demayo"></img>
          <p className="article__content">{article.title}</p>
        </article>
      ))}
    </section>
  )
}

export default Articles
