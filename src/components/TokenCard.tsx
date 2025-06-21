import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Coins } from "lucide-react";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

export default function TokenCard({
  name,
  symbol,
  balance,
  goldEquivalent,
  priceHistory,
  animationDelay = 0,
}) {
  const formattedGold = Number.isFinite(goldEquivalent)
    ? `$${goldEquivalent.toFixed(2)}`
    : "N/A";

  const chartData = {
    labels: priceHistory.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Price",
        data: priceHistory,
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div
      className="max-w-sm w-full bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white border border-yellow-500 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/50 transition-all duration-300"
      style={{
        animationDelay: `${animationDelay}s`,
        animationFillMode: "backwards",
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-black rounded-full p-2 shadow-lg">
            <Coins size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-400 leading-tight">
              {name}
            </h3>
            <p className="text-sm text-yellow-300">({symbol})</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-yellow-400">Balance</p>
          <p className="text-xl font-semibold text-white break-all">{balance}</p>
          <p className="text-xs text-yellow-300">Gold ≈ {formattedGold}</p>
        </div>
      </div>

      <div className="mt-4 h-24">
        {priceHistory.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-sm italic">
            No chart data
          </div>
        )}
      </div>
    </div>
  );
}

TokenCard.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  goldEquivalent: PropTypes.number.isRequired,
  priceHistory: PropTypes.arrayOf(PropTypes.number).isRequired,
  animationDelay: PropTypes.number,
};
