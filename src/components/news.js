import React, { Component } from 'react'

class News extends Component {
    render (){ 
        return this.props.news.map( e => <p key={e.id}>
      
            {e.imagen} - {e.title} - {e.texto} - {e.id}
            <button> Ir a la noticia </button>
            </p>)
    }

}

export default News