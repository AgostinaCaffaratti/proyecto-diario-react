import React from "react"
import MainArticle from "./main-article"
import Articles from "./articles"

import "./style.scss"

const MainSection = () => {
  return (
    <section className="main-section">
      <MainArticle />

      <Articles />
      <Articles />
      <Articles />
      <Articles />
      <Articles />
      <Articles />
      <Articles />
    </section>
  )
}

export default MainSection
