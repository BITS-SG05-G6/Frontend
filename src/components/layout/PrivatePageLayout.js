import React, { useState } from "react";
import Header from "../common/Header";
import SideBar from "../common/SideBar";

function PrivatePageLayout({ header, children, username }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* <div className="absolute bottom-0 top-0 xl:hidden">
        <MobileSideBar />
      </div> */}

      <button onClick={toggleSidebar}>toggle</button>

      {/* {isSidebarOpen && ( */}
      <div
        className="fleft-0 fixed top-0 z-10 h-full w-64 -translate-x-64 bg-white transition delay-150"
        style={
          isSidebarOpen
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-16rem)" }
        }
      >
        <SideBar />
      </div>
      {/* )} */}

      <div className="hidden xl:block">
        <SideBar />
      </div>
      <div className="flex flex-col gap-5 pl-[70px] xl:pl-64">
        <Header title={header} username={username} />
        {children}
      </div>
    </div>
  );
}

export default PrivatePageLayout;
