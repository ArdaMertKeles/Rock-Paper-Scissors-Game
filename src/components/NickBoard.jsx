import React from "react";

function NickBoard({homePP,awayPP,homeName,awayName}){
    return(
        <div className="nickBoardWrapper">
            <div className="nickBoard">
                <img src={homePP} alt="" />
                <p>{homeName}</p>
            </div>
            <div className="nickBoard">
                <p>{awayName}</p>
                <img src={awayPP} alt="" />
            </div>
        </div>
    )
}

export default NickBoard