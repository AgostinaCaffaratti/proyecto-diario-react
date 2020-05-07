import React from "react"
import MainArticle from "./main-article"
import Articles from "./articles"

import "./style.scss"

import data from "./../../database/data.json"

const MainSection = () => {
  return (
    <section className="main-section">
      <MainArticle data={data} />

      <Articles data={data} />
    </section>
  )
}

export default MainSection
