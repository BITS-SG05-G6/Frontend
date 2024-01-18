import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/transactions";
import { AuthContext } from "./authContext";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);

  const [updateTransaction, setUpdateTransaction] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdateTransaction = () => {
    setIsLoading(true);
    setUpdateTransaction(updateTransaction === true ? false : true);
  };

  const [selectedDate, setSelectedDate] = useState();
  // Page useState for rendering transaction list
  const [page, setPage] = useState("transaction");
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        let res;
        if (selectedDate) {
          res = await axiosInstance.getTransactions(selectedDate);
        } else {
          if (page === "dashboard") {
            res = await axiosInstance.getTransactions();
          } else {
            setTransactions(null);
          }
        }
        setTransactions(res.transactions);
      } catch (err) {
        setTransactions(null);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    // if (userInfo) {
      fetchData();
    // }
    
  }, [selectedDate, updateTransaction, page, userInfo?._id]);

  const transactionList = {
    handleUpdateTransaction,
    updateTransaction,
    selectedDate,
    setSelectedDate,
    transactions,
    setPage,
    isLoading,
    setIsLoading,
  };

  return (
    <TransactionContext.Provider value={transactionList}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
