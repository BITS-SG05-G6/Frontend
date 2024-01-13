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

  function handleLoading() {
    setIsLoading(!isLoading);
  }

  const handleUpdateGoal = () => {
    setIsLoading(true);
    setNewGoal(!newGoal);
    setGoalEditSuccess(false);
  };

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axiosInstance.viewSavingGoals().then((res) => {
          setGoals(res);
          setTimeout(handleLoading, 1000);
        });
      } catch (err) {
        setGoals([]);
      } finally {
        setIsLoading(true);
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
    handleLoading,
    setIsLoading
  };

  return (
    <SavingContext.Provider value={goalList}>{children}</SavingContext.Provider>
  );
};

export default SavingProvider;
