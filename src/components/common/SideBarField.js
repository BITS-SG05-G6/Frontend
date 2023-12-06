import React, { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
function SideBarField({ title, icon }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button className="justify-start gap-2 flex" variant="navButton" size="lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon svg={icon} customClass='mt-0.5' isHovered={isHovered} hoverColor='#FFFFFF' fillColor='#929EAE' />
            <div className={`font-semibold text-gray-400 ${isHovered ? 'text-white' : ''}`}>{title}</div>
        </Button>
    )
}

export default SideBarField;