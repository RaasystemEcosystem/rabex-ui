// File: src/components/raaspay/ApprovalCard.jsx
import React from "react";

export default function ApprovalCard({ approvalData, onApprove, setApprovalData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApprovalData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold text-accent">✅ Approve Spending</h2>
      <input
        type="text"
        name="spender"
        placeholder="Spender Address"
        className="w-full"
        value={approvalData.spender}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount to Approve"
        className="w-full"
        value={approvalData.amount}
        onChange={handleChange}
      />
      <button
        className="bg-accent text-black px-4 py-2 rounded hover:bg-yellow-300 w-full"
        onClick={onApprove}
      >
        Approve
      </button>
    </div>
  );
}


