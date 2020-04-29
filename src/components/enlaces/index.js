import React, { Component } from "react"

import "./style.scss"

class Enlaces extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li className="item">
          <a className="nav-enlace" href="#">
            Las mas Leidas{" "}
          </a>
        </li>
        <li>
          <a className="nav-enlace" href="#">
            Destacadas en imagenes
          </a>
        </li>
        <li>
          <a className="nav-enlace" href="#">
            Cotizacion Dolar Hoy
          </a>
        </li>
        <li>
          <a className="nav-enlace" href="#">
            Las mas Leidas
          </a>
        </li>
        <li>
          <a className="nav-enlace" href="#">
            Opinion
          </a>
        </li>
      </ul>
    )
  }
}

export default Enlaces
