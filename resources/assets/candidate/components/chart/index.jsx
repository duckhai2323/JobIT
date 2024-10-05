import React, { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GradientBarChart = () => {
  const chartRef = useRef(null);

  const createGradient = (ctx, chartArea, color1, color2) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const data = {
    labels: ['1112', '12324', '1213', '2424', '242424'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 50],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const colors = [
            createGradient(ctx, chartArea, 'transparent', '#4df98f'),
            createGradient(ctx, chartArea, 'transparent', '#777dd1'),
            createGradient(ctx, chartArea, 'transparent', '#f99a4d'),
            createGradient(ctx, chartArea, 'transparent', '#4df9f0'),
            createGradient(ctx, chartArea, 'transparent', '#f9f54d'),
          ];

          return colors[context.dataIndex];
        },
        borderWidth: {
          top: 5,
          right: 0,
          bottom: 0,
          left: 0,
        },
        borderColor: ['#00f75f', '#3c45bd', '#F76F00', '#00F7E9', '#F7F100'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        border: { display: false },
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          display: true,
          color: '#ffffff',
        },
      },
      y: {
        border: { display: false },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default GradientBarChart;
