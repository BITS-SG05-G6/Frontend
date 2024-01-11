import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import GoalList from "../../components/SavingGoal/GoalList";
import GoalDetails from "../../components/SavingGoal/GoalDetails";
import GoalForm from "../../components/SavingGoal/GoalForm";
import { useContext } from "react";
import { SavingContext } from "../../context/savingContext";
import * as axiosInstance from '../../services/savingGoal'
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function Saving() {
    const {goals, handleUpdateGoal} = useContext(SavingContext);
    const { setIsMessageVisible, isMessageVisible, message, setMessage, notiType } = useContext(NotificationContext);
  // Delete a goal
  async function handleDelete(id) {
    try {
      const res = await axiosInstance.deleteSavingGoal(id);
      console.log(res);
      handleUpdateGoal();
    } catch (err) {
      console.log(err);
    }
    return (
        <>
        {
      isMessageVisible && (
        <Alert message={message} type={notiType}/>
      )
    }
            <div className="flex justify-end px-6">
                <GoalForm buttonName="New Goal" icon="file-invoice-dollar" />
            </div>
            <div className="px-10">
                <div className="flex flex-col flex-1 gap-10 pr-5">
                    <GoalList goals={goals} onDelete={handleDelete} />
                </div>
            </div>
        </>
    );

}

export default Saving;
