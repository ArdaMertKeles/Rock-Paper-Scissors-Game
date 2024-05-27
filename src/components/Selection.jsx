import React from "react";

function Selection({ rock, paper, scissors, rockSelection, paperSelection, scissorsSelection,
     play, selectionDisabled, reset, resetBtnDisabled, next, nextBtnDisabled }) {
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
            <div className="buttons">
            <button className="restartBtn" onClick={reset} disabled={resetBtnDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"></path>
                </svg>
                <p>Restart</p>
            </button>
                <button className="nextBtn" onClick={next} disabled={nextBtnDisabled}>Next!</button>
            </div>
        </div>
    )
}

export default Selection