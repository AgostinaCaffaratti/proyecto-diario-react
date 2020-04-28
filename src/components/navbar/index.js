import React, { Component } from 'react'
import Enlaces from '../enlaces'

import './style.scss'

class Navbar extends Component {
    render(){
        return <nav className = "main-nav-bar">
        <Enlaces/>
        
    </nav>
    }
}

export default Navbar