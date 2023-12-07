import React from "react";
import { BellIcon } from "../svgs/sidebarIcons";
// import { BellIcon } from "../../assets/sidebarIcons";
import Icon from "./Icon";
import Text from "./Text";

function Header({ title, username }) {
  return (
    <div className="flex justify-between px-10 pt-7 items-center">
      <Text variant="text-xl" weight="bold">
        {title}
      </Text>
      <div className="items-center gap-6 flex">
        <Icon svg={<BellIcon />} fillColor="#929EAE" />

        <div className="w-10">
          <img
            className="rounded-full"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <Text variant="text-lg" weight="semibold">
          {username}
        </Text>
      </div>
    </div>
  );
}

export default Header;
