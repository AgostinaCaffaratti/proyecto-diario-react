import React from "react"

import Header from "./../header"
import Footer from "./../footer"

import "./style.scss"

const Layout = (props) => (
  <div className="grid-container">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
