// File: src/components/WalletPanel.jsx
import React, { useEffect, useState } from "react";
import { Copy, RefreshCw, LogOut } from "lucide-react";
import { useWallet } from "@/context/WalletProvider";

export default function WalletPanel() {
  const { address, connectWallet } = useWallet();
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    // In real setup: re-fetch balances or re-init wallet connection
    setTimeout(() => setRefreshing(false), 1000);
  };

  useEffect(() => {
    if (!address) connectWallet();
  }, [address]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white font-sans">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">🔐 Wallet Overview</h2>

      {address ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="text-sm md:text-lg font-mono break-all text-yellow-300">
              {address}
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-600 transition"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy"}
              </button>

              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center gap-1 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md text-white transition disabled:opacity-50"
              >
                <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
                Refresh
              </button>

              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-1 px-4 py-2 text-sm bg-red-600 hover:bg-red-500 rounded-md text-white transition"
              >
                <LogOut size={16} />
                Disconnect
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example balance cards */}
            {[
              { token: "Raaskoin (RAAS)", amount: "1,224", usd: "$91.80" },
              { token: "Raastoken (RAAK)", amount: "512", usd: "$38.40" },
              { token: "Tether USD (USDT-XDC)", amount: "1,000", usd: "$75.00" },
            ].map(({ token, amount, usd }) => (
              <div key={token} className="bg-gray-800 p-4 rounded-md border border-gray-700">
                <div className="text-yellow-300 font-bold">{token}</div>
                <div className="text-xl font-semibold mt-2">{amount}</div>
                <div className="text-sm text-gray-400">≈ {usd}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-4">No wallet connected</p>
          <button
            onClick={connectWallet}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}
