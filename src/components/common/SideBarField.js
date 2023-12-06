import React, {useState} from "react";
import Icon from "./Icon";
import Text from "./Text";
function SideBarField({ title, icon}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="py-3 pl-4 pr-20 rounded-lg justify-start gap-2 flex hover:bg-pink-400 hover:text-white" 
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            <Icon svg={icon} customClass='mt-0.5' isHovered={isHovered}/>
            <div className='font-semibold text-gray-400 hover:text-white'>{title}</div>
        </div>
    )
}

export default SideBarField;