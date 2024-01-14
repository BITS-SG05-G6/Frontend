import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../components/common/Alert";
import TransactionCalendar from "../../components/Transaction/TransactionCalendar";
import TransactionDetails from "../../components/Transaction/TransactionDetails";
import TransactionForm from "../../components/Transaction/TransactionForm";
import TransactionList from "../../components/Transaction/TransactionList";
import { NotificationContext } from "../../context/notificationContext";
import { TransactionContext } from "../../context/transactionContext";
import * as axiosInstance from "../../services/transactions";
import Loading from "../../components/common/Loading";

const Transaction = () => {
  const navigate = useNavigate();
  const { setPage, selectedDate, setSelectedDate, transactions } = useContext(TransactionContext);
  const { setIsMessageVisible, isMessageVisible, message, setMessage, notiType } = useContext(NotificationContext);

  setPage('transaction');
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  if (selectedDate === null) {
    setSelectedDate(new Date())
  }

  function handleTransactionChange() {
    setTransaction(null);
    navigate('/transaction');

  }

  useEffect(() => {
    async function fetchTransaction() {
      try {
        await axiosInstance.getTransactionDetail(id)
          .then((res) => {
            setTransaction(res);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      catch (err) {

      }
    }
    fetchTransaction();
  }, [id])

  return (
    <>
 
          {
            isMessageVisible && (
              <Alert message={message} type={notiType} />
            )
          }
          <div className="flex justify-end px-6">
            <TransactionForm buttonName="Create Transaction" icon="file-invoice-dollar" />
          </div>
          <div className="flex justify-between px-10">
            <div className="flex flex-col flex-1 gap-10 pr-5">
              <TransactionCalendar
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                className="flex justify-center"
              />
              <TransactionList transactions={transactions} />
            </div>

            <TransactionDetails transaction={transaction} onClose={handleTransactionChange} />
          </div>
     
    </>
  );
};

export default Transaction;
