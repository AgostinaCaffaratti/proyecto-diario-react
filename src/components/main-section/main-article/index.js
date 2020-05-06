import React from "react"

import "./style.scss"

const MainArticle = () => (
  <article className="main-article">
    <img className="main-article__img" name="prop" src={process.env.PUBLIC_URL + "/assets/main-new.jpg"} alt="ccc"></img>
    <p className="main-article__content">Coronavirus en Córdoba: en qué caso una localidad pasará a "zona blanca"</p>
  </article>
)

export default MainArticle
