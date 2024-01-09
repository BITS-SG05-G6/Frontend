import { useState } from "react";
import {useParams} from 'react-router-dom'
import DetailPageLayout from "../../components/layout/DetailPageLayout";
import GoalDetails from '../../components/SavingGoal/GoalDetails';

function Details() {
    const {id} = useParams();
    const [goal, setGoal] = useState(null);
    const [category, setCategory] = useState(null);
    const [wallet, setWallet] = useState(null);



    return (
        <DetailPageLayout>
            <div className="flex flex-col flex-1 gap-10 pr-5">
                
            </div>
            {goal && (
                <GoalDetails goal={goal} />
            )}
        </DetailPageLayout>
    )

}

export default Details;