import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import OverviewCard from '../../components/Dashboard/OverviewCard'
import DashboardList from "../../components/Dashboard/DashboardList";
import SectionLayout from "../../components/layout/SectionLayout";
import { TransactionContext } from "../../context/transactionContext";
import { WalletContext } from "../../context/walletContext";
import { BillContext } from "../../context/billContext";
import { useContext, useEffect, useState } from "react";
import * as axiosInstance from "../../services/statistics";
import TrendStatistic from "../../components/Statistics/TrendStatistic";

function Dashboard() {

    // Fetch overview of monthly income and expense
    const [overview, setOverview] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.compareExpenseIncomeByMonth();
                console.log(res);
                setOverview(res);
            }
            catch (err) {
                setOverview({
                    Income: 0,
                    Expense: 0
                });
            }
        }
        fetchData();
    }, []);

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
        <>

            <div className="grid grid-cols-3 px-3">
                <div className="col-span-2 flex flex-col">
                    {/*Balance overview */}
                    <div className="px-5 py-5 flex justify-evenly gap-5">
                        <OverviewCard type='balance' isPrimary amount={overview.Income} />
                        <OverviewCard type='spending' amount={overview.Expense} />
                        <OverviewCard type='savings' />
                    </div>
                    {/* Statistic */}
                    <div className='px-6'>
                        <TrendStatistic typeOfData='Monthly' title='Monthly expense habit' />
                    </div>
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
        </>

    );
};



export default Dashboard;