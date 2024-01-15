import React, { useState } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
function SideBarField({ title, icon, path, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink
      to={path}
      className={({
        isActive,
      }) => `flex h-11 max-w-sm justify-start gap-2 rounded-lg border-none bg-neutral-50 px-11 py-3 pe-4 ps-4 text-sm shadow-none hover:bg-[#F472B6] xl:pe-20 
                ${isActive ? setIsActive(true) : setIsActive(false)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ backgroundColor: isActive ? "#F472B6" : "" }}
    >
      {/*Dynamic icon*/}
      <Icon
        svg={icon}
        customClass="mt-0.5"
        isHovered={isHovered}
        isActive={isActive}
        activeColor="#FFFFFF"
        hoverColor="#FFFFFF"
        fillColor="#929EAE"
      />
      <div
        className={`hidden font-semibold text-gray-400 xl:block ${isHovered ? "text-white" : ""} ${isActive ? "text-white" : ""}`}
      >
        {title}
      </div>
    </NavLink>
  );
}

export default SideBarField;
