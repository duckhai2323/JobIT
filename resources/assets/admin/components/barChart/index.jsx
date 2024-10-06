import React from "react";
import { Bar } from "react-chartjs-2";
import { 
  Chart as ChartJS,  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend 
)

function getGradient(ctx, chartArea, color1, color2) {
  const { top, bottom, left, right, width, height } = chartArea;
  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
  gradientBg.addColorStop(0, color1);
  gradientBg.addColorStop(1, color2);
  return gradientBg
}

export const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        border:{dash: [10, 10]},
        grid: {
          drawOnChartArea: true
        },
        ticks: {
          color: "#fff"
        }
      }
    },
  }
  
  const data = {
    labels: [
      "Kinh doanh",
      "Marketing",
      "Hành chính / Văn phòng",
      "Tư vấn",
      "IT phần mềm"
    ],
    datasets: [
      {   
          
        data: [14000, 6800, 5000, 4700, 8000],
        backgroundColor:
          (context) => {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
              return;
            }
            return [
              getGradient(ctx, chartArea, "#4df98f", "transparent"), 
              getGradient(ctx, chartArea, "#777dd1", "transparent"),
              getGradient(ctx, chartArea, "#f99a4d", "transparent"),
              getGradient(ctx, chartArea, "#4df9f0", "transparent"),
              getGradient(ctx, chartArea, "#f9f54d", "transparent"),
            ];
          },
        borderWidth: {
          top: 5,
          right: 0,
          bottom: 0,
          left: 0
        },
        borderColor: [
          "#00f75f",
          "#3c45bd",
          "#F76F00",
          "#00F7E9",
          "#F7F100"
        ],
      }
    ]
  }
  
  return <Bar options={options} data={data} />
}
