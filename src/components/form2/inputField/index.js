import React from "react"

const Field = ({ field, onChange }) => {
  const { label, ...attributes } = field

  return (
    <React.Fragment>
      <label className="form__label">{label}</label>
      {(() => {
        switch (attributes.type) {
          case "textarea":
            return <textarea className="form__textarea" onChange={onChange} {...attributes} />
          default:
            return <input className="form__input" onChange={onChange} {...attributes} />
        }
      })()}
    </React.Fragment>
  )
}

export default Field
