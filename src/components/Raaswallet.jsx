import React, { useState } from "react";
import { Wallet, Send, Download } from "lucide-react";

const mockBalances = [
  { token: "RAAS", amount: 1200.5 },
  { token: "RAAK", amount: 950 },
  { token: "BTC", amount: 0.12 },
  { token: "ETH", amount: 1.5 },
  { token: "USDT", amount: 5000 },
  { token: "XDC", amount: 2000 },
];

export default function Raaswallet() {
  const [balances, setBalances] = useState(mockBalances);

  const handleSend = (token) => {
    alert(`Send action triggered for ${token}`);
  };

  const handleReceive = (token) => {
    alert(`Receive action triggered for ${token}`);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 md:px-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
        💼 Raaswallet
      </h2>

      <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
        Manage your digital assets securely and efficiently using Raaswallet.
        You can store RAAS, RAAK, BTC, ETH, USDT, XDC, and more. Send or receive
        tokens instantly within the Raasystem ecosystem.
      </p>

      {/* Balances Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {balances.map(({ token, amount }) => (
          <div
            key={token}
            className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col justify-between hover:bg-gray-800 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <Wallet className="text-yellow-400 w-6 h-6" />
              <span className="text-gray-400 text-sm font-mono">{token}</span>
            </div>
            <div className="mb-4">
              <p className="text-xl font-bold">{amount.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">Balance</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleSend(token)}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 rounded-md font-semibold text-sm transition"
              >
                <Send className="inline w-4 h-4 mr-1" /> Send
              </button>
              <button
                onClick={() => handleReceive(token)}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-md font-semibold text-sm transition"
              >
                Receive
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © 2025 Raasystem — All rights reserved.
      </footer>
    </div>
  );
}
