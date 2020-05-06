import React, { useState } from "react"

import "./style.scss"

const NavBar = ({ data }) => {
  console.log(data)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="nav-bar">
      <div className="nav-bar__hamburguer" onClick={() => setNavOpen(!navOpen)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className={navOpen ? "active" : ""}>
        <ul className="nav-bar-list">
          {data.map((link) => (
            <li className="nav-bar-list__item">
              <a className="nav-bar-list__item--link" href={link.path}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
