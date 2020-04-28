import React, { Component } from 'react'

import './style.scss'
import Navbar from '../navbar'



class Header extends Component {

    render(){
        return <header className = "header">
            <h1>El Diario</h1>
            <Navbar/>
        </header>
    }
}

export default Header;