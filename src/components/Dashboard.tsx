import React, { useState } from "react";
import { Coins, Send, Wallet } from "lucide-react";
import { useWallet } from "@/context/WalletProvider";
import TokenCard from "@/components/TokenCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import AiEngineDashboard from "@/components/AiEngineDashboard";
import { Sparklines, SparklinesLine } from "react-sparklines";

const tokens = [
  { name: "Raaskoin", symbol: "RAAS", balance: 1224, price: 0.075, goldEquivalent: 1224 * 0.075, priceHistory: [0.07, 0.072, 0.075, 0.074, 0.076, 0.075], change24h: 1.2 },
  { name: "Raastoken", symbol: "RAAK", balance: 512, price: 0.075, goldEquivalent: 512 * 0.075, priceHistory: [0.05, 0.051, 0.052, 0.053, 0.052, 0.051], change24h: -0.8 },
  { name: "Ethereum", symbol: "ETH", balance: 1000, price: 1, goldEquivalent: 1000 * 0.075, priceHistory: [1, 1, 1, 1, 1, 1], change24h: 0.5 },
  { name: "Bitcoin", symbol: "BTC", balance: 0.5, price: 27350, goldEquivalent: 0.5 * 27350, priceHistory: [27200, 27300, 27400, 27350, 27350, 27350], change24h: 0.2 },
  { name: "XDC", symbol: "XDC", balance: 5000, price: 0.056, goldEquivalent: 5000 * 0.056, priceHistory: [0.055, 0.056, 0.057, 0.056, 0.057, 0.056], change24h: 1.5 },
  { name: "Tether USD", symbol: "USDT", balance: 2000, price: 1, goldEquivalent: 2000 * 1, priceHistory: [1, 1, 1, 1, 1, 1], change24h: 0.0 },
];

export default function Dashboard() {
  const { address, connectWallet } = useWallet();
  const [modalType, setModalType] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState(tokens[0]);

  const openModal = (type: string) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans px-6 md:px-10 py-10 max-w-7xl mx-auto space-y-10">

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">📊 RABEX Dashboard</h2>
        {address ? (
          <span className="text-sm md:text-base font-mono text-yellow-300 truncate">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        ) : (
          <Button onClick={connectWallet} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Connect Wallet
          </Button>
        )}
      </div>

      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Portfolio Value" className="text-center">
          <p className="text-2xl font-bold text-yellow-400">
            ${tokens.reduce((sum, t) => sum + t.balance * t.price, 0).toLocaleString()}
          </p>
          <p className="text-gray-400 text-sm">Estimated Gold Equivalent</p>
        </Card>

        <Card title="24h Portfolio Change" className="text-center">
          <p className={`text-2xl font-bold ${tokens.reduce((sum, t) => sum + t.change24h, 0) >= 0 ? "text-green-400" : "text-red-400"}`}>
            {tokens.reduce((sum, t) => sum + t.change24h, 0).toFixed(2)}%
          </p>
          <p className="text-gray-400 text-sm">Across All Assets</p>
        </Card>

        <Card title="⚡ Quick Trade" className="flex flex-col justify-center items-center gap-2">
          <Button onClick={() => openModal("buy")} className="bg-green-600 hover:bg-green-700 text-white w-full">
            Buy
          </Button>
          <Button onClick={() => openModal("sell")} className="bg-red-600 hover:bg-red-700 text-white w-full">
            Sell
          </Button>
          <Button onClick={() => openModal("swap")} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
            Swap
          </Button>
        </Card>
      </div>

      {/* AI Engine Widget */}
      <Card title="🧠 RaasGenAI AI Engine Summary">
        <AiEngineDashboard />
      </Card>

      {/* Token Balances Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {tokens.map((token, i) => (
          <TokenCard
            key={token.symbol}
            name={token.name}
            symbol={token.symbol}
            balance={token.balance}
            goldEquivalent={token.goldEquivalent}
            priceHistory={token.priceHistory}
            animationDelay={i * 0.15}
            onClick={() => setSelectedCoin(token)}
          />
        ))}
      </div>

      {/* Quick Actions Title */}
      <h3 className="text-xl font-bold text-yellow-400">Quick Actions</h3>

      {/* Quick Actions (Send / Receive / Request) */}
      <Card className="flex flex-col md:flex-row justify-around items-center gap-4">
        <Button onClick={() => openModal("send")} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Send className="mr-2" size={20} /> Send
        </Button>
        <Button onClick={() => openModal("receive")} className="bg-green-600 hover:bg-green-700 text-white">
          <Wallet className="mr-2" size={20} /> Receive
        </Button>
        <Button onClick={() => openModal("request")} className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Request
        </Button>
      </Card>

      {/* Full-Width TradingView Chart */}
      <Card className="w-full bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Powered by TradingView</h3>
        <p className="text-gray-400 text-sm mb-2">
          Stay on top of the market with advanced charts, technical indicators, and customizable watchlists. Access real-time data to make informed trading decisions.
        </p>
        <div className="w-full h-96">
          <iframe
            title="TradingView Chart"
            src="https://s.tradingview.com/widgetembed/?symbol=BITSTAMP:BTCUSD&interval=D&hidesidetoolbar=1&theme=dark"
            style={{ width: '100%', height: '100%', border: 0 }}
            allowTransparency
          ></iframe>
        </div>

        {/* Quick Trade Section */}
        <div className="mt-4">
          <h4 className="text-yellow-400 font-bold mb-2 text-center md:text-left">Quick Trade</h4>
          <div className="flex flex-col md:flex-row justify-around gap-4">
            {tokens.map((token) => {
              const change24h = ((token.priceHistory[token.priceHistory.length - 1] - token.priceHistory[0]) / token.priceHistory[0] * 100).toFixed(2);
              return (
                <Button
                  key={token.symbol}
                  className={`flex flex-col justify-center items-center w-full md:w-auto px-4 py-2 ${
                    token.change24h >= 0 ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  <span className="font-semibold">{token.symbol}</span>
                  <span className="text-sm">{parseFloat(change24h) >= 0 ? "+" : ""}{change24h}%</span>
                  <div className="mt-1 w-16 h-4">
                    <Sparklines data={token.priceHistory} limit={6} width={60} height={16}>
                      <SparklinesLine color={parseFloat(change24h) >= 0 ? "limegreen" : "red"} />
                    </Sparklines>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
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
