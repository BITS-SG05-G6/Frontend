import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import OverviewCard from '../components/Dashboard/OverviewCard'
import WalletList from "../components/Dashboard/WalletList";
import SectionLayout from "../components/Dashboard/SectionLayout";

function Dashboard() {

    return (
        <div>
            <SideBar />
            <div className="pl-60 flex flex-col gap-5">
                <Header title="Dashboard" username="Tom Vo" />
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        {/*Balance overview */}
                        <div className="px-5 py-5 flex justify-evenly gap-5">
                            <OverviewCard type='balance' isPrimary />
                            <OverviewCard type='spending' />
                            <OverviewCard type='savings' />
                        </div>
                        {/* Statistic */}
                        <div></div>
                        {/* Transaction overview */}
                        <div></div>
                    </div>
                    <div>
                        {/* Wallet overview */}
                        <SectionLayout className='ps-5 pr-10' title='My Wallets' viewList='true' >
                            <WalletList />
                        </SectionLayout>
                        {/* <div className="w-full pr-10">
                            <WalletList />
                        </div> */}
                        {/* Bill overview */}
                        <div></div>
                    </div>


                </div>
            </div>
        </div>

    );
};



export default Dashboard;