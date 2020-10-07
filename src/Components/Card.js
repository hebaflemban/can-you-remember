import React, {useState} from "react";
import ReactCardFlip from "react-card-flip"; /* 1 */

import CardBack from '../images/CardBack.jpg'


const Card = ({card}) => {
        const [flipped, setFlipped] = useState(false)
        // let cardcover = flipped ?  CardBack : card.front;

        return(
            <div className="col-3 my-1">
              <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <a href="#" > 
                 <img className="mx-auto" 
                    src={CardBack}
                    width="100%"
                    hieght="100%"
                    onClick={()=>setFlipped(!flipped)}/>
                </a>
                <a href="#" > 
                 <img className="mx-auto" 
                    src={card.front}
                    width="100%"
                    hieght="100%"
                    onClick={()=>setFlipped(!flipped)}/>
                </a>
              </ReactCardFlip>
            </div>
        );
    };

export default Card;