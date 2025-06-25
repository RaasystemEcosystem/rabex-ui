// File: src/components/raaspay/AllowanceCard.jsx
import React from "react";

export default function AllowanceCard({ allowanceCheck, walletAddress, onCheck, setAllowanceCheck }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllowanceCheck((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold text-accent">📄 Check Allowance</h2>
      <input
        type="text"
        name="owner"
        placeholder="Owner Address"
        className="w-full"
        value={allowanceCheck.owner || walletAddress}
        onChange={handleChange}
      />
      <input
        type="text"
        name="spender"
        placeholder="Spender Address"
        className="w-full"
        value={allowanceCheck.spender}
        onChange={handleChange}
      />
      <button
        className="bg-accent text-black px-4 py-2 rounded hover:bg-yellow-300 w-full"
        onClick={onCheck}
      >
        Check Allowance
      </button>
      {allowanceCheck.result !== undefined && (
        <p className="text-sm text-yellow-400">Allowance: {allowanceCheck.result}</p>
      )}
    </div>
  );
}



