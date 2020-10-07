import React from "react";

const Card = ({card}) => {
        return(
            <div className="col-3 my-1">
                <img className="mx-auto" 
                    src={card.front}
                    width="100%"
                    hieght="100%"/>
            </div>
        );
    };

export default Card;