import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import GoalList from "../components/SavingGoal/GoalList";
import GoalDetails from "../components/SavingGoal/GoalDetails";
import GoalForm from "../components/SavingGoal/GoalForm";
import * as axiosInstance from '../services/savingGoal'
import { useContext } from "react";
import { SavingContext } from "../context/savingContext";

function Saving() {
    const {goals, handleUpdateGoal} = useContext(SavingContext);

    // Delete a goal
    async function handleDelete(id) {
        try {
            const res = await axiosInstance.deleteSavingGoal(id);
            console.log(res);
            handleUpdateGoal();
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <SideBar />

            <div className="pl-64 flex flex-col gap-5">
                <Header title="My Planning" username="Tom Vo" />
                <div className="flex justify-end px-6">
                    <GoalForm buttonName="New Goal" icon="file-invoice-dollar" />
                </div>
                <div className="px-10">
                    <div className="flex flex-col flex-1 gap-10 pr-5">
                        <GoalList goals={goals} onDelete={handleDelete} />
                    </div>
                    {/* <GoalDetails status='in-progress' /> */}
                </div>
            </div>
        </div>
    );
}

export default Saving;