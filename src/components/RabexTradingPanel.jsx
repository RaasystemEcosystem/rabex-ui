import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRabexContract } from "./useRabexContract";

export default function RabexTradingPanel() {
  const rabexContract = useRabexContract();
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [bidPrice, setBidPrice] = useState("");
  const [askPrice, setAskPrice] = useState("");
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [txStatus, setTxStatus] = useState("");
  const [error, setError] = useState("");

  // Connect Wallet
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setConnected(true);
        setError("");
      } else {
        setError("⚠️ MetaMask not detected");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Wallet connection failed");
    }
  };

  // Load Order Book
  const loadMarketData = async () => {
    try {
      setLoading(true);
      if (rabexContract) {
        const data = await rabexContract.getOrderBook(); // adjust as needed
        setMarketData(data);
      } else {
        setError("⚠️ Rabex contract not loaded");
      }
    } catch (err) {
      console.error("Market load error:", err);
      setError("Error loading market data");
    } finally {
      setLoading(false);
    }
  };

  // Trade Handler
  const handleTrade = async (type) => {
    try {
      if (!bidPrice || !askPrice) {
        setError("Please enter both bid and ask prices");
        return;
      }

      setTxStatus("⏳ Submitting trade...");
      setError("");

      const value = ethers.parseUnits(type === "buy" ? bidPrice : askPrice, 18);
      const tx = type === "buy"
        ? await rabexContract.placeBid(value)
        : await rabexContract.placeAsk(value);

      await tx.wait();
      setTxStatus("✅ Trade submitted!");
      setBidPrice("");
      setAskPrice("");
      await loadMarketData();
    } catch (err) {
      console.error("Trade failed:", err);
      setTxStatus("❌ Trade failed");
    }
  };

  useEffect(() => {
    if (rabexContract && connected) {
      loadMarketData();
    }
  }, [rabexContract, connected]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">📈 RABEX Trading Panel</h2>

      {!connected ? (
        <button
          onClick={connectWallet}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold shadow"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="mb-4 text-sm text-green-400 font-mono">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      )}

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="number"
          placeholder="Bid Price"
          value={bidPrice}
          onChange={(e) => setBidPrice(e.target.value)}
          className="bg-gray-800 border border-gray-700 px-4 py-2 rounded text-white w-full sm:w-40"
        />
        <input
          type="number"
          placeholder="Ask Price"
          value={askPrice}
          onChange={(e) => setAskPrice(e.target.value)}
          className="bg-gray-800 border border-gray-700 px-4 py-2 rounded text-white w-full sm:w-40"
        />
        <button
          onClick={() => handleTrade("buy")}
          disabled={!connected}
          className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded shadow"
        >
          Buy
        </button>
        <button
          onClick={() => handleTrade("sell")}
          disabled={!connected}
          className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded shadow"
        >
          Sell
        </button>
      </div>

      {txStatus && <div className="mb-2 text-sm text-blue-400">{txStatus}</div>}
      {error && <div className="mb-2 text-sm text-red-400">{error}</div>}

      {loading ? (
        <div className="text-gray-400">Loading market data...</div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">📊 Order Book</h3>
          <pre className="bg-gray-800 border border-gray-700 p-4 rounded text-sm overflow-x-auto text-green-300">
            {JSON.stringify(marketData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
