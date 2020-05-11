import React, { useState } from "react"

import Layout from "./../components/layout"
import Form from "./../components/form2"
import Config from "./../components/form2/config"

const Suscription = () => {
  const [status, setStatus] = useState("")

  const handleSubmit = (form) => {
    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
    }, 3000)
  }

  return (
    <Layout>
      <Form form={Config} onSubmit={handleSubmit} status={status} />
    </Layout>
  )
}

export default Suscription
