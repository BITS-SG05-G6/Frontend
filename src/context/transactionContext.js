import { createContext, useState } from "react";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {

  const [updateTransaction, setUpdateTransaction] = useState(false);

  const handleUpdateTransaction = () => {
    setUpdateTransaction(updateTransaction === true ? false : true);
  };

  const transactionList = {
    handleUpdateTransaction,
    updateTransaction
  }

  return(
    <TransactionContext.Provider value={transactionList}>
      {children}
    </TransactionContext.Provider>
  )
};

export default TransactionProvider;
