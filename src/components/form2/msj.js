import React from "react"

const Message = ({ status, text }) => {
  return status && status !== "loading" ? <div className={`message ${status}`}>{text}</div> : null
}

export default Message
