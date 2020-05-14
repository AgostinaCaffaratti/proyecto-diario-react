import React from "react"

const Input = ({ type, name, placeholder, autoFocus, onChange, error, message }) => {
  return (
    <div>
      <input className="container__form__input--input" type={type} name={name} placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} />
      {error && <p className="container__form__input--p">{message}</p>}
    </div>
  )
}

export default Input
