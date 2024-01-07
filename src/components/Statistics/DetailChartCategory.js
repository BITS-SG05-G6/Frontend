import React, { useState, useEffect } from "react";

import * as axiosInstance from "../../services/detailStatistic";
import LineChart from "./LineChart";
import Text from "../common/Text";
import Select from "../common/Select";

const DetailChartCategory = ({categoryID, currency}) => {
  const typeTrendStatistic = ["This Week", "This Month", "Last Month"];

  const [selectedType, setSelectedType] = useState(typeTrendStatistic[0]);

  //Line chart data
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedType === "This Week") {
          response = await axiosInstance.getCategoryStatisticsWeek(
            categoryID,
            currency
          );
        }
        // else if (selectedType === "This Month") {
        //   response = await axiosInstance.statisticExpensesMonthly();
        // } else if (selectedType === "Last Month") {
        //   response = await axiosInstance.statisticExpensesLastMonth();
        // }
        setExpenseData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedType]);
  const categories = Object.keys(expenseData).sort();
  const expenses = categories.map((date) => expenseData[date].expense || 0);
  const incomes = categories.map((date) => expenseData[date].income || 0);
  return (
    <div className="shadow-md border-[1px] border-gray-300 rounded-lg">
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center ml-4">
          <Text children="Trend Statistic" weight="bold" />
        </div>
        <div className="flex items-center mr-10 mt-5">
          <Select
            name="type"
            size="small"
            value={selectedType}
            onChange={handleTypeChange}
            options={typeTrendStatistic}
            className=""
          />
        </div>
      </div>
      <LineChart
        categories={categories}
        expenses={expenses}
        incomes={incomes}
      />
    </div>
  );
};

export default DetailChartCategory;
