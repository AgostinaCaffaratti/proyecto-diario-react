import React, { useState, useEffect } from "react"
import Weather from "./wheather"
import Dolar from "./dolar"
import Opinion from "./opinion"

import dataClima from "./../../services/weather"


import "./style.scss"

const Aside = () => {
  const [clima, setClima] = useState([])

  useEffect(() => {
    async function fetchClima() {
      setClima(await dataClima())
    }
    fetchClima()
  }, [])


  return (
    <aside className="aside-container">
      <Weather clima={clima} />
      <Dolar />
      <Opinion  />
    </aside>
  )
}
export default Aside
