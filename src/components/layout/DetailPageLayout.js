import React, { useState } from "react";
import BackToPrev from "../common/BackToPrev";
import SideBar from "../common/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function DetailPageLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen && (
        <div className="lg:hidden">
          <SideBar toggleSidebar={toggleSidebar} />
        </div>
      )}

      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="flex flex-col gap-5 px-3 py-5 lg:pl-64">
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="ml-5 mt-5 flex items-center justify-center rounded-lg border-[1px] border-solid px-3 py-3"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-6 w-6"
              color="#F06293"
            />
          </button>
        </div>
        <BackToPrev className="ml-5 text-left" />
        <div className="mx-5 flex justify-between">{children}</div>
      </div>
    </div>
  );
}

export default DetailPageLayout;
