import GoalList from "../../components/SavingGoal/GoalList";
import GoalForm from "../../components/SavingGoal/GoalForm";
import { useContext } from "react";
import { SavingContext } from "../../context/savingContext";
import * as axiosInstance from "../../services/savingGoal";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";
import Loading from "../../components/common/Loading";

function Saving() {
  const { goals, handleUpdateGoal, isLoading } = useContext(SavingContext);
  const {
    isMessageVisible,
    message,
    notiType,
  } = useContext(NotificationContext);
  // Delete a goal
  async function handleDelete(id) {
    try {
      const res = await axiosInstance.deleteSavingGoal(id);
      console.log(res);
      handleUpdateGoal();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          {isMessageVisible && <Alert message={message} type={notiType} />}
          <div className="flex justify-end px-6">
            <GoalForm buttonName="New Goal" icon="file-invoice-dollar" />
          </div>
          <div className="px-10">
            <div className="flex flex-col flex-1 gap-10 pr-5">
              <GoalList goals={goals} onDelete={handleDelete} />
            </div>
          </div>
        </>)}
    </>
  );

}

export default Saving;
