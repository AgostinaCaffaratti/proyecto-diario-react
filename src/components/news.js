import React, { Component } from 'react'

import New from './new'

class News extends Component {
    render (){ 
        return this.props.news.map( e => <New new= {e} key={e.id}/>)
    }

}

export default News