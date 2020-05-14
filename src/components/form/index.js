import React, { useState } from "react"
import "./style.scss"
import Input from "./input"
import Select from "./select"
import Button from "./button"

const RegisForm = () => {
  const [nameEerrors, setNameErrors] = useState(false)
  const [emailErrors, setEmailErrors] = useState(false)

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    seccion: "Politica",
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setNameErrors(false)
    setEmailErrors(false)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const [name, email] = e.target.elements
    const nameValue = name.value
    const emailValue = email.value

    if (nameValue === "") {
      setNameErrors(true)
      return false
    }
    if (emailValue === "") {
      setEmailErrors(true)
      return false
    }

    console.log(datos)
  }

  return (
    <div className="container">
      <h1 className="container__title">Registrate!</h1>
      <form noValidate className="container__form" onSubmit={handleSubmit}>
        <div className="container__form__input">
          <Input type="text" name="name" placeholder="Ingrese su nombre" autofocus onChange={handleChange} error={nameEerrors} message="debe ingresar su nombre" />
        </div>
        <div className="container__form__input">
          <Input type="text" name="email" placeholder="Ingrese su email" autofocus onChange={handleChange} error={emailErrors} message="debe ingresar su email" />
        </div>
        <div className="container__form__select">
          <Select type="select" name="seccion" label="selecciona tu seccion favorita" autofocus onChange={handleChange} />
        </div>
        <Button type="submit" />
      </form>
    </div>
  )
}

export default RegisForm
