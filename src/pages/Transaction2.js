import TransactionCalendar from "../components/Transaction/TransactionCalendar";
import TransactionList from "../components/Transaction/TransactionList";
import TransactionDetails from "../components/Transaction/TransactionDetails"
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import TransactionForm from "../components/Transaction/TransactionForm";
import Icon from "../components/common/Icon";
import { CreateTransactionIcon } from "../components/svgs/sidebarIcons";
import Button from "../components/common/Button";
import SideBar2 from "../components/common/SideBar2";

function Transaction2() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { transactionId } = useParams();
    const [isHovered, setIsHovered] = useState(false);

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (
        <div className="w-full relative">
            {/* <SideBar /> */}
            <SideBar2/>
            <div className="absolute left-72">
                <Header title='Transactions' username='Tom Vo' />
                <div className="flex justify-end my-3">
                    <TransactionForm/>
                </div>
                <div className="flex gap-12">
                    <div className="flex flex-col gap-2">
                        <TransactionCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
                        <TransactionList selectedDate={selectedDate} />
                    </div>
                    <TransactionDetails transactionId={transactionId} />
                </div>
            </div>
        </div>
    )
}

export default Transaction2;