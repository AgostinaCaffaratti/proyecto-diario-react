import React from 'react';

import './App.scss'; 

import news from './sample/noticias.json'
import SectionNews from './components/news-section'
import Header from './components/header';



class App extends React.Component {
  
  state = {
    news : news
  }

    render () {
    return  <div className = "body">
      <Header/>
      <SectionNews news = {this.state.news}/>
    </div>
  }
}

export default App;
