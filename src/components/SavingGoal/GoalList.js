import GoalRow from "./GoalRow";

function GoalList({goals}) {

    goals = [
        {
            name: 'Buy a car',
            color: '#EF5DA8',
            startDate: '23-12-2023',
            endDate: '23-01-2024',
            target: 300,
            total: 200
        },
        {
            name: 'Rent a house',
            color: '#EF5DA8',
            startDate: '23-12-2023',
            endDate: '23-01-2024',
            target: 500,
            total: 100
        },
        {
            name: 'Investment',
            color: '#EF5DA8',
            target: 300,
            total: 34
        }
    ]
    return (
        <div className="px-3 py-3 flex flex-col gap-2">
            {goals && (
                goals.map((goal) => (
                    <GoalRow goal={goal}/>
                ))
            )}
        </div>
    );
}

export default GoalList;