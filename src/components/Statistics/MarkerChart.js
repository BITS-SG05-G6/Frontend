import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MarkerChart = () => {
  const chartData = {
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: '2011',
            y: 12,
            goals: [
                {
                    name: 'Target',
                    value: 54,
                    strokeWidth: 5,
                    strokeHeight: 40,
                    strokeColor: '#775DD0',
                  },
            ],
          },
          {
            x: '2012',
            y: 44,
            goals: [
              {
                name: 'Target',
                value: 54,
                strokeWidth: 5,
                strokeHeight: 40,
                strokeColor: '#775DD0',
              },
            ],
          },
          // ... (rest of the data)
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#00E396'],
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
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0'],
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart {...chartData} type="bar" height={350} />
    </div>
  );
};

export default MarkerChart;
