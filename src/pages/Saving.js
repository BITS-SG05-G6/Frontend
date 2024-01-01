import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import GoalList from "../components/SavingGoal/GoalList";
import GoalDetails from "../components/SavingGoal/GoalDetails";

function Saving() {
    return (
        <div>
            <SideBar />

            <div className="pl-64 flex flex-col gap-5">
                <Header title="My Planning" username="Tom Vo" />
                <div className="flex justify-end px-6">
                    {/* <TransactionForm buttonName="Create Transaction" icon="file-invoice-dollar" /> */}
                </div>
                <div className="flex justify-between gap-5 px-10">
                    <div className="flex flex-col flex-1 gap-10 pr-5">
                        <GoalList />
                    </div>
                    <GoalDetails status='in-progress' />
                </div>
            </div>
        </div>
    );
}

export default Saving;