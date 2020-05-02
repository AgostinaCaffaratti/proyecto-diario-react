import React from "react"

import "./style.scss"
import Header from "./components/header"
import Aside from "./components/aside"
import MainSection from "./components/main-section"
import Galery from "./components/galery"
import Topics from "./components/topics"
import Footer from "./components/footer"

const App = () => (
  <body className="grid-container">
    <Header />
    <MainSection />
    <Aside />
    <Galery />
    <Topics />
    <Footer />
  </body>
)

export default App
