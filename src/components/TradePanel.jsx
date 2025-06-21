import React, { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function TradePanel() {
  const [isBuy, setIsBuy] = useState(true);
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handleTrade = () => {
    alert(`Order Placed:\nType: ${isBuy ? "Buy" : "Sell"}\nAmount: ${amount}\nPrice: ${price}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans px-6 md:px-10 py-8 max-w-7xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-yellow-400">📈 RABEX Trade Panel</h2>

      {/* Trade Form + Order Book */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buy/Sell Form */}
        <Card className="space-y-4 shadow-lg">
          <div className="flex gap-4">
            <Button
              onClick={() => setIsBuy(true)}
              className={`w-full ${isBuy ? "bg-green-600 text-white" : "bg-gray-800 text-gray-300"}`}
            >
              Buy
            </Button>
            <Button
              onClick={() => setIsBuy(false)}
              className={`w-full ${!isBuy ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300"}`}
            >
              Sell
            </Button>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Amount (RAAS)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-2 border border-gray-700"
              placeholder="Enter amount"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Price (USDT)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-2 border border-gray-700"
              placeholder="Enter price"
            />
          </div>

          <Button
            onClick={handleTrade}
            className={`w-full mt-4 ${
              isBuy ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
            } text-black font-bold py-2 rounded-md`}
          >
            {isBuy ? "Place Buy Order" : "Place Sell Order"}
          </Button>
        </Card>

        {/* Order Book (Placeholder) */}
        <Card className="shadow-lg space-y-4">
          <h3 className="text-xl font-semibold text-yellow-300">📚 Order Book</h3>
          <div className="h-64 overflow-y-auto space-y-2 text-sm">
            <div className="flex justify-between text-green-400">
              <span>Buy 120 RAAS</span>
              <span>@ $0.076</span>
            </div>
            <div className="flex justify-between text-red-400">
              <span>Sell 95 RAAS</span>
              <span>@ $0.078</span>
            </div>
            <div className="flex justify-between text-green-400">
              <span>Buy 80 RAAS</span>
              <span>@ $0.075</span>
            </div>
            <div className="flex justify-between text-red-400">
              <span>Sell 60 RAAS</span>
              <span>@ $0.079</span>
            </div>
            <div className="text-gray-500 text-xs text-center pt-2">*Mock Data</div>
          </div>
        </Card>
      </div>

      {/* Price Chart Placeholder */}
      <Card className="mt-6 shadow-lg">
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">📊 Price Chart</h3>
        <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
          Chart Coming Soon...
        </div>
      </Card>
    </div>
  );
}
