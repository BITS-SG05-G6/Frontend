import React, { useState, useEffect } from "react";

import * as axiosInstance from "../services/statistics";
import Select from "../components/common/Select";
import SideBar from "../components/common/SideBar";
import Text from "../components/common/Text";
import Header from "../components/common/Header";
import PieChart from "../components/Statistics/PieChart";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import LineChart from "../components/Statistics/LineChart";
import BarChart from "../components/Statistics/BarChart";

const TestStatisticPage = () => {
  const token = Cookies.get("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  const type = ["This Week", "Last Month", "Total"];
  const typeTrendStatistic = ["This Week", "This Month", "Last Month"];
  //Chart 1 - Trend Statistic Chart
  const [selectedType, setSelectedType] = useState("This Week");
  //Chart 2 - Distribution chart
  const [selectedTypeChart2, setSelectedTypeChart2] = useState("This Week");
  //Chart 3 - Category Income
  const [selectedTypeChart3, setSelectedTypeChart3] = useState("This Week");
  //Chart 4 - Category Expense
  const [selectedTypeChart4, setSelectedTypeChart4] = useState("This Week");
  //Chart 5 - Income/Expense Ratio Chart
  const [selectedTypeChart5, setSelectedTypeChart5] = useState("This Week");
  //Chart 6 - Wallet Expense
  const [selectedTypeChart6, setSelectedTypeChart6] = useState("This Week");

  //Handle change data of chart
  //Chart 1 - Trend Statistic Chart
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };

  //Chart 2 - Distribution chart

  const handleTypeChangeChart2 = (event) => {
    setSelectedTypeChart2(event.target.value);
  };

  //Chart 3 - Category Income
  const handleTypeChangeChart3 = (event) => {
    setSelectedTypeChart3(event.target.value);
  };

  //Chart 4 - Category Expense
  const handleTypeChangeChart4 = (event) => {
    setSelectedTypeChart4(event.target.value);
  };
  //Chart 5 - Income/Expense Ratio Chart

  const handleTypeChangeChart5 = (event) => {
    setSelectedTypeChart5(event.target.value);
  };

  //Chart 6 - Wallet Expense
  const handleTypeChangeChart6 = (event) => {
    setSelectedTypeChart6(event.target.value);
  };

  //Line chart data (1st chart)
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedType === "This Week") {
          response = await axiosInstance.statisticExpensesWeekly(userId);
        } else if (selectedType === "This Month") {
          response = await axiosInstance.statisticExpensesMonthly(userId);
        } else if (selectedType === "Last Month") {
          response = await axiosInstance.statisticExpensesLastMonth(userId);
        }
        setExpenseData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedType, userId]);
  const categories = Object.keys(expenseData).sort();
  const expenses = categories.map((date) => expenseData[date].expense || 0);
  const incomes = categories.map((date) => expenseData[date].income || 0);

  //Distribution data (2nd chart)
  const [distributionData, setDistributionData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart2 === "This Week") {
          response = await axiosInstance.ExpensesDistributionLastWeek(userId);
        } else if (selectedTypeChart2 === "Last Month") {
          response = await axiosInstance.ExpensesDistributionLastMonth(userId);
        } else if (selectedTypeChart2 === "Total") {
          response = await axiosInstance.ExpensesDistribution(userId);
        }

        setDistributionData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart2, userId]);
  const distributionVal = Object.values(distributionData);
  const distributionKey = Object.keys(distributionData);

  //Category Income (3rd Chart)
  const [inCatData, setInCatData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart3 === "This Week") {
          response = await axiosInstance.categoryIncomeLastWeek(userId);
        } else if (selectedTypeChart3 === "Last Month") {
          response = await axiosInstance.categoryIncomeLastMonth(userId);
        } else if (selectedTypeChart3 === "Total") {
          response = await axiosInstance.categoryIncomeTotal(userId);
        }
        setInCatData(response.incomeByCategory || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart3, userId]);
  const IncomeAmount = inCatData.map((category) => category.totalIncome);
  const CategoryIncome = inCatData.map((category) => category.categoryName);

  //Category Expense (4th Chart)
  const [exCatData, setExCatData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart4 === "This Week") {
          response = await axiosInstance.categoryExenseTotal(userId);
        } else if (selectedTypeChart4 === "Last Month") {
          response = await axiosInstance.categoryExenseLastWeek(userId);
        } else if (selectedTypeChart4 === "Total") {
          response = await axiosInstance.categoryExenseLastMonth(userId);
        }
        setExCatData(response.expensesByCategory || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart4, userId]);
  const ExpenseAmount = exCatData.map((category) => category.totalExpense);
  const Category = exCatData.map((category) => category.categoryName);

  //Income/Expense Ratio (5th Chart)
  const [InExData, setInExData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedTypeChart5 === "This Week") {
          response = await axiosInstance.compareExpenseIncomeByWeek(userId);
        } else if (selectedTypeChart5 === "Last Month") {
          response = await axiosInstance.compareExpenseIncomeByMonth(userId);
        } else if (selectedTypeChart5 === "Total") {
          response = await axiosInstance.compareExpenseIncomeTotal(userId);
        }
        setInExData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedTypeChart5, userId]);
  const InExVal = Object.values(InExData);
  const InExKey = Object.keys(InExData);

    //Wallet Expense (6th Chart)
    const [walletData, setWalletData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          let response = [];
          if (selectedTypeChart6 === "This Week") {
            response = await axiosInstance.walletExenseWeek(userId);
          } else if (selectedTypeChart6 === "Last Month") {
            response = await axiosInstance.walletExenseMonth(userId);
          } else if (selectedTypeChart6 === "Total") {
            response = await axiosInstance.walletExenseTotal(userId);
          }
          setWalletData(response.expenseByWallet || []);
        } catch (error) {
          console.error("Error fetching expenses:", error);
        }
      };
      fetchData();
    }, [selectedTypeChart6, userId]);

    const walletAmount = walletData.map((category) => category.totalExpense);
    const categoryWallet = walletData.map((category) => category.walletName);
  return (
    <>
      <SideBar />
      <div className="pl-80 flex flex-col gap-5">
        <Header title="Statistic" username="Anh Bui" />
        <div class="grid gap-4 grid-cols-2 pr-5">

          {/* Chart 1 */}
          <div className="shadow-md">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center ml-4">
                <Text children="Trend Statistic" weight="bold" />
              </div>
              <div className="flex items-center mr-10">
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
          {/* Chart 2 */}
          <div className="shadow-md">
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
          </div>

          {/* Chart 3 */}
          <div className="shadow-md">
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
                  className=""
                />
              </div>
            </div>
            <PieChart
              data={IncomeAmount}
              categories={CategoryIncome}
            />
          </div>

          {/* Chart 4 */}
          <div className="shadow-md">
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
                  className=""
                />
              </div>
            </div>
            <PieChart
              title="Categories Distribution"
              data={ExpenseAmount}
              categories={Category}
            />
          </div>

          {/* Chart 5 */}
          <div className="shadow-md">
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
                  className=""
                />
              </div>
            </div>
            <BarChart data={InExVal} categories={InExKey} />
          </div>
          {/* Chart 6 */}
          <div className="shadow-md">
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
                  className=""
                />
              </div>
            </div>
            <BarChart data={walletAmount} categories={categoryWallet} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestStatisticPage;
