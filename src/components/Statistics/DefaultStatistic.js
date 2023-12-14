import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import * as axiosInstance from "../../services/statistics";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { statisticExpensesWeekly, statisticExpensesMonthly } from '../../services/statistics';

export default function DefaultStatistic({ typeOfData }) {
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    const token = Cookies.get("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const fetchData = async () => {
      try {
        let response;
        if (typeOfData === "Weekly") {
          response = await statisticExpensesWeekly(userId);
        } else if (typeOfData === "Monthly") {
          response = await statisticExpensesMonthly(userId);
        }

        setExpenseData(response || []); // Assuming response data is structured with totalsByDay field
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [typeOfData]);
  const categories = Object.keys(expenseData).sort();
  const expenses = categories.map((date) => expenseData[date].expense || 0);
  const incomes = categories.map((date) => expenseData[date].income || 0);
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
        data: expenses, // Use fetched expense data here
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "Transaction Trend",
        align: "left",
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
        size: 0,
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

          datetimeUTC: false, // Specify whether the dates are in UTC or local time
        },
        tickAmount: 6,
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 1,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 10,
          right: 20,
        },
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
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      ></CardHeader>
      <CardBody className="mx-48 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
