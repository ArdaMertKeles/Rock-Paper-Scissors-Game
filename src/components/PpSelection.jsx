import React from "react";

function PpSelection({logo, click}){
    return(
        <div>
             <img onClick={click} src={logo} alt="" />
        </div>
    )
}

export default PpSelection