import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./style.scss"

const NavBar = ({ data }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="nav-bar">
      <div className="nav-bar__hamburguer" onClick={() => setNavOpen(!navOpen)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className={navOpen ? "active" : ""}>
        <ul className="nav-bar-list">
          {data.map((link) => (
            <li key={link.title} className="nav-bar-list__item">
              <Link key={link.title} className="nav-bar-list__item--link" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
