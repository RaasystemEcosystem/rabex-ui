// File: src/components/PriceFeedDisplay.js
import React from 'react';

const PriceFeedDisplay = ({ price }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white text-center">
      <h3 className="text-lg font-semibold">Gold Price Feed</h3>
      <p className="text-2xl font-bold mt-2">{price ? `$${price}` : 'Loading...'}</p>
    </div>
  );
};

export default PriceFeedDisplay;


// File: src/components/PriceChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceChart = ({ priceHistory }) => {
  const data = {
    labels: priceHistory.map((_, idx) => idx),
    datasets: [
      {
        label: 'Gold Price ($)',
        data: priceHistory,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
      },
    ],
  };
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h3 className="text-white mb-2">Price History</h3>
      <Line data={data} />
    </div>
  );
};

export default PriceChart;

