import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, categories }) => {
  const colors = [
    "#EF5DA8",
    "#00E396",
    "#008FFB",

    "#FF4560",
    "#775DD0",
    "#546E7A",
    "#26a69a",
    "#D10CE8",
  ];

  const chartData = {
    type: "bar",
    height: 340,
    series: [
      {
        name: "Amount",
        data: data,
      },
    ],
    options: {
      chart: {
        height: 350,

        toolbar: {
          show: false,
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
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      xaxis: {
        categories: categories,
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
    <div id="chart" className="">
      <Chart {...chartData} />
    </div>
  );
};

export default BarChart;
