// File: components/QuickTrade.jsx
import React, { useState } from "react";

const QuickTrade = () => {
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");

  const handleBuy = () => {
    // Simulated logic - Replace with smart contract call
    if (amount > 0) {
      setStatus(`Successfully bought ${amount} Raaskoin`);
    } else {
      setStatus("Enter a valid amount");
    }
  };

  const handleSell = () => {
    // Simulated logic - Replace with smart contract call
    if (amount > 0) {
      setStatus(`Successfully sold ${amount} Raaskoin`);
    } else {
      setStatus("Enter a valid amount");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Quick Trade</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
        placeholder="Amount in Raaskoin"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleBuy}
          className="flex-1 py-2 rounded bg-green-500 hover:bg-green-600"
        >
          Buy Raaskoin
        </button>
        <button
          onClick={handleSell}
          className="flex-1 py-2 rounded bg-red-500 hover:bg-red-600"
        >
          Sell Raaskoin
        </button>
      </div>
      {status && (
        <p className="text-sm text-yellow-400 font-medium">{status}</p>
      )}
    </div>
  );
};

export default QuickTrade;
