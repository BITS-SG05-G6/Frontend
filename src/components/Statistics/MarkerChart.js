import React, { useState, useEffect } from "react";

import * as axiosInstance from "../../services/detailStatistic";
import ReactApexChart from "react-apexcharts";
import Text from "../common/Text";
import Select from "../common/Select";
const MarkerChart = ({ savingID }) => {
  const typeTrendStatistic = ["This Month", "Last Month", "Total"];
  const [selectedType, setSelectedType] = useState(typeTrendStatistic[0]);

  //Line chart data
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selectedType state on option change
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (selectedType === "Total") {
          response = await axiosInstance.savingGoalStatistic(savingID);
        } else if (selectedType === "This Month") {
          response = await axiosInstance.savingGoalThisMonthStatistic(savingID);
          // console.log(response);
        } else if (selectedType === "Last Month") {
          response = await axiosInstance.savingGoalLastMonthStatistic(savingID);
        }
        console.log("Target list: ", response.targetsList);
        setData(response.targetsList || []);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchData();
  }, [selectedType, savingID]);
  console.log(data);

  const chartData = {
    series: [
      {
        name: "Actual",
        data: data.map((item) => ({
          x: item.date,
          y: item.total,
          goals: [
            {
              name: "Target",
              value: item.target,
              strokeWidth: 8,
              strokeHeight: 80,
              strokeColor: "#F472B6",
            },
          ],
        })),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        formatter: function (val, opt) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Total", "Target"],
        markers: {
          fillColors: ["#00E396", "#F472B6"],
        },
      },
    },
  };

  return (
    <div id="chart">
      <div className="rounded-lg border-[1px] border-gray-300 shadow-md">
        <div className="flex w-full flex-col justify-between pt-5">
          <Text children="Wallet Detail" weight="bold" />
          <Select
            name="type"
            size="small"
            value={selectedType}
            onChange={handleTypeChange}
            options={typeTrendStatistic}
            className="mr-5 mt-5"
          />
        </div>
        <ReactApexChart {...chartData} type="bar" height={350} />
      </div>
    </div>
  );
};

export default MarkerChart;
