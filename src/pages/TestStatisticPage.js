import React, { useState } from "react";

import TrendStatistic from "../components/Statistics/TrendStatistic";
import * as axiosInstance from "../services/statistics";
import ExpensesDistributionStatistic from "../components/Statistics/ExpensesDistributionStatistic";
import Select from "../components/common/Select";
import IncomeExpenseInMonth from '../components/Statistics/IncomeExpenseInMonth';

const TestStatisticPage = () => {
  const type = ["Last Week", "Last Month"];
  const [selectedType, setSelectedType] = useState("Last Week"); // State to track selected type

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };
  return (
    <>
      <Select
        // label="Type"
        name="type"
        size="small"
        value={selectedType} // Pass selectedType as value
        onChange={handleTypeChange}
        options={type}
      />
      {selectedType === "Last Week" && <TrendStatistic typeOfData="Weekly" />}
      {selectedType === "Last Month" && <TrendStatistic typeOfData="Monthly" />}
      
      <ExpensesDistributionStatistic />

      <IncomeExpenseInMonth/>
    </>
  );
};

export default TestStatisticPage;
