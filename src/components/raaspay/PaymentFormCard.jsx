// File: src/components/raaspay/PaymentFormCard.jsx
import React from "react";

export default function PaymentFormCard({ transferData, setTransferData, onTransfer }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransferData({ ...transferData, [name]: value });
  };

  const handleSubmit = () => {
    if (!transferData.to || !transferData.amount) return;
    onTransfer();
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-yellow-400 mb-2">🔁 Smart Contract Payment</h2>

      <input
        type="text"
        name="to"
        placeholder="Recipient Address (0x...)"
        value={transferData.to}
        onChange={handleChange}
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount (Raaskoin)"
        value={transferData.amount}
        onChange={handleChange}
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400"
      >
        Execute Payment
      </button>
    </div>
  );
}


