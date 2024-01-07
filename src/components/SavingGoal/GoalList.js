import GoalRow from "./GoalRow";

function GoalList({goals, onDelete}) {
    console.log(goals);
    // goals = [
    //     {
    //         name: 'Buy a car',
    //         color: '#EF5DA8',
    //         startDate: '23-12-2023',
    //         endDate: '23-01-2024',
    //         target: 300,
    //         total: 200,
    //         status: 'On-going'
    //     },
    //     {
    //         name: 'Rent a house',
    //         color: '#EF5DA8',
    //         startDate: '23-12-2023',
    //         endDate: '23-01-2024',
    //         target: 500,
    //         total: 100,
    //         status: 'On-going'
    //     },
    //     {
    //         name: 'Investment',
    //         color: '#EF5DA8',
    //         target: 300,
    //         total: 34,
    //         status: 'On-going'
    //     }
    // ]
    return (
        <div className="px-3 py-3 flex flex-col gap-2">
            {goals && (
                goals.map((goal) => (
                    <GoalRow goal={goal} onDelete={onDelete}/>
                ))
            )}
        </div>
    );
}

export default GoalList;
