import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../components/common/Alert";
import TransactionCalendar from "../../components/Transaction/TransactionCalendar";
import TransactionDetails from "../../components/Transaction/TransactionDetails";
import TransactionForm from "../../components/Transaction/TransactionForm";
import TransactionList from "../../components/Transaction/TransactionList";
import { NotificationContext } from "../../context/notificationContext";
import { TransactionContext } from "../../context/transactionContext";
import * as axiosInstance from "../../services/transactions";

const Transaction = () => {
  const { setPage, selectedDate, setSelectedDate, transactions } =
    useContext(TransactionContext);
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    notiType,
  } = useContext(NotificationContext);

  setPage("transaction");
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  if (selectedDate === null) {
    setSelectedDate(new Date());
  }
  // console.log(id);

  useEffect(() => {
    async function fetchTransaction() {
      await axiosInstance
        .getTransactionDetail(id)
        .then((res) => {
          // console.log(res);
          setTransaction(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchTransaction();
  }, [id]);

  return (
    <>
      {isMessageVisible && <Alert message={message} type={notiType} />}
      {/* Create Button */}
      <div className="flex justify-start pl-10 xl:justify-end xl:px-6">
        <TransactionForm
          buttonName="Create Transaction"
          icon="file-invoice-dollar"
        />
      </div>
      {/* Main Content Page */}
      <div className="flex flex-col justify-between gap-5 px-10 xl:flex-row xl:justify-center xl:gap-12">
        <div className="flex flex-col items-center justify-center gap-10 xl:pr-5">
          {/* Calendar */}
          <TransactionCalendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            className="flex w-full justify-center"
          />
          {/* TransactionList */}
          <TransactionList transactions={transactions} />
        </div>
        {/* Details */}
        <TransactionDetails transaction={transaction} />
      </div>
    </>
  );
};

export default Transaction;
