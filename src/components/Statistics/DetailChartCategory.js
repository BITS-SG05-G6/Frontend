import React, { useState, useEffect } from "react";

import * as axiosInstance from "../../services/detailStatistic";
import LineChart from "./LineChart";
import Text from "../common/Text";
import Select from "../common/Select";

const DetailChartCategory = ({ categoryId }) => {
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
          response = await axiosInstance.getCategoryStatisticsWeek(categoryId);
        } else if (selectedType === "This Month") {
          response =
            await axiosInstance.getCategoryStatisticsThisMonth(categoryId);
          // console.log("category detail", response);
        } else if (selectedType === "Last Month") {
          response =
            await axiosInstance.getCategoryStatisticsLastMonth(categoryId);
        }
        setExpenseData(response || []);
      } catch (error) {}
    };
    fetchData();
  }, [selectedType, categoryId]);
  const categories = Object.keys(expenseData).sort();
  const expenses = categories.map((date) => expenseData[date].expense || 0);
  const incomes = categories.map((date) => expenseData[date].income || 0);
  return (
    <div className="w-full rounded-lg border-[1px] border-gray-300 shadow-md lg:col-span-2">
      <div className="flex w-full flex-row justify-between">
        <div className="ml-4 flex items-center">
          <Text children="Category Detail" weight="bold" />
        </div>
        <div className="mr-10 mt-5 flex items-center">
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
