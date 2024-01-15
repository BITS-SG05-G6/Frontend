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
    <div className="relative">
      {/* <div className="absolute bottom-0 top-0 xl:hidden">
        <MobileSideBar />
      </div> */}
      {/* {isSidebarOpen && (
        <div className="w-scree top-0 z-50 h-screen opacity-5 "></div>
      )} */}

      {/* <button onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="h-6 w-6" color="#F06293" />
      </button> */}

      {/* {isSidebarOpen && ( */}
      {/* <div
        className="fleft-0 fixed top-0 z-10 h-full w-64 -translate-x-64 bg-white transition delay-150"
        style={
          isSidebarOpen
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-16rem)" }
        }
      >
        <SideBar />
        {isSidebarOpen && (
          <div className="relative top-0 h-screen w-screen bg-black opacity-50">
            <button className="absolute right-2 top-10" onClick={toggleSidebar}>
              <FontAwesomeIcon
                icon={faXmark}
                className="h-6 w-6"
                color="white"
              />
            </button>
          </div>
        )}
      </div> */}
      {/* )} */}

      {/* Mobile SideBar */}
      {isSidebarOpen && (
        <div
          className="xl:hidden"
          // style={isSidebarOpen ? { display: "block" } : { display: "none" }}
        >
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
        <div className="flex flex-col gap-5 xl:pl-64">
          <Header title={header} username={username} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default PrivatePageLayout;
