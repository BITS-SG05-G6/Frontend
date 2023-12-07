import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import TransactionCalendar from "../components/Transaction/TransactionCalendar";
import TransactionDetails from "../components/Transaction/TransactionDetails";
import TransactionForm from "../components/Transaction/TransactionForm";
import TransactionList from "../components/Transaction/TransactionList";

const Transaction = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { transactionId } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    <>
      <div>
        <SideBar />

        <div className="pl-60 flex flex-col gap-5">
          <Header title="Transactions" username="Tom Vo" />
          <div className="flex justify-end px-6">
            <TransactionForm />
          </div>
          <div className="flex justify-between px-10">
            <div className="flex flex-col flex-1 gap-10">
              <TransactionCalendar
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                className='flex justify-center'
              />
              <TransactionList selectedDate={selectedDate} />
            </div>
            
           
            <TransactionDetails transactionId={transactionId} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
