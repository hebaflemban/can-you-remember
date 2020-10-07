import React from "react";
import "./App.css";

import cards from './data.js'
import CardBack from './images/CardBack.jpg'
import Card from './Components/Card'

function App() {
  
  let grid = cards.map(card =>  <Card key ={card.id} card={card}/>);

  return (
    <div className="App border my-5">
      <div className="container">
      <div className="row">
        {grid}
      </div>
     </div>
    </div>
  )
}

export default App;
