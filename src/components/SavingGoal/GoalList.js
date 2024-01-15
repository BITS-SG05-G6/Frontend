import GoalRow from "./GoalRow";
import { Link } from "react-router-dom";

function GoalList({ goals, onDelete }) {
  return (
    <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2 lg:flex lg:flex-col">
      {goals &&
        goals.map((goal) => (
          <GoalRow
            goal={goal}
            onDelete={onDelete}
            href={`/planning/${goal._id}`}
          />
        ))}
    </div>
  );
}

export default GoalList;
