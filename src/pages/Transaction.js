import TransactionCalendar from "../components/Transaction/TransactionCalendar";
import TransactionList from "../components/Transaction/TransactionList";
import TransactionDetails from "../components/Transaction/TransactionDetails";
import SideBar from "../components/common/SideBar";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import {useParams} from 'react-router-dom';

function Transaction() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const {transactionId} = useParams();

    function handleDateChange(date) {
        setSelectedDate(date);
    } 
    return (
        <div className="flex">
            <SideBar />
            <div className="ms-72">
                <Header title='Transactions' username='Tom Vo'/>
                <div className="text-end my-3">
                    <Button children='Create Transaction' />
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <TransactionCalendar selectedDate={selectedDate} onDateChange={handleDateChange}  />
                        <TransactionList selectedDate={selectedDate} />
                    </div>
                    <TransactionDetails transactionId={transactionId} />
                </div>
            </div>
        </div>
    )
}

export default Transaction;