import Text from '../common/Text';
import Button from '../common/Button';
import Badge from '../common/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconList } from '../svgs/IconList';

function GoalRow({ goal }) {

    const progress = Math.floor((goal.total / goal.target) * 100);
    return (
        <div className="w-full h-1/3 rounded bg-white border border-gray-400 flex justify-between">
            {/* Progress and Content */}
            <div className='px-5 py-3 flex justify-between items-center gap-20'>
                {/*Progress */}
                <div className={`radial-progress text-[${goal.color}]`} style={{ "--value": progress, "--size": "6rem" }} role='progressbar'>
                    {goal.icon ? (IconList.map((i) =>
                        i.value === goal.icon ? (
                            <FontAwesomeIcon icon={i.icon} size="2xl" color={goal.color} />
                        ) : null
                    )) : <Text>{progress}%</Text>}
                </div>
                {/*Content */}
                <div className='flex flex-col justify-center gap-1 items-start'>
                    <Text weight='semibold' variant='text-lg' className=''>{goal.name}</Text>
                    <Text weight='semibold' className='text-primary'>{goal.target} VND</Text>
                    {goal.startDate && <Text variant='text-sm' className='text-gray-500'>Start: {goal.startDate}</Text>}
                    {goal.endDate && <Text variant='text-sm' className='text-gray-500'>End: {goal.endDate}</Text>}
                </div>
            </div>
            <div className='flex justify-between gap-20'>
                <div className=' py-3 flex items-center'>
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