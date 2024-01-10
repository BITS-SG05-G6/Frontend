function CategoryDetails({category}) {
    return (
        <div className="w-96">
            <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col gap-5 p-6">
                <div className="px-2 py-3 flex flex-col gap-2 text-center">
                    <Text weight='bold' variant='text-xl'>Parent Support</Text>
                    <Text variant="text-md" weight="semibold" className='text-primary'>500 VND</Text>
                    <div className="text-center">
                        <div className='w-100 h-100' style={{background: `${category.color}40`}}>
                            {goal.icon && (IconList.map((i) =>
                                i.value === goal.icon ? (
                                    <FontAwesomeIcon icon={i.icon} size="2xl" color={goal.color} />
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {/*Progress section */}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Current progress</Text>
                        <Text weight="semibold" className='text-pink-300'>{goal.total}</Text>
                    </div>
                    {/*Start date and end date section */}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Start Date</Text>
                        <Text weight="semibold">
                            {format(new Date(goal.startDate), "dd-MM-yyyy")}
                        </Text>
                    </div>

                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>End Date</Text>
                        <Text weight="semibold">
                            {format(new Date(goal.endDate), "dd-MM-yyyy")}
                        </Text>
                    </div>
                    {/*Status*/}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Status</Text>
                        <Badge status={goal.status} variant={goal.status.toLowerCase() === 'pending' ? "yellow" : goal.status.toLowerCase() === 'on-going' ? "blue" : "green"}></Badge>
                    </div>
                    {/*Description section */}
                    <div className="flex flex-col gap-2 justify-start">
                        <Text className="text-gray-400" weight='semibold'>Description</Text>
                        <textarea
                            className="textarea min-h-fit textarea-md rounded border border-gray-400 text-sm"
                            value={goal.description}
                            placeholder='Description'
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div >
    );


}

export default CategoryDetails;