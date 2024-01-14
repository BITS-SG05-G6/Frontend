import { createContext, useContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/savingGoal";
import { AuthContext } from "./authContext";
import { TransactionContext } from "./transactionContext";

export const SavingContext = createContext(null);

const SavingProvider = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);

  const [newGoal, setNewGoal] = useState(false);
  const [goalEditSuccess, setGoalEditSuccess] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const handleUpdateGoal = () => {
    setIsLoading(true);
    setNewGoal(!newGoal);
    setGoalEditSuccess(false);
  };

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        await axiosInstance.viewSavingGoals().then((res) => {
          setGoals(res);
        });
      } catch (err) {
        setGoals([]);
      } 
      finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }

    fetchData();
  }, [userInfo?.id, newGoal, handleUpdateTransaction, goalEditSuccess]);

  const goalList = {
    handleUpdateGoal,
    goals,
    setGoalEditSuccess,
    isUpdate,
    setIsUpdate,
    isLoading,
    setIsLoading
  };

  return (
    <SavingContext.Provider value={goalList}>{children}</SavingContext.Provider>
  );
};

export default SavingProvider;
