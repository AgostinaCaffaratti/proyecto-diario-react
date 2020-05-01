import React from "react"

const MainArticle = () => (
  <article className="main-article">
    <img className="main-article__img" src={process.env.PUBLIC_URL + "/assets/main-new.jpg"} alt="description"></img>
    <p className="main-section__main-article--content">Hospital Italiano: las precisiones sobre el brote interno de Covid-19 y su impacto</p>
  </article>
)

export default MainArticle
