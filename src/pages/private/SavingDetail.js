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
  const { handleUpdateGoal, isUpdate, isLoading, handleLoading, setIsLoading } = useContext(SavingContext);


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
        setTimeout(handleLoading, 1000);
      } catch (err) { }
      finally {
        setIsLoading(true);
      }
    }
    fetchData();
  }, [id, isUpdate]);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <div className="flex flex-col flex-1 gap-10 pr-5">
            {/* <BackToPrev className='text-left' /> */}
            <MarkerChart savingID={id} />

            <TransactionList transactions={goalTransactions} />

          </div>
          {/* render the components based on the data fetching */}
          <GoalDetails goal={goal} />
        </>
      )
      }
    </>
  );
}

export default SavingDetail;
