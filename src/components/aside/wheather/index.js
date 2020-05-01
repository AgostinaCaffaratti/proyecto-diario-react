import React from "react"

import "./style.scss"

const Weather = () => (
  <section className="weather-container">
    <h2 className="weather-container__city">Cordoba</h2>
    <p className="weather-container__temp">23°</p>
    <div className="weather-container__icon">
      <i className="fa fa-sun-o" aria-hidden="true"></i>
    </div>
  </section>
)

export default Weather
