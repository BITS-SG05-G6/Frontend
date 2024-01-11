import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import GoalDetails from "../../components/SavingGoal/GoalDetails";
import * as savingGoal from "../../services/savingGoal";
import TransactionList from "../../components/Transaction/TransactionList";
import MarkerChart from "../../components/Statistics/MarkerChart";
import { SavingContext } from "../../context/savingContext";

function Details() {
  const { id } = useParams();
  const [goal, setGoal] = useState({});
  const [goalTransactions, setGoalTransactions] = useState([]);
  const { handleUpdateGoal, isUpdate } = useContext(SavingContext);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data based on the params id
        const goalData = await savingGoal.viewSavingGoal(id);
        console.log(goalData);
        if (goalData) {
          setGoal(goalData.savingGoal);
          setGoalTransactions(goalData.transactions);
        }
        handleUpdateGoal();
      } catch (err) {}
    }
    fetchData();
  }, [id, isUpdate]);

  return (
    <DetailPageLayout>
      <div className="flex flex-col flex-1 gap-10 pr-5">
        <MarkerChart savingID={id} />
        <TransactionList transactions={goalTransactions} />
      </div>
      {/* render the components based on the data fetching */}
      <GoalDetails goal={goal} />
    </DetailPageLayout>
  );
}

export default Details;
