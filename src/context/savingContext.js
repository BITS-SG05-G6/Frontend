import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/savingGoal";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const SavingContext = createContext(null);

const SavingProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext)
  // console.log(userInfo);
  const { handleUpdateTransaction } = useContext(TransactionContext)

  const [newGoal, setNewGoal] = useState(false);
  const handleUpdateGoal = () => {
    setNewGoal(!newGoal);
  };

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.viewSavingGoals().then((res) => {
          setGoals(res);
        });
      } catch (err) {
        setGoals([]);
      }
    }

    fetchData();
  }, [userInfo?.id, newGoal, handleUpdateTransaction]);

  const goalList = {
    handleUpdateGoal,
    goals,
  };

  return (
    <SavingContext.Provider value={goalList}>
      {children}
    </SavingContext.Provider>
  );
};

export default SavingProvider;
