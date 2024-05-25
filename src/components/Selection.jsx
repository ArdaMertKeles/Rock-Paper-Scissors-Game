import React from "react";

function Selection({ rock, paper, scissors, rockSelection, paperSelection, scissorsSelection, play, selectionDisabled }) {
    return (
        <div className="selectionWrapper">
            <div className="selections">
            <button disabled={selectionDisabled} onClick={rockSelection}> <img src={rock} alt="" /> </button>
            <button disabled={selectionDisabled} onClick={paperSelection}> <img src={paper} alt="" /> </button>
            <button disabled={selectionDisabled} onClick={scissorsSelection}> <img src={scissors} alt="" /> </button>
            </div>
            <div className="play">
                <button disabled={selectionDisabled} onClick={play}>Play!</button>
            </div>
        </div>
    )
}

export default Selection