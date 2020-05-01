import React from "react"

const Brand = () => (
  <div className="header-container__brand">
    <h1 className="header-container__brand--title">NotiWeb</h1>
    <img className="header-container__brand--logo" src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
  </div>
)

export default Brand
