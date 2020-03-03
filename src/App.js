import React, { Component } from 'react';
import Card from './component/Card';
import './App.css';

class App extends Component {

  state = {
    Cards:[
      {src:require('./img/news1.jpg'), content:'How do I self-isolate and what should I do if I live with others?', title:'Health'},
      {src:require('./img/news2.jpg'), content:'Sussexes to join Queen, Wills and Kate at last official event', title:'Royal'},
      {src:require('./img/news3.jpg'), content:'Hate crimes are rising - but how hate is spreading is changing', title:'Crime'},
    ],
    Cards2:[
      {src:require('./img/sports1.jpg'), content:'Six Nations rugby game postponed as coronavirus panic spreads across Europe', title:'Sport'},
      {src:require('./img/sports2.jpg'), content:'Tottenham midfielder Dele Alli charged by FA over mocking coronavirus', title:'Sport'},
      {src:require('./img/sports3.jpg'), content:'Primary school children banned from heading football in training', title:'Sport'},
    ]
  }

render() {
  const eachCard = this.state.Cards.map ((Cards,index) => {
   return <Card src={Cards.src} content = {Cards.content} title = {Cards.title} key = {index} />
  })
  const eachCard2 = this.state.Cards2.map ((Cards2, index) => {
    return <Card src={Cards2.src} content = {Cards2.content} title = {Cards2.title} key = {index} />
  })


return (  
  <div className="App"> 

    <div className="header1"> 
    <button>News Headlines > </button>
     {eachCard}
  </div>

  <div className="header2"> 
    <button>Sport Headline > </button> 
    {eachCard2}
    </div>
</div>
    );
  }
}
export default App;
