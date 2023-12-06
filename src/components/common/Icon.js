import React from "react";

function Icon({ svg, customClass, isHovered, hoverColor, fillColor }) {

    const updateSvg = React.cloneElement(svg, {
        fill: isHovered ? hoverColor : fillColor
    })
    return (
        <div className={`icon-container cursor-pointer ${customClass}`}>
            {updateSvg}
        </div>


    )
}

export default Icon;