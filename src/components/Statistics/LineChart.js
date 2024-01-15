// Import necessary components and libraries
import Chart from "react-apexcharts";

// Define the TrendStatistic component
export default function LineChart({ title, expenses, categories, incomes }) {
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
      //   title: {
      //     text: title,
      //     align: "middle",
      //   },
      dataLabels: {
        enabled: false,
      },
      colors: ["#00E396", "#F178B6"],

      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9,
        },
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
    <div id="chart" className="">
      <Chart {...chartConfig} />
    </div>
  );
}
