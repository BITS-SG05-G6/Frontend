import React from "react";

function Icon({svg, customClass, isHovered}) {

    const updateSvg = React.cloneElement(svg, {
        fill: isHovered? "#FFFFFF" : "#929EAE"
    })
    return (
        <div className={`icon-container cursor-pointer ${customClass}`}>
            {updateSvg}
        </div>


    )
}

export default Icon;