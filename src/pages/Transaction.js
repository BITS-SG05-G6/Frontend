import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import SideBar from "../components/common/SideBar";
import TransactionCalendar from "../components/Transaction/TransactionCalendar";
import TransactionDetails from "../components/Transaction/TransactionDetails";
import TransactionForm from "../components/Transaction/TransactionForm";
import TransactionList from "../components/Transaction/TransactionList";
import * as axiosInstance from "../services/transactions";

const Transaction = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const [transactions, setTransactions] = useState(null);
  const [transaction, setTransaction] = useState(null);
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  // console.log(id);

  // console.log(selectedDate);
  useEffect(() => {
    async function fetchData () {
      await axiosInstance.getTransactions(selectedDate)
      .then((res) => {
        // console.log(res);
        setTransactions(res.transactions);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    fetchData();
  }, [selectedDate])

  useEffect(() => {
    async function fetchTransaction () {
      await axiosInstance.getTransactionDetail(id)
      .then((res) => {
        console.log(res);
        setTransaction(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    fetchTransaction();
  }, [id])

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
            <div className="flex flex-col flex-1 gap-10 pr-5">
              <TransactionCalendar
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                className="flex justify-center"
              />
              <TransactionList transactions={transactions} />
            </div>

            <TransactionDetails transaction={transaction} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
