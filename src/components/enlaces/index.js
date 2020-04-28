import React, { Component } from 'react'

import './style.scss'

class Enlaces extends Component {
    render(){
        return <ul className = "nav-list">
        <li className="item"> 
            <a href= "#">Las mas Leidas </a>
        </li>
        <li> 
            <a href= "#">Destacadas en imagenes</a>
        </li>
        <li> 
            <a href= "#">Cotizacion Dolar Hoy</a>
        </li>
        <li> 
            <a href= "#">Las mas Leidas</a>
        </li>
        <li>  
            <a href= "#">Opinion</a>
        </li>
    </ul>
    }
}

export default Enlaces