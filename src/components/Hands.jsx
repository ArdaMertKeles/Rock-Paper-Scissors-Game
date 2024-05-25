import React from "react";

function Hands({ homeHand, awayHand, shake, awayShake, home, away }) {

    return (
        <div className="handsWrapper">
            <div className="hand">
                <img className={shake} src={homeHand} alt="" />
            </div>
            <div className="score">
                <p> {home} - {away} </p>
            </div>
            <div className="hand">
                <img className={awayShake} src={awayHand} alt="" />
            </div>
        </div>
    )
}

export default Hands