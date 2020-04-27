import React, { Component } from 'react'

import New from './new'
import './New.css'

class News extends Component {
    render (){ 
        return <div className = "news-container" >
        {this.props.news.map( e => <New new= {e} key={e.id}/>)}
        </div> }

}

export default News