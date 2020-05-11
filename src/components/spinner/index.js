import React from "react"

const Spinner = ({ loading }) => {
  return loading ? (
    <div className="spinner">
      <img className="spinner__img" src="https://i.imgur.com/01yMDgZ.gif" alt="spinner" />
    </div>
  ) : null
}

export default Spinner
