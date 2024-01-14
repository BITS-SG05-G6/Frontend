import React, { useState } from "react";
import Chart from "react-apexcharts";
import Text from "../common/Text";
import Select from "../common/Select";

const PieChart = ({ title, data, categories }) => {
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
  const chartConfig = {
    width: 380,
    type: "pie",
    series: data,
    options: {
      chart: {},
      labels: categories,
      colors: colors,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },

            legend: {
              position: "bottom",
            },
          },
        },
      ],
      // title: {
      //   text: "Pie chart",
      //   align: "middle",
      // },
    },
  };
  const type = ["Last Week", "Last Month", "Total"];
  const [selectedType, setSelectedType] = useState("Last Week"); // State to track selected type
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };

  return (
    <div id="chart" className="flex flex-col">
      <Chart {...chartConfig} className="flex justify-center" />
    </div>
  );
};

export default PieChart;
