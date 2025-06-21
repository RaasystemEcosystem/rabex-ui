import React from "react";
import PropTypes from "prop-types";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";

export default function TransferCard({ transferData, setTransferData, handleTransfer }) {
  const handleChange = (field) => (e) =>
    setTransferData({ ...transferData, [field]: e.target.value });

  return (
    <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6 shadow-md space-y-4 max-w-md w-full">
      <div className="flex items-center gap-2 text-yellow-400 text-lg font-semibold">
        <SendHorizonal size={20} />
        Transfer Raaskoin
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Recipient Address</label>
        <input
          type="text"
          placeholder="0x..."
          value={transferData.to}
          onChange={handleChange("to")}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Amount (RAASK)</label>
        <input
          type="number"
          min="0"
          step="0.0001"
          placeholder="Enter amount"
          value={transferData.amount}
          onChange={handleChange("amount")}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <button
        onClick={handleTransfer}
        className={clsx(
          "w-full py-2 px-4 mt-2 font-semibold rounded-lg transition",
          "bg-yellow-500 hover:bg-yellow-400 text-black shadow"
        )}
      >
        Send Token
      </button>
    </div>
  );
}

TransferCard.propTypes = {
  transferData: PropTypes.shape({
    to: PropTypes.string,
    amount: PropTypes.string,
  }).isRequired,
  setTransferData: PropTypes.func.isRequired,
  handleTransfer: PropTypes.func.isRequired,
};
