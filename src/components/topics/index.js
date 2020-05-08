import React from "react"

import data from "./../../database/data.json"

import "./style.scss"
import Articles from "../main-section/articles"

const Topics = () => {
  return (
    <section className="themes-container">
      <Articles data={data} />
    </section>
  )
}

export default Topics
