import React from "react"

import "./style.scss"

const Weather = ({ clima = {} }) => {
  return (
    <section className="weather-container">
      <h2 className="weather-container__city">{clima.name}</h2>
      <p className="weather-container__temp">{clima.main ? clima.main.temp : ""}°</p>
      <p className="weather-container__temp">{clima.weather ? clima.weather[0].description : ""}</p>
      <p className="weather-container__temp">min {clima.main ? clima.main.temp_min : ""}°</p>
      <p className="weather-container__temp">max {clima.main ? clima.main.temp_max : ""}°</p>
    </section>
  )
}

export default Weather
