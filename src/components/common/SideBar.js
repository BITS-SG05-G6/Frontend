import React from "react";
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

const SideBar = () => {
  return (
    <div className="h-screen w-60 bg-neutral-50 fixed flex flex-col px-3">
      {/* Logo section */}
      <Text
        className="absolute top-8 left-8 text-[#EF5DA8]"
        variant="text-xl"
        weight="bold"
        noLink={false}
        href='/dashboard'
      >
        Wise
        <Text className="text-black" variant="text-xl" weight="bold">
          Wallet
        </Text>
      </Text>
      {/*  Side bar navigation */}
      <div className="flex flex-col gap-2 mt-20 ">
        <SideBarField path='/dashboard' title="Dashboard" icon={<DashboardIcon />} />
        <SideBarField path='/transaction' title="Transactions" icon={<TransactionIcon />} />
        <SideBarField path='/category' title='My Categories' icon={<CategoryIcon/>}></SideBarField>
        <SideBarField path='/invoices' title="My Invoices" icon={<InvoiceIcon />} />
        <SideBarField path='/wallets' title="My Wallets" icon={<WalletIcon />} />
        <SideBarField path='/planning' title="My Planning" icon={<PlanIcon />} />
        <SideBarField path='/statistics' title="Statistics" icon={<StatisticsIcon />} />
        <SideBarField path='/profile' title="My Profile" icon={<ProfileIcon />} />
      </div>

      <div className="flex gap-2 flex-col absolute bottom-6">
        <SideBarField path='/help' title="Help" icon={<HelpIcon />} />
        <SideBarField path='/logout' title="Log Out" icon={<LogoutIcon />} />
      </div>
    </div>
  );
};

export default SideBar;