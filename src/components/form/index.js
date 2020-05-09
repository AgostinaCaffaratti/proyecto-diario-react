import React, { useState } from "react"

import "./style.scss"

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log(datos.nombre + datos.email)
  }

  return (
    <div className="form">
      <h1>Formulario de Inscripcion</h1>
      <form className="form__container" onSubmit={enviarDatos}>
        <div>
          <label className="form__container--label">Nombre Completo</label>
          <input placeholder="Ingrese Nombre Completo" className="form__container--input" type="text" name="nombre" onChange={handleInputChange}></input>
        </div>
        <div>
          <label className="form__container--label">Email</label>
          <input placeholder="Ingrese Email" className="form__container--input" type="email" name="email" onChange={handleInputChange}></input>
        </div>
        <div>
          <label className="form__container--label">Telefono</label>
          <input placeholder="Ingrese Telefono" className="form__container--input" type="text" name="telefono" onChange={handleInputChange}></input>
        </div>
        <div>
          <label className="form__container--label">Direccion</label>
          <input placeholder="Ingrese Direccion" className="form__container--input" type="text" name="direccion" onChange={handleInputChange}></input>
        </div>
        <div>
          <button className="form__container--button" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
