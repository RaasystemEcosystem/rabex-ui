import React from "react";
import { XCircle } from "lucide-react";

const mockTrades = [
  { id: 1, type: "Buy", token: "RAAS", amount: 120, price: 0.076, status: "Filled", time: "2025-06-20 10:42 AM" },
  { id: 2, type: "Sell", token: "RAAK", amount: 95, price: 0.078, status: "Pending", time: "2025-06-20 10:41 AM" },
  { id: 3, type: "Buy", token: "USDT", amount: 80, price: 1.0, status: "Cancelled", time: "2025-06-20 10:39 AM" },
  { id: 4, type: "Buy", token: "BTC", amount: 0.1, price: 29950, status: "Filled", time: "2025-06-20 10:30 AM" },
  { id: 5, type: "Sell", token: "XDC", amount: 500, price: 0.054, status: "Pending", time: "2025-06-20 10:25 AM" },
  { id: 6, type: "Buy", token: "ETH", amount: 1.5, price: 1880, status: "Filled", time: "2025-06-20 10:20 AM" },
];

export default function ActiveTrades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-10 py-10 max-w-7xl mx-auto font-sans">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
        🧾 Active Trades
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-700">
        <table className="min-w-full text-sm md:text-base text-left border-collapse">
          <thead className="bg-gray-800 text-yellow-300 uppercase tracking-wide">
            <tr>
              <th className="px-5 py-4 rounded-tl-lg">Type</th>
              <th className="px-5 py-4">Token</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Time</th>
              <th className="px-5 py-4 text-right rounded-tr-lg">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {mockTrades.map((trade) => (
              <tr key={trade.id} className="hover:bg-gray-800 transition-colors duration-150">
                <td className={`px-5 py-3 font-semibold ${trade.type === "Buy" ? "text-green-400" : "text-red-400"}`}>
                  {trade.type}
                </td>
                <td className="px-5 py-3 text-gray-300">{trade.token}</td>
                <td className="px-5 py-3">{trade.amount}</td>
                <td className="px-5 py-3">${trade.price.toFixed(3)}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
                      trade.status === "Filled"
                        ? "bg-green-600 text-white"
                        : trade.status === "Pending"
                        ? "bg-yellow-500 text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {trade.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-gray-400">{trade.time}</td>
                <td className="px-5 py-3 text-right">
                  {trade.status === "Pending" && (
                    <button
                      className="text-red-400 hover:text-red-500 transition transform hover:scale-110"
                      title="Cancel Trade"
                    >
                      <XCircle size={22} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-400 text-sm md:text-base text-center">
        *This is a mock dataset for demonstration purposes
      </p>
    </div>
  );
}
