import TransactionCalendar from "../components/Transaction/TransactionCalendar";
import TransactionList from "../components/Transaction/TransactionList";
import TransactionDetails from "../components/Transaction/TransactionDetails";
import SideBar from "../components/common/SideBar";
import Button from "../components/common/Button";

function Transaction() {
    return (
        <div className="flex">
            <SideBar />
            <div className="ms-72">
                {/* Header here... */}
                <div className="text-end my-3">
                    <Button children='Create Transaction' />
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <TransactionCalendar />
                        <TransactionList />
                    </div>
                    <TransactionDetails />
                </div>
            </div>
        </div>
    )
}

export default Transaction;