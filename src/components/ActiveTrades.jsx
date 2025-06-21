import React from "react";
import { XCircle } from "lucide-react";

const mockTrades = [
  {
    id: 1,
    type: "Buy",
    token: "RAAS",
    amount: 120,
    price: 0.076,
    status: "Filled",
    time: "2025-06-20 10:42 AM",
  },
  {
    id: 2,
    type: "Sell",
    token: "RAAK",
    amount: 95,
    price: 0.078,
    status: "Pending",
    time: "2025-06-20 10:41 AM",
  },
  {
    id: 3,
    type: "Buy",
    token: "USDT-XDC",
    amount: 80,
    price: 1.0,
    status: "Cancelled",
    time: "2025-06-20 10:39 AM",
  },
];

export default function ActiveTrades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10 max-w-7xl mx-auto font-sans">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">🧾 Active Trades</h2>

      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-700">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-800 text-yellow-300 uppercase">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {mockTrades.map((trade) => (
              <tr key={trade.id}>
                <td className="px-4 py-3 font-semibold text-white">{trade.type}</td>
                <td className="px-4 py-3 text-gray-300">{trade.token}</td>
                <td className="px-4 py-3">{trade.amount}</td>
                <td className="px-4 py-3">${trade.price.toFixed(3)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
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
                <td className="px-4 py-3 text-gray-400">{trade.time}</td>
                <td className="px-4 py-3 text-right">
                  {trade.status === "Pending" && (
                    <button
                      className="text-red-400 hover:text-red-500 transition"
                      title="Cancel Trade"
                    >
                      <XCircle size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

