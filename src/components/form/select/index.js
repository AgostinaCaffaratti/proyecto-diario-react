import React from "react"
import "./style.scss"

const Select = ({ type, name, label, autoFocus, onChange }) => {
  return (
    <div className="container-select">
      <label className="container-select__label">{label}</label>
      <select type={type} name={name} autoFocus={autoFocus} className="container-select__input" onChange={onChange}>
        <option value="sports">Deportes</option>
        <option defaultValue="politics">business</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">ciencia</option>
        <option value="technology">Tecnologia</option>
      </select>
    </div>
  )
}

export default Select
