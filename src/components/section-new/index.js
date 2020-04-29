import React, { Component } from 'react'

import New from '../articulo'
import './style.scss'
import MainSection from '../main-section'


class News extends Component {
    render (){ 
        
        return <section className = "news-container" >
        <div className = 'main-section-container'>
        <MainSection main = {this.props.news[0]}/>   
        </div>
        <div className = 'secondary-new'>
        {this.props.news.map( e => <New new= {e} key={e.id}/>)}
        </div>
        </section> 
        

        }

}

export default News