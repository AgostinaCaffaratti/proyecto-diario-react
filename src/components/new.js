import React, { Component } from 'react'

import './New.css'

class New extends Component {
    render() {
        return <div className = 'new'>
           <img className = 'Imagen' src = {this.props.new.imagen} alt='img-new'/>
            <h2>{this.props.new.title}</h2>
            <p>{this.props.new.Texto}</p>
            <button style= {btn}> Ir a la noticia </button>
        </div>
        

    }
}

//Pruebo estilo con objetos - en linea

const btn = {
    fontSize : '18px',
    background: 'ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginBottom: '100px'

}



export default New