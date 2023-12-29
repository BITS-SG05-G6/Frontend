import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/transactions";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {

  const [updateTransaction, setUpdateTransaction] = useState(false);

  const handleUpdateTransaction = () => {
    setUpdateTransaction(updateTransaction === true ? false : true);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchData () {
      // Fixed size for dashboard
      await axiosInstance.getTransactions(selectedDate, 7)
      .then((res) => {
        setTransactions(res.transactions);
      })
      .catch((err) => {
        setTransactions(null);
      })
    }

    fetchData();
  }, [selectedDate, updateTransaction])

  const transactionList = {
    handleUpdateTransaction,
    updateTransaction,
    selectedDate,
    setSelectedDate,
    transactions
  }

  return(
    <TransactionContext.Provider value={transactionList}>
      {children}
    </TransactionContext.Provider>
  )
};

export default TransactionProvider;
