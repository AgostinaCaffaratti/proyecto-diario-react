import React from 'react';

import './App.scss'; 

import news from './sample/noticias.json'
import News from './components/section-new'
import Header from './components/header';



class App extends React.Component {

  //defino el estado, con las noticias creadas

  state = {
    news : news
  }


  render () {
    return  <div className = "body">
      <Header/>
      <News news = {this.state.news}/>
    </div>
      
        
        
      
    
  }
}

export default App;
