import React from "react"

import Articles from "../../components/main-section/articles"

import data from "./../../database/data.json"

import "./style.scss"

const Topics = () => (
  <section className="themes-container">
    <Articles data={data} />
  </section>
)

export default Topics
