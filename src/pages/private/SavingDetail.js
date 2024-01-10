import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import GoalDetails from '../../components/SavingGoal/GoalDetails';
import * as savingGoal from '../../services/savingGoal';
import TransactionList from '../../components/Transaction/TransactionList';

function Details() {
    const { id } = useParams();
    const [goal, setGoal] = useState({});
    const [goalTransactions, setGoalTransactions] = useState([]);

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
            }
            catch (err) {

            }
        }
        fetchData();
    }, [id])


    return (
        <DetailPageLayout>
            <div className="flex flex-col flex-1 gap-10 pr-5">
                <TransactionList transactions={goalTransactions} />
            </div>
            {/* render the components based on the data fetching */}
            <GoalDetails goal={goal} />
        </DetailPageLayout>
    )

}

export default Details;