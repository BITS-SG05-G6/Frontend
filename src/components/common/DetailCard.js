import Text from "./Text";

function DetailCard({ obj, type }) {
    return (
        <div className="w-96">
            <div className="px-2 py-3 flex flex-col gap-2 text-center">
                <Text weight='bold' variant='text-xl'>Buy a car</Text>
                {type === 'goal' ? (
                    <>
                        <Text variant="text-md" weight="semibold" className='text-primary'>500 VND</Text>
                        <div className="text-center">
                            <div className={`radial-progress text-blue-400`} style={{ "--value": 60, "--size": "7rem" }} role='progressbar'>
                                60%
                            </div>
                        </div>
                    </>
                ) : (
                    <Text variant="text-md" weight="semibold" className='text-primary'>500 VND</Text>
                )
                }
            </div>
        </div>
    )

};

export default DetailCard;