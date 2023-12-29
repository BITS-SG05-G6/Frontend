import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import OverviewCard from '../components/Dashboard/OverviewCard'
import DashboardList from "../components/Dashboard/DashboardList";
import SectionLayout from "../components/Dashboard/SectionLayout";
import { TransactionContext } from "../context/transactionContext";
import { WalletContext } from "../context/walletContext";
import { useContext } from "react";

function Dashboard() {

    // Fetch transactions
    const { transactions } = useContext(TransactionContext);
    const { wallets } = useContext(WalletContext);

    // const wallets = [
    //     {
    //         id: 1,
    //         name: 'Cash',
    //         amount: 569,
    //         color: '#FFC0CB',
    //         currency: 'VND'
    //     },
    //     {
    //         id: 2,
    //         name: 'Credit',
    //         amount: 3004,
    //         color: '#800080',
    //         currency: 'VND'
    //     }
    // ];

    // const transactions = [
    //     {
    //         id: 1,
    //         title: 'Dog walking',
    //         amount: 569,
    //         currency: 'VND',
    //         transactionType: 'Expense',
    //         date: new Date('2023-12-28')
    //     },
    //     {
    //         id: 2,
    //         title: 'Salary',
    //         amount: 1200,
    //         currency: 'USD',
    //         transactionType: 'Income',
    //         date: new Date('2023-12-29')
    //     },
    //     {
    //         id: 3,
    //         title: 'Pet',
    //         amount: 140000,
    //         currency: 'VND',
    //         transactionType: 'Expense',
    //         date: new Date('2023-12-26')
    //     },

    // ]

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
                            <SectionLayout className='ps-5' title='Recent Transactions' viewList='true'>
                                <DashboardList listType='transaction' array={transactions} />
                            </SectionLayout>
                        </div>
                    </div>
                    <div>
                        {/* Wallet overview */}
                        <SectionLayout className='ps-5 pr-10' title='My Wallets' viewList='true' >
                            <DashboardList listType='wallet' array={wallets} />
                        </SectionLayout>
                        {/* Bill overview */}
                        <div></div>
                    </div>


                </div>
            </div>
        </div>

    );
};



export default Dashboard;