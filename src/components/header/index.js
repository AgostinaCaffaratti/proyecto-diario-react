import React from "react"

import Brand from "./brand"
import NavBar from "./nav-bar"

import data from "./../../database/navbar.json"

import "./style.scss"

const Header = () => (
  <header className="header-container">
    <NavBar data={data} />
    <Brand />
  </header>
)

export default Header
