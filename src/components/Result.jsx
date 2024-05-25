import React from "react";

function Result({result}){
    return(
        <div className="resultWrapper">
            <p id="result"> {result} </p>
        </div>
    )
}

export default Result