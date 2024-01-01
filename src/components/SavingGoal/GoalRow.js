import Text from '../common/Text';
import Button from '../common/Button'

function GoalRow({goal}) {
    return (
        <div className="w-2/4 h-1/3 rounded bg-white border border-gray-400 flex justify-between">
            {/* Progress and Content */}
            <div className='px-5 py-3 flex justify-center gap-10'>
                {/*Progress */}
                <div className={`w-25 h-25 radial-progress text-[${goal.color}]`} style={{"--value": 70}} role='progressbar'>
                    70%
                </div>
                {/*Content */}
                <div className='flex flex-col justify-around items-start'>
                    <Text weight='semibold' variant='text-lg' className='pb-1'>{goal.name}</Text>
                    <Text weight='semibold' className='text-primary'>{goal.target} VND</Text>
                    {goal.startDate && <Text variant='text-sm' className='text-gray-500'>Start: {goal.startDate}</Text>}
                    {goal.endDate && <Text variant='text-sm' className='text-gray-500'>End: {goal.endDate}</Text>}
                </div>
            </div>
            {/*Buttons */}
            <div className='py-3 px-5 flex flex-wrap justify-center items-center gap-1'>
                <Button variant='blueButton' size='sm'>Add</Button>
                <Button variant='lightPrimary' size='sm'>Edit</Button>
                <Button variant='redButton' size='sm'>Delete</Button>
            </div>
        </div>
    )

}

export default GoalRow;