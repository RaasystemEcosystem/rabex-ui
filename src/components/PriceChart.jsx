// File: src/components/PriceChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const PriceChart = ({ priceHistory = [], labels = [] }) => {
  // Generate placeholder labels if none are provided
  const defaultLabels = priceHistory.map((_, idx) => `T-${priceHistory.length - idx}`);

  const data = {
    labels: labels.length === priceHistory.length ? labels : defaultLabels,
    datasets: [
      {
        label: 'Gold Price ($)',
        data: priceHistory,
        fill: false,
        borderColor: 'rgb(255, 215, 0)',
        backgroundColor: 'rgba(255, 215, 0, 0.5)',
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#facc15', // Tailwind yellow-400
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#d1d5db' }, // gr
