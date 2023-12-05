import React from "react";
import { DashboardIcon, HelpIcon, PlanIcon, LogoutIcon, ProfileIcon, InvoiceIcon, WalletIcon, StatisticsIcon, TransactionIcon } from "../../components/svgs/sidebarIcons"
import SideBarField from "./SideBarField";
function SideBar() {
    return (
        <div className="w-60 h-screen ps-1 bg-neutral-50 flex-col justify-center items-start gap-10 inline-flex fixed">
            <div className="ms-3">
                <div><span className="text-pink-400 text-lg font-bold">Wise</span><span className="text-gray-800 text-lg font-bold">Wallet</span></div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10 mb-10 ms-4">
                <div className="flex flex-col justify-start items-start gap-2">
                    <SideBarField title="Dashboard" icon={<DashboardIcon/>}/>
                    <SideBarField title="Transactions" icon={<TransactionIcon/>}/>
                    <SideBarField title="Invoices" icon={<InvoiceIcon/>}/>
                    <SideBarField title="My Wallets" icon={<WalletIcon/>}/>
                    <SideBarField title="Planning" icon={<PlanIcon/>} />
                    <SideBarField title='Statistics' icon={<StatisticsIcon/>}/>
                    <SideBarField title='My Profile' icon={<ProfileIcon/>}/>
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                    <SideBarField title='Help' icon={<HelpIcon/>} isHovered={false} />
                    <SideBarField title='Log Out' icon={<LogoutIcon/>} isHovered={false} />
                </div>
            </div>
        </div>
    )
};

export default SideBar;