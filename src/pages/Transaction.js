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

function Transaction() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { transactionId } = useParams();
    const [isHovered, setIsHovered] = useState(false);

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (
        <div className="flex">
            <SideBar />

            <div className="ms-72 pe-4">
                <Header title='Transactions' username='Tom Vo' />
                <div className="text-end my-3">
                    <Button onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <Icon svg={<CreateTransactionIcon />} isHovered={isHovered} hoverColor="#EF5DA8" fillColor="#FFFFFF" />
                        <div>Create Transaction</div>
                    </Button>
                </div>
                <div className="flex gap-10">
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

export default Transaction;