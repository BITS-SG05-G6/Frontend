import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/transactions";
import { AuthContext } from "./authContext";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)

  const [updateTransaction, setUpdateTransaction] = useState(false);

  const handleUpdateTransaction = () => {
    setUpdateTransaction(updateTransaction === true ? false : true);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchData () {
      await axiosInstance.getTransactions(selectedDate)
      .then((res) => {
        setTransactions(res.transactions);
      })
      .catch((err) => {
        setTransactions(null);
      })
    }

    fetchData();
  }, [selectedDate, updateTransaction, userInfo])

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
