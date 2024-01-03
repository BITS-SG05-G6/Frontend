import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/transactions";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {

  const [updateTransaction, setUpdateTransaction] = useState(false);

  const handleUpdateTransaction = () => {
    setUpdateTransaction(updateTransaction === true ? false : true);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchData () {
      try {
        let res;
        if (selectedDate) {
          res = await axiosInstance.getTransactions(selectedDate);
        }
        else {
          res = await axiosInstance.getTransactions();
        }
        setTransactions(res.transactions);  
      }
      catch (err) {
        setTransactions(null);
      }
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
