import Text from '../common/Text';
import Button from '../common/Button';
import Badge from '../common/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconList } from '../svgs/IconList';

function GoalRow({ goal }) {

    const progress = Math.floor((goal.total / goal.target) * 100);
    return (
        <div className="w-full px-5 py-3 h-1/3 rounded-[10px] bg-white border border-gray-400 grid grid-cols-12">
            {/* Progress and Content */}

            {/*Progress */}
            <div className={`radial-progress text-[${goal.color}] col-span-2`} style={{ "--value": progress, "--size": "7rem", background: `${goal.color}20` }} role='progressbar'>
                {goal.icon ? (IconList.map((i) =>
                    i.value === goal.icon ? (
                        <FontAwesomeIcon icon={i.icon} size="2xl" color={goal.color} />
                    ) : null
                )) : <Text>{progress}%</Text>}
            </div>
            {/*Content */}
            <div className='flex flex-col justify-center gap-1 items-start col-span-2'>
                <Text weight='semibold' variant='text-lg' className=''>{goal.name}</Text>
                <Text weight='semibold' className='text-primary'>{goal.target} VND</Text>

            </div>
            <div className='px-5 flex flex-col gap-1 items-start justify-center col-span-3'>
                {goal.startDate && <Text className='text-gray-500'><span className='text-black'>Start: </span>{goal.startDate}</Text>}
                {goal.endDate && <Text className='text-gray-500'><span className='text-black'>End: </span>{goal.endDate}</Text>}
            </div>
            {/*Status and action buttons */}
            <div className='flex justify-between gap-20 col-span-5'>
                <div className='py-3 flex items-center'>
                    <Badge status={goal.status} variant={goal.status.toLowerCase() === 'pending' ? "yellow" : goal.status.toLowerCase() === 'on-going' ? "blue" : "green"}></Badge>
                </div>
                {/*Buttons */}
                <div className='py-3 px-5 flex flex-wrap justify-center items-center gap-1'>
                    <Button variant='blueButton' size='sm'>Add</Button>
                    <Button variant='lightPrimary' size='sm'>Edit</Button>
                    <Button variant='redButton' size='sm'>Delete</Button>
                </div>
            </div>

        </div>
    )

}

export default GoalRow;