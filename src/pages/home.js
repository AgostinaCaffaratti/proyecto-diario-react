import React from "react"

import Aside from "./../components/aside"
import MainSection from "./../components/main-section"

import Galery from "./../components/galery"
import Topics from "./../components/topics"
import Layout from "./../components/layout"

const Home = () => {
  return (
    <Layout className="grid-container">
      <MainSection />
      <Aside />
      <Galery />
      <Topics />
    </Layout>
  )
}

export default Home
