import React, { Component } from 'react'

import './style.scss'
import Navbar from '../navbar'
import Title from './title'



class Header extends Component {

    render(){
        return <header className = "header">
            <Title/>
            <Navbar/>
        </header>
    }
}

export default Header;