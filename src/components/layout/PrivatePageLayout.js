import React, { useState } from "react";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import MobileSideBar from "../common/MobileSideBar";

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
      <div className="">
        <SideBar />
      </div>
      <div className="flex flex-col gap-5 pl-16 xl:pl-64">
        <Header title={header} username={username} />
        {children}
      </div>
    </div>
  );
}

export default PrivatePageLayout;
