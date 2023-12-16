import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

import * as axiosInstance from "../../services/statistics";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const IncomeExpenseInMonth = () => {
  const colors = ["#FF4560", "#00E396"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const fetchData = async () => {
      try {
        const response = await axiosInstance.compareExpenseIncomeByMonth(
          userId
        );
        setData(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, []);
  const seriesData = Object.values(data);
  console.log("series data", seriesData);
  const chartData = {
    type: "bar",
    height: 340,
    series: [
      {
        name:"Amount",
        data: seriesData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
        name:"check"
        
      },
      title: {
        text: "Income-Expense Compare",
        align: "middle",
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: Object.keys(data),
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart {...chartData} />
    </div>
  );
};

export default IncomeExpenseInMonth;
