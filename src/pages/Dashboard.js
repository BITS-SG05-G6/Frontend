import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import OverviewCard from '../components/Dashboard/OverviewCard'

function Dashboard() {

    return (
        <div>
            <SideBar />
            <div className="pl-60 flex flex-col gap-5">
                <Header title="Dashboard" username="Tom Vo" />
                <div>
                    <div>
                        {/* Wallet overview */}
                        <div></div>
                        {/* Bill overview */}
                        <div></div>
                    </div>
                    <div>
                        {/*Balance overview */}
                        <div className="px-10 py-5 flex justify-evenly">
                            <OverviewCard type='balance' isPrimary='true' />
                            <OverviewCard type='spending' />
                            <OverviewCard type='savings' />
                        </div>
                        {/* Statistic */}
                        <div></div>
                        {/* Transaction overview */}
                        <div></div>
                    </div>

                </div>
            </div>
        </div>

    );
};



export default Dashboard;