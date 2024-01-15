import React, { useContext } from "react";
import Text from "./Text";
import CategoryIcon from "../svgs/CategoryIcon";
import {
  DashboardIcon,
  HelpIcon,
  InvoiceIcon,
  LogoutIcon,
  PlanIcon,
  ProfileIcon,
  StatisticsIcon,
  TransactionIcon,
  WalletIcon,
} from "../svgs/sidebarIcons";
import SideBarField from "./SideBarField";
import * as axiosInstance from "../../services/auth";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ toggleSidebar }) => {
  const { fetchData } = useContext(AuthContext);

  const logOut = async () => {
    console.log("123");
    await axiosInstance
      .signout()
      .then((res) => {
        Cookies.remove("token");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="fixed flex h-screen w-full flex-col bg-neutral-50 px-3 lg:w-64">
      {/* Logo section */}
      <div className="mx-3 mt-3 flex items-center justify-between">
        <Text
          className="text-[#EF5DA8]"
          variant="text-xl"
          weight="bold"
          noLink={false}
          href="/dashboard"
        >
          Wise
          <Text className="text-black" variant="text-xl" weight="bold">
            Wallet
          </Text>
        </Text>

        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center rounded-lg border-[1px] border-solid px-3 py-3 lg:hidden"
        >
          <FontAwesomeIcon icon={faXmark} className="h-6 w-6" color="#F06293" />
        </button>
      </div>
      {/*  Side bar navigation */}
      <div className="mt-10 flex flex-col gap-2">
        <SideBarField
          onClick={toggleSidebar}
          path="/dashboard"
          title="Dashboard"
          icon={<DashboardIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/transaction"
          title="Transactions"
          icon={<TransactionIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/category"
          title="My Categories"
          icon={<CategoryIcon />}
        ></SideBarField>
        <SideBarField
          onClick={toggleSidebar}
          path="/invoices"
          title="My Invoices"
          icon={<InvoiceIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/wallets"
          title="My Wallets"
          icon={<WalletIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/planning"
          title="My Planning"
          icon={<PlanIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/statistics"
          title="Statistics"
          icon={<StatisticsIcon />}
        />
        <SideBarField
          onClick={toggleSidebar}
          path="/profile"
          title="My Profile"
          icon={<ProfileIcon />}
        />
      </div>

      <div className="absolute bottom-6">
        <SideBarField
          path="/"
          title="Log Out"
          icon={<LogoutIcon />}
          onClick={logOut}
        />
      </div>
    </div>
  );
};

export default SideBar;
