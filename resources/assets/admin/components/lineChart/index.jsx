import React from "react";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS,  
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend 
)

export const LineChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          color: "#000",
          maxRotation: 90,
          minRotation: 60
        }
      },
      y: {
        border:{dash: [10, 10]},
        grid: {
          drawOnChartArea: true
        },
        ticks: {
          color: "#000"
        }
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.8,
        to: 0,
        loop: true
      }
    },
  }
  
  const data = {
    labels: [
      "01/09",
      "08/09",
      "15/09",
      "22/09",
      "29/09",
      "06/10",
    ],
    datasets: [
      {
        data: [12000, 30000, 27000, 45000, 50000, 35000],
        pointStyle: false,
        borderColor: "#00f75f",
      }
    ]
  }
  
  return <Line options={options} data={data} />
}
