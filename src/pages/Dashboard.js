import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import OverviewCard from '../components/Dashboard/OverviewCard'
import DashboardList from "../components/Dashboard/DashboardList";
import SectionLayout from "../components/Dashboard/SectionLayout";
import { TransactionContext } from "../context/transactionContext";
import { WalletContext } from "../context/walletContext";
import { BillContext } from "../context/billContext";
import { useContext, useEffect } from "react";

function Dashboard() {

    // Fetch transactions
    const { transactions, setPage, setSelectedDate } = useContext(TransactionContext);
    // Explicitly set the page type and the selectedDate to handle displaying fetching all transactions
    setPage('dashboard');
    setSelectedDate(null);
    // Explicitly remove the selectedDate to fetch all transactions
    const recentTransactions = transactions ? transactions.slice(0, 7) : [];
    // Fetch wallets and bills
    const { wallets } = useContext(WalletContext);
    const recentWallets = wallets ? wallets.slice(0, 3) : [];
    const { bills } = useContext(BillContext);
    const recentBills = bills ? bills.slice(0, 5) : [];

    return (
        <div>
            <SideBar />
            <div className="pl-60 flex flex-col gap-5">
                <Header title="Dashboard" username="Tom Vo" />
                <div className="grid grid-cols-3 px-3">
                    <div className="col-span-2 flex flex-col">
                        {/*Balance overview */}
                        <div className="px-5 py-5 flex justify-evenly gap-5">
                            <OverviewCard type='balance' isPrimary />
                            <OverviewCard type='spending' />
                            <OverviewCard type='savings' />
                        </div>
                        {/* Statistic */}
                        <div></div>
                        {/* Transaction overview */}
                        <div className="px-5">
                            <SectionLayout className='ps-5' title='Recent Transactions' viewList='true' href='/transaction'>
                                <DashboardList listType='transaction' array={recentTransactions} />
                            </SectionLayout>
                        </div>
                    </div>
                    <div>
                        {/* Wallet overview */}
                        <SectionLayout className='ps-5 pr-10' title='My Wallets' viewList='true' href='/wallets' >
                            <DashboardList listType='wallet' array={recentWallets} />
                        </SectionLayout>
                        {/* Bill overview */}
                        <SectionLayout className='ps-5 pr-10' title='My Invoices' viewList='true' href='/invoices'>
                            <DashboardList listType='bill' array={recentBills} />
                        </SectionLayout>
                    </div>


                </div>
            </div>
        </div>

    );
};



export default Dashboard;