import React from "react"

const Galery = () => (
  <section className="galery-container">
    <img className="galery-container__img" src={process.env.PUBLIC_URL + "/assets/elmundo1.jpg"} alt="TorreEifell"></img>
    <img className="galery-container__img" src={process.env.PUBLIC_URL + "/assets/elmundo2.jpg"} alt="plazadesanpedro"></img>
    <img className="galery-container__img" src={process.env.PUBLIC_URL + "/assets/elmundo3.jpg"} alt="elcoliseo"></img>
    <img className="galery-container__img" src={process.env.PUBLIC_URL + "/assets/mundo4.jpg"} alt="mundoconbarbijo"></img>
  </section>
)

export default Galery
