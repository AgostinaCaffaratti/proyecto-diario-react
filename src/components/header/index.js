import React from "react"

import Brand from "./brand"
import NavBar from "./nav-bar"

import "./style.scss"

const Header = () => (
  <header className="header-container">
    <div className="header-container--i-visible">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <NavBar />
    <Brand />
  </header>
)

export default Header
