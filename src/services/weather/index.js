import mock from "./mock.json"

const url = "http://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=4d629d62144a95e87e81536e69ecf91d&units=metric"

const fetchClima = async () => {
  const data = await fetch(url)
  const clima = await data.json()

  return clima
}

const dataClima = () => {
  return process.env.REACT_APP_MOCK === "true" ? mock : fetchClima()
}

export default dataClima
