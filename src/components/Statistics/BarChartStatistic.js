import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

import * as axiosInstance from "../../services/statistics";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const BarChartStatistic = () => {
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
  const [distributionData, setDistributionData] = useState({
    "<1000": 0,
    "1000-2000": 0,
    "2000-5000": 0,
    ">5000": 0,
  });    useEffect(() => {
    const token = Cookies.get("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    const fetchData = async () => {
      const response = await axiosInstance.statisticExpensesDistribution(
        userId
      );
      setDistributionData(response);
      // console.log(response);
    };
    if (!distributionData["<1000"]) { // Condition to check if data already exists
      fetchData(); // Fetch data only if it doesn't exist
    }  }, [distributionData]);

  const seriesData = Object.values(distributionData);
  const data= [1,2,3,4];
  console.log("default",data);
  console.log("check",seriesData);
  const [chartData] = useState({
    series: [{
      name: 'Expense Distribution', 
      data: seriesData,
    }],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
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
        // categories: Object.keys(distributionData),
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
          },
        },
      },
    },
  });


  return (
    <div id="chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChartStatistic;
