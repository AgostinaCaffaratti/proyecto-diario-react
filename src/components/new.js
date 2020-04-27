import React, { Component } from 'react'


class New extends Component {
    render() {
        return <div>
            {this.props.new.imagen}
            {this.props.new.title}
            {this.props.new.texto} 
            <button> Ir a la noticia </button>
        </div>
        

    }
}

export default New