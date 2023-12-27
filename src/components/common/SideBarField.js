import React, { useState } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
function SideBarField({ title, icon, path }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <NavLink to={path}
            className={({ isActive }) => `justify-start gap-2 flex h-11 px-11 text-sm max-w-sm py-3 ps-4 pe-20 rounded-lg bg-neutral-50 hover:bg-[#F472B6] border-none shadow-none 
                ${isActive ? setIsActive(true) : setIsActive(false)}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: isActive ? '#F472B6' : '' }}
        >
            {/*Dynamic icon*/}
            <Icon svg={icon} customClass='mt-0.5' isHovered={isHovered} isActive={isActive} activeColor="#FFFFFF" hoverColor='#FFFFFF' fillColor='#929EAE' />
            <div className={`font-semibold text-gray-400 ${isHovered ? 'text-white' : ''} ${isActive ? 'text-white' : ''}`}>{title}</div>
        </NavLink>
    )
}

export default SideBarField;