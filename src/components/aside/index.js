import React from "react"

import Weather from "./wheather"
import Dolar from "./dolar"
import Opinion from "./opinion"

import "./style.scss"

const Aside = () => (
  <aside className="aside-container">
    <Weather />
    <Dolar />
    <Opinion />
  </aside>
)

export default Aside
