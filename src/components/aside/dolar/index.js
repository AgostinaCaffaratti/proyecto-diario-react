import React from "react"

const Dolar = () => (
  <section className="dolar-container">
    <h2 className="dolar-container__title">Dolar Bolsa</h2>
    <div className="dolar-container__sell-box">
      <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
      <p className="dolar-container__value">Vender: $112.42</p>
    </div>
    <div className="dolar-container__buy-box">
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
      <p className="dolar-container__value">Comprar: $112.42</p>
    </div>
  </section>
)

export default Dolar
