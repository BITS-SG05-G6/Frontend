import Text from "./Text";


function Loading({ isLoading }) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isLoading ? '' : 'hidden'}`}>
            <div className="modal-overlay bg-black opacity-50 fixed inset-0"></div>
            <div className="modal-box w-1/4 h-1/4 bg-white rounded-lg p-6 flex justify-center gap-5 items-center ">
                <div className="loading loading-spinner text-secondary loading-lg flex "></div>
                <Text className='text-gray-900' variant='text-lg'>Loading...</Text>
            </div>
        </div>
    )

}

export default Loading;