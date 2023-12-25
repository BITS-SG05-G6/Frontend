import React, { useContext } from "react";
import Text from "./Text";
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
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/authContext";

const SideBar = () => {
  const navigate = useNavigate();
  const {fetchData} = useContext(AuthContext);

  const logOut = async() => {
    await axiosInstance.signout()
    .then((res) => {
      Cookies.remove('token');
      fetchData();
      console.log(res)
      navigate('/')
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="h-screen w-60 bg-neutral-50 fixed flex flex-col px-3">
      <Text
        className="absolute top-8 left-8 text-[#EF5DA8]"
        variant="text-xl"
        weight="bold"
      >
        Wise
        <Text className="text-black" variant="text-xl" weight="bold">
          Wallet
        </Text>
      </Text>

      <div className="flex flex-col gap-2 mt-20 ">
        <SideBarField path='/dashboard' title="Dashboard" icon={<DashboardIcon />} />
        <SideBarField path='/transaction' title="Transactions" icon={<TransactionIcon />} />
        <SideBarField path='/invoices' title="Invoices" icon={<InvoiceIcon />} />
        <SideBarField path='/wallets' title="My Wallets" icon={<WalletIcon />} />
        <SideBarField path='/planning' title="Planning" icon={<PlanIcon />} />
        <SideBarField path='/statistics' title="Statistics" icon={<StatisticsIcon />} />
        <SideBarField path='/profile' title="My Profile" icon={<ProfileIcon />} />
      </div>

      <div className="flex gap-2 flex-col absolute bottom-6">
        <SideBarField path='/help' title="Help" icon={<HelpIcon />} />
        <SideBarField path='/logout' title="Log Out" icon={<LogoutIcon />} onClick={logOut}/>
      </div>
    </div>
  );
};

export default SideBar;