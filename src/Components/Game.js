import React, { useState, useEffect } from "react"; //new import

// Data
import data from "../data";

// Utils
import { shuffle } from "../utils";

// Components
import Card from "./Card";

const Game = ({ difficulty }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cards = data;
    switch (difficulty) {
      case "easy":
        cards = data.slice(0, 6);
        break;
      case "medium":
        cards = data.slice(0, 8);
        break;
      default:
        break;
    }
    setCards(() => shuffle([...cards, ...cards]));
  }, [difficulty]); 

  let flippedCards = [];
  
  const changeFlipped = 
        anArray => {flippedCards = anArray;}; 

  const unflipCards = 
        //the update state function for the cards (setFlipped)
        (unflip1, unflip2) => { setTimeout(() => {
                                        unflip1(false);
                                        unflip2(false);
                                        }, 1000);
                                    }; 

  const checkFlipped = 
        flippedObject => { changeFlipped([...flippedCards, flippedObject]);

        if (flippedCards.length === 2) {
            if (flippedCards[0].id !== flippedCards[1].id) {
                unflipCards(flippedCards[0].setFlipped, flippedCards[1].setFlipped);
            }
            changeFlipped([]);
        }
        }; 

  const cardList = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped} /> 
  ));

  return (
    <div className="container">
      <div className="row">
        <div className=" col-9">
          <div className="row border">{cardList}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;