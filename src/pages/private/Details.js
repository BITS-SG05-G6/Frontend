import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import GoalDetails from '../../components/SavingGoal/GoalDetails';
import * as savingGoal from '../../services/savingGoal';
import TransactionList from '../../components/Transaction/TransactionList'

function Details() {
    const {id} = useParams();
    
    const [saving, setSaving] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const [category, setCategory] = useState(null);
    const [wallet, setWallet] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const goalData = await savingGoal.viewSavingGoal(id);
                if (goalData) {
                    setSaving(goalData.savingGoal);
                    setTransactions(goalData.transactions);
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
                <TransactionList transactions={transactions}/>
            </div>
            {saving && (
                <GoalDetails goal={saving} />
            )}
        </DetailPageLayout>
    )

}

export default Details;