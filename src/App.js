import React from "react"

import "./App.scss"
import Header from "./components/header"
import Aside from "./components/aside"
import MainSection from "./components/main-section"
import Galery from "./components/galery"
import Topics from "./components/topics"
import Footer from "./components/footer"

const App = () => (
  <body>
    <Header />
    <Aside />
    <MainSection />
    <Galery />
    <Topics />
    <Footer />
  </body>
)

export default App
