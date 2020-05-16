import React from "react"

import Aside from "./../components/aside"
import MainSection from "./../components/main-section"

import Galery from "./../components/galery"

import Layout from "./../components/layout"



const Home = () => {
 
  return (
    <Layout className="grid-container">
      <MainSection />
      <Aside />
      <Galery />
    </Layout>
  )
}

export default Home
