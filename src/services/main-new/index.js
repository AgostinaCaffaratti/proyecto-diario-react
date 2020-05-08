import mock from "./mock.json"

const url = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=d7a34d3963f049a69b48d599da2e6f9a&pageSize=24"

const fetchNoticias = async () => {
  const data = await fetch(url)
  const articulos = await data.json()
  console.log(articulos.articles)
  return articulos.articles
}

const dataNews = () => {
  console.log(process.env.REACT_APP_MOCK)
  return process.env.REACT_APP_MOCK === "true" ? mock : fetchNoticias()
}

export default dataNews
