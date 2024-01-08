import React, { useState, useEffect } from "react";

import * as axiosInstance from "../services/statistics";
import Select from "../components/common/Select";
import SideBar from "../components/common/SideBar";
import Text from "../components/common/Text";
import Header from "../components/common/Header";
import PieChart from "../components/Statistics/PieChart";
import Cookies from "js-cookie";

import LineChart from "../components/Statistics/LineChart";
import BarChart from "../components/Statistics/BarChart";
import StatisticCard from "../components/Statistics/StatisticCard";

const StatisticPage = () => {

  const type = ["This Week", "Last Month", "Total"];
  const typeTrendStatistic = ["This Week", "This Month", "Last Month"];
  //Chart  - Trend Statistic Chart
  const [selectedType, setSelectedType] = useState(typeTrendStatistic[0]);
  //Chart  - Distribution chart
  const [selectedTypeChart2, setSelectedTypeChart2] = useState(type[2]);
  //Chart  - Category Income
  const [selectedTypeChart3, setSelectedTypeChart3] = useState(type[2]);
  //Chart  - Category Expense
  const [selectedTypeChart4, setSelectedTypeChart4] = useState(type[2]);
  //Chart  - Income/Expense Ratio Chart
  const [selectedTypeChart5, setSelectedTypeChart5] = useState(type[2]);
  //Chart  - Wallet Expense
  const [selectedTypeChart6, setSelectedTypeChart6] = useState(type[2]);

  //Handle change data of chart
  //Chart  - Trend Statistic Chart
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };

  //Chart  - Distribution chart

  const handleTypeChangeChart2 = (event) => {
    setSelectedTypeChart2(event.target.value);
  };

  //Chart  - Category Income
  const handleTypeChangeChart3 = (event) => {
    setSelectedTypeChart3(event.target.value);
  };

  //Chart  - Category Expense
  const handleTypeChangeChart4 = (event) => {
    setSelectedTypeChart4(event.target.value);
  };
  //Chart  - Income/Expense Ratio Chart

  const handleTypeChangeChart5 = (event) => {
    setSelectedTypeChart5(event.target.value);
  };

  //Chart  - Wallet Expense
  const handleTypeChangeChart6 = (event) => {
    setSelectedTypeChart6(event.target.value);
  };

  //Line chart data
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedType === "This Week") {
          response = await axiosInstance.statisticExpensesWeekly();
        } else if (selectedType === "This Month") {
          response = await axiosInstance.statisticExpensesMonthly();
        } else if (selectedType === "Last Month") {
          response = await axiosInstance.statisticExpensesLastMonth();
        }
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

  //Distribution data
  const [distributionData, setDistributionData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart2 === "This Week") {
          response = await axiosInstance.ExpensesDistributionLastWeek();
        } else if (selectedTypeChart2 === "Last Month") {
          response = await axiosInstance.ExpensesDistributionLastMonth();
        } else if (selectedTypeChart2 === "Total") {
          response = await axiosInstance.ExpensesDistribution();
        }

        setDistributionData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart2]);
  const distributionVal = Object.values(distributionData);
  const distributionKey = Object.keys(distributionData);

  //Category Income
  const [inCatData, setInCatData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart3 === "This Week") {
          response = await axiosInstance.categoryIncomeLastWeek();
        } else if (selectedTypeChart3 === "Last Month") {
          response = await axiosInstance.categoryIncomeLastMonth();
        } else if (selectedTypeChart3 === "Total") {
          response = await axiosInstance.categoryIncomeTotal();
        }
        setInCatData(response.incomeByCategory || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart3]);
  const IncomeAmount = inCatData.map((category) => category.totalIncome);
  const CategoryIncome = inCatData.map((category) => category.categoryName);

  //Category Expense
  const [exCatData, setExCatData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart4 === "Total") {
          response = await axiosInstance.categoryExenseTotal();
          console.log(response);
        } else if (selectedTypeChart4 === "This Week") {
          response = await axiosInstance.categoryExenseLastWeek();
          console.log(response);
        } else if (selectedTypeChart4 === "Last Month") {
          response = await axiosInstance.categoryExenseLastMonth();
        }
        setExCatData(response.expensesByCategory || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart4]);
  const ExpenseAmount = exCatData.map((category) => category.totalExpense);
  const Category = exCatData.map((category) => category.categoryName);

  //Income/Expense Ratio
  const [InExData, setInExData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart5 === "This Week") {
          response = await axiosInstance.compareExpenseIncomeByWeek();
        } else if (selectedTypeChart5 === "Last Month") {
          response = await axiosInstance.compareExpenseIncomeByMonth();
        } else if (selectedTypeChart5 === "Total") {
          response = await axiosInstance.compareExpenseIncomeTotal();
        }
        setInExData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart5]);
  const InExVal = Object.values(InExData);
  const InExKey = Object.keys(InExData);

  //Wallet Expense (6th Chart)
  const [walletData, setWalletData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart6 === "This Week") {
          response = await axiosInstance.walletExenseWeek();
        } else if (selectedTypeChart6 === "Last Month") {
          response = await axiosInstance.walletExenseMonth();
        } else if (selectedTypeChart6 === "Total") {
          response = await axiosInstance.walletExenseTotal();
        }
        setWalletData(response.expenseByWallet || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart6]);

  const walletAmount = walletData.map((category) => category.totalExpense);
  const categoryWallet = walletData.map((category) => category.walletName);
  return (
    <>
      <SideBar />
      <div className="pl-56 flex flex-col gap-5 mb-10">
        {/* NavBar */}
        <div className="sticky top-0 bg-white z-10 ml-4">
          <Header title="Statistic" username="Anh Bui" />
        </div>
        {/* Card statistic */}
        {/* <div class="grid gap-8 grid-cols-3 mb-10 px-10">
          <div>
            <StatisticCard type="Total Balance" isPrimary="true" amount="$1250"/>
          </div>

          <div>
            <StatisticCard type="Total Income" isPrimary="true"  amount="$1250"/>
          </div>
          <div>
            <StatisticCard type="Total Expense" isPrimary="true"  amount="$1250"/>
          </div>
         
        </div> */}
        <div className="px-10">
          {/* Trending Income/Expense Statistic */}
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
        </div>

        <div class="grid grid-cols-3 gap-6 px-10">
          {/* Chart Distribution */}
          {/* <div className="shadow-md">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center ml-4">
                <Text children="Distribution Expense Data" weight="bold" />
              </div>
              <div className="flex items-center mr-10">
                <Select
                  name="type"
                  size="small"
                  value={selectedTypeChart2}
                  onChange={handleTypeChangeChart2}
                  options={type}
                  className=""
                />
              </div>
            </div>
            <BarChart data={distributionVal} categories={distributionKey} />
          </div> */}

          {/*  Income/Expense Ratio Statistic */}

          <div className="col-span-2">
            <div className="shadow-md border-[1px] border-gray-300 rounded-lg">
              <div className="flex flex-row justify-between w-full">
                <div className="flex items-center ml-4">
                  <Text children="Income/Expense Ratio" weight="bold" />
                </div>
                <div className="flex items-center mr-10">
                  <Select
                    name="type"
                    size="small"
                    value={selectedTypeChart5}
                    onChange={handleTypeChangeChart5}
                    options={type}
                    className=" mt-5"
                  />
                </div>
              </div>
              <BarChart data={InExVal} categories={InExKey} />
            </div>
          </div>

          {/* Category Expense */}
          <div className="shadow-md border-[1px] border-gray-300 rounded-lg">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center ml-4">
                <Text children="Category Expense" weight="bold" />
              </div>
              <div className="flex items-center mr-10">
                <Select
                  name="type"
                  size="small"
                  value={selectedTypeChart4}
                  onChange={handleTypeChangeChart4}
                  options={type}
                  className="mt-5"
                />
              </div>
            </div>
            <PieChart data={ExpenseAmount} categories={Category} />
          </div>

          {/* Category Income */}
          <div className="shadow-md border-[1px] border-gray-300 rounded-lg">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center ml-4">
                <Text children="Category Income" weight="bold" />
              </div>
              <div className="flex items-center mr-10">
                <Select
                  name="type"
                  size="small"
                  value={selectedTypeChart3}
                  onChange={handleTypeChangeChart3}
                  options={type}
                  className=" mt-5"
                />
              </div>
            </div>
            <PieChart data={IncomeAmount} categories={CategoryIncome} />
          </div>
          {/* Wallet Expense */}
          <div className="col-span-2">
            <div className="shadow-md border-[1px] border-gray-300 rounded-lg">
              <div className="flex flex-row justify-between w-full">
                <div className="flex items-center ml-4">
                  <Text children="Wallet Expense" weight="bold" />
                </div>
                <div className="flex items-center mr-10">
                  <Select
                    name="type"
                    size="small"
                    value={selectedTypeChart6}
                    onChange={handleTypeChangeChart6}
                    options={type}
                    className=" mt-5"
                  />
                </div>
              </div>
              <BarChart data={walletAmount} categories={categoryWallet} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
