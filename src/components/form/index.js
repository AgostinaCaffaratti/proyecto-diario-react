import React from "react"
import "./style.scss"
import Input from "./input"
import Select from "./select"
import Button from "./button"

import useForm from './../../hooks/useForm'

const RegisForm = () => {
  const {datos, nameEerrors, emailErrors, handleChange, handleSubmit, message} = useForm()

  console.log({datos})
 
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
        <Button type="submit"  message={message} />
      </form>
    </div>
  )
}

export default RegisForm
