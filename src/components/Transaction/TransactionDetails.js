import Button from "../common/Button";

function TransactionDetails({ title, amount }) {
    return (
        <div className="w-96 h-[660px] bg-white rounded-[10px] border border-gray-300">
            <div className="px-2 py-3 flex flex-col gap-2">
                <div className="text-gray-800 text-xl font-semibold text-center">Iphone 13 Pro Max</div>
                <div className="text-red-400 text-lg font-bold text-center">$420.84</div>
            </div>
            <div className="px-5 py-3">
                <table className='table'>
                    <tr>
                        <th className="text-gray-400">Type</th>
                        <td className="font-semibold text-end">Expense</td>
                    </tr>
                    <tr>
                        <th className='text-gray-400'>Category</th>
                        <td className="text-end font-semibold"><span className="bg-[#FCDDEC] rounded-[10px] px-4 py-1">Food & Drink</span></td>
                    </tr>
                    <tr>
                        <th className='text-gray-400'>Wallet</th>
                        <td className="text-end font-semibold"><span className="bg-[#A5A6F6] rounded-[10px] px-4 py-1">Credit card</span></td>
                    </tr>
                    <tr>
                        <th className='text-gray-400'>Date</th>
                        <td className="text-end font-semibold"><span className="bg-slate-200 rounded-[10px] px-3 py-1">Date</span></td>
                    </tr>
                </table>
            </div>
            <div className="px-4 py-3 flex flex-col gap-2">
                <div className="text-gray-400 font-semibold text-sm ms-5">Note</div>
                <div className="bg-slate-50 border rounded p-2 text-sm mx-4 my-2">Note</div>
            </div>
            <div className="py-3 flex gap-2 justify-center">
                <Button children='Edit' variant='blueButton' size='lg'/>
                <Button children='Delete' variant='redButton' size='lg' className='px-10'/>
            </div>
        </div>
    )
}

export default TransactionDetails;