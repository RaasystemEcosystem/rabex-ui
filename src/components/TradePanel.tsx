// src/components/RabexTradingPanel.tsx
import React, { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function RabexTradingPanel() {
  const [selectedToken, setSelectedToken] = useState<string>("RAAS");

  const mockOrderBook = [
    { type: "Buy", amount: 120, token: "RAAS", price: 0.076 },
    { type: "Sell", amount: 95, token: "RAAS", price: 0.078 },
    { type: "Buy", amount: 80, token: "RAAS", price: 0.075 },
    { type: "Sell", amount: 60, token: "RAAS", price: 0.079 },
    { type: "Buy", amount: 50, token: "BTC", price: 29900 },
    { type: "Sell", amount: 40, token: "ETH", price: 1880 },
  ];

  const mockTradeHistory = [
    { type: "Buy", token: "RAAS", amount: 50, price: 0.077, time: "10:12:03" },
    { type: "Sell", token: "BTC", amount: 0.1, price: 29950, time: "10:15:42" },
    { type: "Buy", token: "ETH", amount: 1, price: 1875, time: "10:17:20" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans px-6 md:px-10 py-8 max-w-7xl mx-auto space-y-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Rabex Trading Panel</h1>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buy Card */}
        <Card className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <h3 className="text-xl font-bold text-green-400">📈 Buy</h3>
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          >
            <option value="RAAS">RAAS</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="number"
            placeholder="Price (USDT)"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <Button className="bg-green-500 text-black font-bold">Log in to Place Buy Order</Button>
        </Card>

        {/* Sell Card */}
        <Card className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <h3 className="text-xl font-bold text-red-400">📉 Sell</h3>
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          >
            <option value="RAAS">RAAS</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="number"
            placeholder="Price (USDT)"
            className="p-2 rounded bg-gray-800 text-white"
          />
          <Button className="bg-red-500 text-black font-bold">Log in to Place Sell Order</Button>
        </Card>

        {/* Order Book Card */}
        <Card className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            📚 Order Book ({mockOrderBook.length})
          </h3>
          <div className="flex flex-col gap-2">
            {mockOrderBook.map((order, idx) => (
              <div
                key={idx}
                className={`flex justify-between ${
                  order.type === "Buy" ? "text-green-400" : "text-red-400"
                }`}
              >
                <span>
                  {order.type} {order.amount} {order.token}
                </span>
                <span>@ ${order.price}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2">*Mock Data</p>
        </Card>

        {/* Trade History Card */}
        <Card className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            📜 Trade History ({mockTradeHistory.length})
          </h3>
          <div className="flex flex-col gap-2">
            {mockTradeHistory.map((trade, idx) => (
              <div
                key={idx}
                className={`flex justify-between ${
                  trade.type === "Buy" ? "text-green-400" : "text-red-400"
                }`}
              >
                <span>
                  {trade.type} {trade.amount} {trade.token}
                </span>
                <span>
                  @ ${trade.price} | {trade.time}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2">*Mock Data</p>
        </Card>
      </div>

      {/* Full-Width TradingView Chart */}
      <Card className="w-full bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">
          Powered by TradingView
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          Stay on top of the market with advanced charts, technical indicators,
          and customizable watchlists. Access real-time data to make informed
          trading decisions.
        </p>
        <div className="w-full h-96">
          <iframe
            title="TradingView Chart"
            src="https://s.tradingview.com/widgetembed/?symbol=BITSTAMP:BTCUSD&interval=D&hidesidetoolbar=1&theme=dark"
            style={{ width: "100%", height: "100%", border: 0 }}
            allowTransparency
          />
        </div>
      </Card>
    </div>
  );
}
