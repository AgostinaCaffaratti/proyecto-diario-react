import React, { useState, useEffect } from "react"
import "./style.scss"

import Field from "./inputField"
import Spinner from "./../spinner/"
import Message from "./msj"
import Button from "./button"

const Form = ({ form, onSubmit, status }) => {
  const [fields, setFields] = useState(
    form.fields.map((field) => ({
      ...field,
      name: field.name || field.label,
      value: "",
    }))
  )

  const [config] = useState(form)
  const { messages, spinner } = form.config

  useEffect(() => {
    if (status === "success") {
      setFields(fields.map((field) => ({ ...field, value: "" })))
    }
  }, [status, fields])

  const handleChange = (e) => {
    const name = e.target.getAttribute("name")
    const newFields = fields.map((field) => {
      return field.name === name ? { ...field, value: e.target.value } : field
    })
    setFields(newFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value }
    }, {})

    onSubmit(formData)
  }

  return (
    <div className="form-container">
      <h1 className="form-container__title">Formulario de Inscripcion</h1>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Field key={field.name} field={field} onChange={handleChange} />
        ))}

        <div className="form-bottom">
          <Button status={status} data={config} />
          <Spinner loading={status === "loading" && spinner} />
        </div>
        <Message status={status} text={messages[status]} />
      </form>
    </div>
  )
}

export default Form
