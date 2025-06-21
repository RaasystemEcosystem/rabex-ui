import React, { useState, useEffect } from "react";
import { Coins, Send, Wallet } from "lucide-react";
import { useWallet } from "@/context/WalletProvider";
import TokenCard from "@/components/TokenCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import AiEngineDashboard from "@/components/AiEngineDashboard";

const tokens = [
  {
    name: "Raaskoin",
    symbol: "RAAS",
    balance: 1224,
    goldEquivalent: 1224 * 0.075,
    priceHistory: [0.07, 0.072, 0.075, 0.074, 0.076, 0.075],
  },
  {
    name: "Raastoken",
    symbol: "RAAK",
    balance: 512,
    goldEquivalent: 512 * 0.075,
    priceHistory: [0.05, 0.051, 0.052, 0.053, 0.052, 0.051],
  },
  {
    name: "Tether USD (XDC)",
    symbol: "USDT-XDC",
    balance: 1000,
    goldEquivalent: 1000 * 0.075,
    priceHistory: [1, 1, 1, 1, 1, 1],
  },
];

export default function Dashboard() {
  const { address, connectWallet } = useWallet();
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans px-6 md:px-10 py-10 max-w-7xl mx-auto space-y-10">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold text-yellow-400">📊 RABEX Dashboard</h2>
        {address ? (
          <span className="text-sm font-mono text-yellow-300 truncate">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        ) : (
          <Button onClick={connectWallet} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Connect Wallet
          </Button>
        )}
      </div>

      {/* Token Balances */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tokens.map((token, i) => (
          <TokenCard
            key={token.symbol}
            name={token.name}
            symbol={token.symbol}
            balance={token.balance}
            goldEquivalent={token.goldEquivalent}
            priceHistory={token.priceHistory}
            animationDelay={i * 0.15}
          />
        ))}
      </div>

      {/* AI Engine Widget */}
      <Card title="🧠 AI Engine Summary">
        <AiEngineDashboard />
      </Card>

      {/* Actions */}
      <Card className="flex flex-col md:flex-row justify-around items-center gap-4">
        <Button onClick={() => openModal("send")} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Send className="mr-2" size={20} /> Send
        </Button>
        <Button onClick={() => openModal("receive")} className="bg-green-600 hover:bg-green-700 text-white">
          <Wallet className="mr-2" size={20} /> Receive
        </Button>
        <Button onClick={() => openModal("swap")} className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Coins className="mr-2" size={20} /> Swap
        </Button>
      </Card>

      {/* Wallet Modal */}
      {modalType && (
        <Card>
          <p className="text-yellow-400 font-bold text-center">
            {modalType.charAt(0).toUpperCase() + modalType.slice(1)} modal coming soon...
          </p>
          <div className="flex justify-center mt-4">
            <Button onClick={closeModal}>Close</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
