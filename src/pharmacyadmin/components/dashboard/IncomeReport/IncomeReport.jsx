/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const IncomeReport = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
      stacked: false,
      height: "100%",
      width: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Doctors",
        data: [
          { x: "2015", y: 100 },
          { x: "2016", y: 20 },
          { x: "2017", y: 90 },
          { x: "2018", y: 50 },
          { x: "2019", y: 120 },
        ],
      },
      {
        name: "Patients",
        data: [
          { x: "2015", y: 30 },
          { x: "2016", y: 60 },
          { x: "2017", y: 120 },
          { x: "2018", y: 80 },
          { x: "2019", y: 150 },
        ],
      },
    ],
    xaxis: {
      categories: ["2015", "2016", "2017", "2018", "2019"],
    },
    colors: ["#1b5a90", "#ff9d00"],
    stroke: {
      width: 1,
      curve: "smooth",
    },
    markers: {
      size: 3,
    },
    grid: {
      show: true,
      borderColor: "#ebebeb",
      strokeDashArray: 2,
    },
    tooltip: {
      theme: "dark",
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.ApexCharts && window.ApexCharts.mL) {
        window.ApexCharts.mL.updateOptions({
          chart: {
            width: "100%",
          },
        });
        window.ApexCharts.mL.updateSeries(chartOptions.series);
        window.ApexCharts.mL.render();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chartOptions]);

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height="300"
      />
    </div>
  );
};

export default IncomeReport;
