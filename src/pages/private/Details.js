import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import GoalDetails from '../../components/SavingGoal/GoalDetails';
import WalletDetails from "../../components/Wallet/WalletDetails";
import * as savingGoal from '../../services/savingGoal';
import * as walletService from '../../services/wallet';
import TransactionList from '../../components/Transaction/TransactionList';
import DetailChartWallet from "../../components/Statistics/DetailChartWallet";

function Details() {
    const { id } = useParams();

    const [goal, setGoal] = useState(null);
    const [category, setCategory] = useState(null);
    const [wallet, setWallet] = useState(null);
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch data based on the params id 
                const walletData = await walletService.getWallet(id);
                console.log(walletData);
                const goalData = await savingGoal.viewSavingGoal(id);
                console.log(goalData);
                if (goalData) {
                    setGoal(goalData.savingGoal);
                    setTransactions(goalData.transactions);
                }
                if (walletData) {
                    setWallet(walletData.wallet);
                    setTransactions(walletData.transactions);
                }
            }
            catch (err) {

            }
        }
        fetchData();
    }, [id, transactions])


    return (
        <DetailPageLayout>
            <div className="flex flex-col flex-1 gap-10 pr-5">
                {wallet && (
                    <DetailChartWallet walletID={wallet._id}/>
                )}
                <TransactionList transactions={transactions} />
            </div>
            {/* render the components based on the data fetching */}
            {goal && (
                <GoalDetails goal={goal} />
            )}
            {wallet && (
                <WalletDetails wallet={wallet}/>
            )}
        </DetailPageLayout>
    )

}

export default Details;