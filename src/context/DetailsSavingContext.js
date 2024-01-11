import { createContext, useContext, useState, useEffect } from "react";
import * as savingGoal from "../services/savingGoal";

export const DetailsContext = createContext(null);

const DetailsProvider = ({ children }) => {
  const [goal, setGoal] = useState({});
  const [goalTransactions, setGoalTransactions] = useState([]);

  const setDetailsData = async (goalId) => {
    try {
      // Fetch data based on the goalId
      const goalData = await savingGoal.viewSavingGoal(goalId);
      if (goalData) {
        setGoal(goalData.savingGoal);
        setGoalTransactions(goalData.transactions);
      }
    } catch (err) {
      // Handle errors if needed
      console.error("Error fetching details:", err);
    }
  };

  useEffect(() => {
    // You can add additional initialization logic here if needed
  }, []);

  const detailsData = {
    goal,
    goalTransactions,
    setDetailsData,
  };

  return (
    <DetailsContext.Provider value={detailsData}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
