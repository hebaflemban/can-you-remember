import React, {useState} from "react";
import "./App.css";

// Data
import data from './data.js'

//Components
import Card from './Components/Card'

//
import { shuffle } from "./utils";


function App() {
  
  const [cards , setCards] = useState(shuffle([...data, ...data]));

  let grid = cards.map((card, idx) => ( 
        <Card key ={`${card.id}-${idx}`} card={card}/>));

        // {`${card.id}-${idx}`}

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
 