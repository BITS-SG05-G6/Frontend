import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

import * as axiosInstance from "../../services/statistics";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const ExpensesDistributionStatistic = () => {
  const colors = [
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#546E7A",
    "#26a69a",
    "#D10CE8",
  ];
  const [distributionData, setDistributionData] = useState([]

  );

  useEffect(() => {
    const token = Cookies.get("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const fetchData = async () => {
      try {
        const response = await axiosInstance.statisticExpensesDistribution(
          userId
        );
        setDistributionData(response);
        console.log(response)
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, []);
  const seriesData = Object.values(distributionData);
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
      },
      colors: colors,
      title: {
        text: "Expenses Distribution",
        align: "middle",
      },
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
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },

        },
        tickAmount: 2,
      },
      xaxis: {
        categories: Object.keys(distributionData),
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
      <Chart
        {...chartData}
      />
    </div>
  );
};

export default ExpensesDistributionStatistic;
