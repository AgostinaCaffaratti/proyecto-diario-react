import React from "react"

const Button = ({ type, message}) => {
  return (
    <div>
    <button className="button" type={type}>
      Send
    </button>
    { message && <p className="container__form__button-p">Gracias por tu suscripcion!</p>}
    
    </div>
  )
}

export default Button
