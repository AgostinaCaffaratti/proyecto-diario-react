import React, { useState, useEffect } from "react"
import MainArticle from "./main-article"
import Articles from "./articles"

import "./style.scss"

import data from "./../../database/data.json"
import dataNews from "./../../services/main-new"

const MainSection = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData() {
      setNoticias(await dataNews())
    }
    fetchData()
  }, [])

  return (
    <section className="main-section">
      <MainArticle noticias={noticias} />

      <Articles data={data} />
    </section>
  )
}

export default MainSection
