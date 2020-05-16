import React, { useContext, useState, useEffect } from "react"
import mock from './../../../services/main-new'
import FormContext from './../../../context/formContext'
import "./style.scss"
import Articles from './article'






const Opinion = () => {
  const {datos} = useContext(FormContext)
  console.log(datos)

  const Section = datos.seccion
  console.log(Section)

const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${Section}&apiKey=d7a34d3963f049a69b48d599da2e6f9a&pageSize=7`

const fetchNoticias = async () => {
  const data = await fetch(url)
  const articulos = await data.json()
  console.log(articulos)

  return articulos.articles
}

const dataNews = () => {
  return process.env.REACT_APP_MOCK === "true" ? mock : fetchNoticias()
}

const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData() {
      setNoticias(await dataNews())
    }
    fetchData()
  }, [])




  
  return(
  <section className="opinion-container">
    <p className="opinion-container__title">noticias para vos!</p>
    <Articles articles={noticias}/>

   
  </section>
)
  }

export default Opinion
