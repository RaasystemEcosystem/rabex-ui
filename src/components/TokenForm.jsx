// File: src/components/TokenForm.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function TokenForm({ onSubmit, initialSymbol = "RAASK", actionLabel = "Submit" }) {
  const [amount, setAmount] = useState("");
  const [symbol, setSymbol] = useState(initialSymbol);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setError("");
    onSubmit({ amount: parseFloat(amount), symbol });
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-bold text-yellow-400">🔁 Token Form</h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Token Symbol</label>
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
        >
          <option value="RAASK">RAASK</option>
          <option value="RAAK">RAAK</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Amount</label>
        <input
          type="number"
          min="0"
          step="0.0001"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white rounded px-3 py-2"
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md shadow"
      >
        {actionLabel}
      </button>
    </form>
  );
}

TokenForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialSymbol: PropTypes.string,
  actionLabel: PropTypes.string,
};
