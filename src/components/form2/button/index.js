import React from "react"
import "./style.scss"

const Button = ({ data, status }) => {
  // console.log(status)
  return (
    <button disabled={status === "success"} className="button" type="submit">
      {data.config.buttonText || "Submit"}
    </button>
  )
}

export default Button
