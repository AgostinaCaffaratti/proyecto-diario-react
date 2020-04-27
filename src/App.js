import React from 'react';

import './App.css'; 

import news from './sample/noticias.json'
import News from './components/news'



class App extends React.Component {

  //defino el estado, con las noticias creadas

  state = {
    news : news
  }


  render () {
    return  <div>
      <News news = {this.state.news}/>
    </div>
      
        
        
      
    
  }
}

export default App;
