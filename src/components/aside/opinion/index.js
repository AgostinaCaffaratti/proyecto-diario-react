import React from "react"

import OpinionArticle from "./article"

import "./style.scss"

const Opinion = () => (
  <section className="opinion-container">
    <p className="opinion-container__title">Opinion</p>
    <OpinionArticle />
    <OpinionArticle />
    <OpinionArticle />
    <OpinionArticle />
  </section>
)

export default Opinion
