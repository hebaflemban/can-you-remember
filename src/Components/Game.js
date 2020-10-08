import React, { useState, useEffect } from "react"; //new import

// Data
import data from "../data";

// Utils
import { shuffle } from "../utils";

// Components
import Card from "./Card";
import Score from "./Score";


const Game = ({ mode, difficulty }) => {
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

  const [score, setScore] = useState([0, 0]); 
  const [playerTurn, setPlayerTurn] = useState(true); 
  const [failedFlips, increaseFailed] = useState(0); 


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
                increaseFailed(failedFlips + 1); 
                setPlayerTurn(!playerTurn); 
            }else {
                if (mode === "multi") {
                  if (playerTurn) {
                    setScore([(score[0] += 1), score[1]]);
                  } else {
                    setScore([score[0], (score[1] += 1)]);
                  }
                }
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
            <Score 
            mode={mode}
            score={score}
            failedFlips={failedFlips}
            playerTurn={playerTurn}
            />
      </div>
    </div>
  );
};

export default Game;