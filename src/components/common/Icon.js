import React from "react";

function Icon({
  svg,
  customClass,
  isHovered,
  hoverColor,
  isActive,
  fillColor,
  activeColor,
}) {
  const fill = isActive ? activeColor : isHovered ? hoverColor : fillColor;
  const updateSvg = React.cloneElement(svg, {
    fill: fill,
  });
  return (
    <div className={`icon-container cursor-pointer ${customClass}`}>
      {updateSvg}
    </div>
  );
}

export default Icon;
