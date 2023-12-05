import React from "react";
import { BellIcon } from "../svgs/sidebarIcons";
import Icon from "./Icon";

function Header({ title, username }) {
    return (
        <div className="w-[95%] py-3 h-50 justify-between flex">
            <h1 className="text-3xl font-bold" >{title}</h1>
            <div className="mt-3  items-center gap-5 flex">
                <Icon svg={<BellIcon />} />
                <div className="flex gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold pt-1">{username}</h2>
                </div>
            </div>
        </div>
    )
}

export default Header;