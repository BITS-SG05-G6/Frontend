import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import GoalList from "../../components/SavingGoal/GoalList";
import GoalDetails from "../../components/SavingGoal/GoalDetails";
import GoalForm from "../../components/SavingGoal/GoalForm";
import { useEffect } from "react";
import * as axiosInstance from '../../services/savingGoal'

function Saving() {
    useEffect(() => {

    })
    return (
        <>
            <div className="flex justify-end px-6">
                <GoalForm buttonName="New Goal" icon="file-invoice-dollar" />
            </div>
            <div className="px-10">
                <div className="flex flex-col flex-1 gap-10 pr-5">
                    <GoalList />
                </div>
            </div>
        </>
    );
}

export default Saving;