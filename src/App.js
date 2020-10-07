import React from "react";
import "./App.css";

import cards from './data.js'
import CardBack from './images/CardBack.jpg'

function App() {
  
  return (
    <div className="App border my-5">
      <div className="container">

      <div className="row">
        <div className="col-3 my-1">
          <img className="mx-auto" 
               src={cards[4].front}
               width="100%"
               hieght="100%"
          />
          <img className="mx-auto" 
               width="100%"
               hieght="100%"
               src={CardBack}
          />
        </div>
      </div>
     </div>
    </div>
  )
}

export default App;
