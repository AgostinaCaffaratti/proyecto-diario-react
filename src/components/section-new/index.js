import React, { Component } from 'react'

import New from '../articulo'
import './style.scss'

class News extends Component {
    render (){ 
        return <section className = "news-container" >
        {this.props.news.map( e => <New new= {e} key={e.id}/>)}
        </section> }

}

export default News