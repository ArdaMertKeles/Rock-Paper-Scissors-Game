import React from "react";

function SelectionShown({logo, click, homeNameValue, btnDisabled}){
    return(
        <div className="selectionShownWrapper">
            <div className="shownPP">
                <img src={logo} alt="" />
            </div>
            <div className="shownName">
                <input onChange={homeNameValue} type="text" />
                <p id="warning">*You cannot leave that place empty!</p>
            </div>
            <button disabled={btnDisabled} onClick={click}><span>Start!</span></button>
        </div>
    )
}

export default SelectionShown