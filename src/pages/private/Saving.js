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
  const { isMessageVisible, message, notiType, setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);
  // Delete a goal
  async function handleDelete(id) {
    try {
      const res = await axiosInstance.deleteSavingGoal(id);
      setMessage(res);
      setIsMessageVisible(true);
      setNotiType("success");

      setTimeout(() => {
        setMessage(null);
        setIsMessageVisible(false);
      }, 3000);
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
          <div className="flex justify-end px-4 lg:px-6">
            <GoalForm buttonName="New Goal" icon="file-invoice-dollar" />
          </div>
          <div className="px-4 lg:px-10">
            <div className="flex flex-1 flex-col gap-10 xl:pr-5">
              <GoalList goals={goals} onDelete={handleDelete} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Saving;
