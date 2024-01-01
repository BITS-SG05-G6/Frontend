import Text from "../common/Text";

function GoalDetails({ goal, status }) {
    return (
        <div className="w-96">
            {/* {transaction ? ( */}
            <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col gap-5 p-6">
                <div className="px-2 py-3 flex flex-col gap-2 text-center">
                    <Text weight='bold' variant='text-xl'>Buy a car</Text>
                    <Text variant="text-md" weight="semibold" className='text-primary'>500 VND</Text>
                    <div className="text-center">
                        <div className={`radial-progress text-blue-400`} style={{ "--value": 60, "--size": "7rem" }} role='progressbar'>
                            60%
                        </div>
                    </div>
                </div>
                {/* <div className={`w-25 h-25 radial-progress text-[${goal.color}]`} style={{"--value": progress}} role='progressbar'>
                    {progress}%
                </div> */}
                <div className="flex flex-col gap-2">
                    {/*Progress section */}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Current progress</Text>
                        <Text weight="semibold" className='text-pink-300'>300 VND</Text>
                    </div>
                    {/*Start date and end date section */}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Start Date</Text>
                        <Text weight="semibold">
                            23-12-2023
                            {/* {format(new Date(transaction.date), "dd-MM-yyyy")} */}
                        </Text>
                    </div>

                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>End Date</Text>
                        <Text weight="semibold">
                            23-01-2024
                            {/* {format(new Date(transaction.date), "dd-MM-yyyy")} */}
                        </Text>
                    </div>
                    {/*Status*/}
                    <div className="flex justify-between">
                        <Text className="text-gray-400" weight='semibold'>Status</Text>
                        <Text
                            variant="text-sm"
                            className="rounded-xl px-3 py-1 bg-gray-100"
                            style={{
                                    color: status === 'pending' ? '#5D5FEF': status === 'in-progress' ? '#0077FF' : '',    
                            }}
                        >
                        Complete
                    </Text>
                </div>
                {/*Description section */}
                <div className="flex flex-col gap-2 justify-start">
                    <Text className="text-gray-400" weight='semibold'>Description</Text>
                    <textarea
                        className="textarea min-h-fit textarea-md rounded border border-gray-400 text-sm"
                        //   value=
                        placeholder='Description'
                        disabled
                    />
                </div>
            </div>

        </div>
        </div >
        // {/* ) 
        //     : (
        //       <div className="relative top-1/3 flex flex-col justify-start items-center">
        //         <img
        //           src={require("../../assets/transactionplaceholder.png")}
        //           width="30%"
        //           height="30%"
        //           className=""
        //           alt="no transaction"
        //         ></img>
        //         <div>
        //           <Text className="text-slate-400" variant="text-md">
        //             Choose a transaction
        //           </Text>
        //         </div>
        //       </div>
        //     )} */}
        //   </div>
    );

}

export default GoalDetails;