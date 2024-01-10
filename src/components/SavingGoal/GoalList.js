import GoalRow from "./GoalRow";
import { Link } from "react-router-dom";

function GoalList({ goals, onDelete }) {
    console.log(goals);

    return (
        <div className="px-3 py-3 flex flex-col gap-2">
            {goals && (
                goals.map((goal) => (
                    <Link to={`/planning/${goal._id}`} key={goal._id}>
                        <GoalRow goal={goal} onDelete={onDelete} />
                    </Link>

                ))
            )}
        </div>
    );
}

export default GoalList;
