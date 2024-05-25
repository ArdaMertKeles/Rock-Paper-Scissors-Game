import React from "react";

function SelectionShown({logo, click, homeNameValue,error}){
    return(
        <div className="selectionShownWrapper">
            <div className="shownPP">
                <img src={logo} alt="" />
            </div>
            <div className="shownName">
                <input onChange={homeNameValue} type="text" />
                {error && <p id="warning">*You cannot leave that place empty!</p>}
            </div>
            <button onClick={click}><span>Start!</span></button>
        </div>
    )
}

export default SelectionShown