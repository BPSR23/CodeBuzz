import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppContext } from "../AppContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip
);

export function BarChart() {
  const  {data}  = useAppContext();
  let leetcode_res=null
  let codeforces_res=null
  if(data){
    leetcode_res=data.leetcode;
    codeforces_res=data.codeforces;
    console.log("dsadasd",data)
  }

  const arr = [leetcode_res && leetcode_res.easy_problems_submitted, leetcode_res && leetcode_res.medium_problems_submitted, leetcode_res && leetcode_res.hard_problems_submitted]
    
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Easy", "Medium", "Hard"],
      datasets: [
        {
          label: "Submissions",

          data: arr,
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(0,136,254,0.6)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Number of total Submissions",
        },
      },
    });
  }, []);

  return(
    <Bar options={chartOptions} data={chartData} />
  )
}
