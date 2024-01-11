// Import necessary components and libraries
import {
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useContext, useEffect, useState } from "react";
import * as axiosInstance from "../../services/statistics";
import Cookies from "js-cookie";
import { statisticExpensesWeekly, statisticExpensesMonthly } from '../../services/statistics';
import { AuthContext } from "../../context/authContext";

// Define the TrendStatistic component
export default function TrendStatistic({ typeOfData, title }) {
  // State to hold fetched expense data
  const [expenseData, setExpenseData] = useState([]);
  const { userInfo } = useContext(AuthContext)
  // Fetch expense data based on typeOfData when component mounts or typeOfData changes
  useEffect(() => {
    // Retrieve user ID from the JWT token stored in cookies
    // const token = Cookies.get("token");
    // const decodedToken = jwtDecode(token);
    // const userId = decodedToken.id;

    // Fetch data based on the type provided (Weekly or Monthly)
    const fetchData = async () => {
      try {
        let response = [];
        if (typeOfData === "Weekly") {
          response = await statisticExpensesWeekly(userInfo._id);
        } else if (typeOfData === "Monthly") {
          response = await statisticExpensesMonthly(userInfo._id);
        }

        // Update the expenseData state with the fetched response (or an empty array if no response)
        setExpenseData(response || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [typeOfData]);

  // Extract categories, expenses, and incomes from fetched expense data
  const categories = Object.keys(expenseData).sort();
  const expenses = categories.map((date) => expenseData[date].expense || 0);
  const incomes = categories.map((date) => expenseData[date].income || 0);
  console.log(expenseData)
  // Configuration for the line chart using ApexCharts
  const chartConfig = {
    type: "line",
    height: 340,
    series: [
      {
        name: "Income",
        data: incomes,
        
      },
      {
        name: "Expenses",
        data: expenses, 
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        text: title,
        align: "middle",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#F178B6", "#ACCCCC"],
      
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9
        }
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },

          datetimeUTC: false, 
        },
        tickAmount: 6,
      },
      grid: {
        show: true,
        // borderColor: "#dddddd",
        strokeDashArray: 1,
        xaxis: {
          lines: {
            show: true,
          },
        },
        // padding: {
        //   top: 10,
        //   right: 20,
        // },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
    
  };
  return (
    <div>
      {/* <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      ></CardHeader> */}
     
        <Chart {...chartConfig} />
      
    </div>
  );
}
