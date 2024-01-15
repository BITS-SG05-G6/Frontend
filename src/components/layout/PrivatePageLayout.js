import React, { useState } from "react";
import Header from "../common/Header";
import SideBar from "../common/SideBar";

function PrivatePageLayout({ header, children, username }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="block xl:hidden">
        <Header
          title={header}
          username={username}
          onMenuClick={toggleSidebar}
        />
      </div>
      <div className="hidden xl:block">
        <SideBar />
      </div>
      <div className="flex flex-col gap-5 xl:pl-64">
        <Header title={header} username={username} />
        {children}
      </div>
    </>
  );
}

export default PrivatePageLayout;
