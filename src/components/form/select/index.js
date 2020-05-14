import React from "react"
import "./style.scss"

const Select = ({ type, name, label, autoFocus, onChange }) => {
  return (
    <div className="container-select">
      <label className="container-select__label">{label}</label>
      <select type={type} name={name} autoFocus={autoFocus} className="container-select__input" onChange={onChange}>
        <option value="deportes">Deportes</option>
        <option defaultValue="politica">Politica</option>
        <option value="espectaculos">Espectaculos</option>
        <option value="Economia">Economia</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Tecnologia">Tecnologia</option>
      </select>
    </div>
  )
}

export default Select
