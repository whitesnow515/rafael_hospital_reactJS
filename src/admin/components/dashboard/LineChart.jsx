import React from 'react';
import ReactApexChart from 'react-apexcharts';


const LineChart = () => {
  const chartData = [
    { year: '2013', revenue: 60 },
    { year: '2014', revenue: 100 },
    { year: '2015', revenue: 240 },
    { year: '2016', revenue: 120 },
    { year: '2017', revenue: 80 },
    { year: '2018', revenue: 100 },
    { year: '2019', revenue: 300 },
  ];

  const chartOptions = {
    chart: {
      type: 'area',
      stacked: false,
      height: '100%',
      width: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Revenue',
        data: chartData.map((data) => data.revenue),
      },
    ],
    xaxis: {
      categories: chartData.map((data) => data.year),
    },
    colors: ['#1b5a90'],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.5,
    },
    grid: {
      show: true,
      borderColor: '#ebebeb',
      strokeDashArray: 2,
      
    },
    markers: {
      size: 3,
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height="300"
      />
    </div>
  );
};

export default LineChart;

  
