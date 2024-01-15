import GoalRow from "./GoalRow";

function GoalList({ goals, onDelete }) {
  return (
    <div className="3xl:grid-cols-5 grid grid-cols-1 gap-5 py-3 md:grid-cols-2 md:gap-10 md:px-3 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
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
