import React, { useState } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
function SideBarField({ title, icon, path, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <NavLink to={path}
        className={({ isActive }) => `justify-start gap-2 flex h-11 px-11 text-sm max-w-sm py-3 ps-4 pe-20 rounded-lg hover:bg-[#EF5DA8] border-none shadow-none ${
            isActive ? "bg-[#EF5DA8]" : "" 
          } ${isActive? setIsActive(true): setIsActive(false)}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <Icon svg={icon} customClass='mt-0.5' isHovered={isHovered} isActive={isActive} activeColor="#FFFFFF" hoverColor='#FFFFFF' fillColor='#929EAE' />
            <div className={`font-semibold text-gray-400 ${isHovered ? 'text-white' : ''} ${isActive? 'text-white': ''}`}>{title}</div>
        </NavLink>
    )
}

export default SideBarField;