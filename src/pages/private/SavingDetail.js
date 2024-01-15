import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GoalDetails from "../../components/SavingGoal/GoalDetails";
import * as savingGoal from "../../services/savingGoal";
import TransactionList from "../../components/Transaction/TransactionList";
import MarkerChart from "../../components/Statistics/MarkerChart";
import Loading from "../../components/common/Loading";
import { SavingContext } from "../../context/savingContext";

function SavingDetail() {
  const { id } = useParams();
  const [goal, setGoal] = useState({});
  const [goalTransactions, setGoalTransactions] = useState([]);
  const { handleUpdateGoal, isUpdate, isLoading, setIsLoading } =
    useContext(SavingContext);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        // Fetch data based on the params id
        const goalData = await savingGoal.viewSavingGoal(id);
        // console.log(goalData);
        if (goalData) {
          setGoal(goalData.savingGoal);
          setGoalTransactions(goalData.transactions);
        }
        handleUpdateGoal();
      } catch (err) {
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    fetchData();
  }, [id, isUpdate, setIsLoading, handleUpdateGoal]);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="flex w-full flex-col lg:px-8 xl:grid xl:grid-cols-3">
          <div className="mb-6 flex w-full flex-col gap-10 xl:col-span-2 xl:flex-1 xl:pr-5">
            <MarkerChart savingID={id} />
            <TransactionList transactions={goalTransactions} />
          </div>
          {/* render the components based on the data fetching */}
          <div className="flex w-full items-center justify-center xl:col-span-1 xl:h-full xl:items-start">
            <GoalDetails goal={goal} />
          </div>
        </div>
      )}
    </>
  );
}

export default SavingDetail;
