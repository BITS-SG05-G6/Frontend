import React, { useState } from "react";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function PrivatePageLayout({ header, children, username }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen && (
        <div className="xl:hidden">
          <SideBar toggleSidebar={toggleSidebar} />
        </div>
      )}

      <div className="hidden xl:block">
        <SideBar />
      </div>

      <div className="flex flex-col gap-2">
        <div className="xl:hidden">
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
        <div className="mb-10 flex flex-col gap-5 xl:mb-0 xl:pl-64">
          <Header title={header} username={username} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default PrivatePageLayout;
