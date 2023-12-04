import TransactionCard from "./TransactionCard";

function TransactionList() {
    return (
        <div className="overflow-x-auto">
            <table className="table table-sm">
                <thead>
                    <tr className="text-[#78778B] uppercase">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionCard title="Eat dinner" category="Food" amount='$23'/>
                </tbody>
            </table>

        </div>
    )
}

export default TransactionList;