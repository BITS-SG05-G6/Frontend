import DashboardListRow from "./DashboardListRow";


function DashboardList({ array, listType }) {

    return (
        <table className="table table-sm text-center">
            {/* Render titles for the Transaction section  */}
            {listType === 'transaction' && (
                <>
                    <thead>
                        <tr className="uppercase">
                            <th>Title</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                </>
            )}
            <tbody>
                {array.map((obj) => (
                    <DashboardListRow list={listType}
                        obj={obj}
                    />
                ))}
            </tbody>
        </table>


    )
}

export default DashboardList;