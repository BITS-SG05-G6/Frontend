import React from "react";
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

const SideBar = () => {
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
        <SideBarField title="Dashboard" icon={<DashboardIcon />} />
        <SideBarField title="Transactions" icon={<TransactionIcon />} />
        <SideBarField title="Invoices" icon={<InvoiceIcon />} />
        <SideBarField title="My Wallets" icon={<WalletIcon />} />
        <SideBarField title="Planning" icon={<PlanIcon />} />
        <SideBarField title="Statistics" icon={<StatisticsIcon />} />
        <SideBarField title="My Profile" icon={<ProfileIcon />} />

      </div>

      <div className="flex gap-2 flex-col absolute bottom-6">
      <SideBarField title="Help" icon={<HelpIcon />}  />
        <SideBarField title="Log Out" icon={<LogoutIcon />}/>
      </div>
    </div>
  );
};

export default SideBar;
