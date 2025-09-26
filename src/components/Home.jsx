import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RaasFapImage from "../assets/raasfap.png";

export default function Home() {
  const navigate = useNavigate();

  const markets = [
    { token: "RAAS", logo: "", price: 0.076, volume: 12000, change24h: 0.5 },
    { token: "RAAK", logo: "", price: 0.078, volume: 9500, change24h: -0.2 },
    { token: "BTC", logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", price: 27350.12, volume: 1200, change24h: 1.2 },
    { token: "ETH", logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", price: 1820.55, volume: 950, change24h: -0.8 },
    { token: "USDT", logo: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png", price: 1.0, volume: 8300, change24h: 0.0 },
    { token: "XRP", logo: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", price: 0.49, volume: 6700, change24h: 2.3 },
    { token: "ADA", logo: "https://assets.coingecko.com/coins/images/975/large/cardano.png", price: 0.37, volume: 5400, change24h: -1.5 },
    { token: "SOL", logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png", price: 21.5, volume: 4100, change24h: 0.9 },
    { token: "DOGE", logo: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png", price: 0.072, volume: 3800, change24h: 3.2 },
    { token: "DOT", logo: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png", price: 6.7, volume: 3200, change24h: -2.1 },
    { token: "LTC", logo: "https://assets.coingecko.com/coins/images/2/large/litecoin.png", price: 92.3, volume: 2700, change24h: 1.0 },
    { token: "BNB", logo: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png", price: 310.8, volume: 2500, change24h: -0.5 },
  ];

  const features = [
    { icon: "🔐", title: "Raasystem Core", description: "Autonomous AI Ecosystem. Continuously Updated by RaasGenAI – the CTO of The Raasystem Ecosystem." },
    { icon: "📊", title: "Smart Trading", description: "AI-Powered Order Matching that Makes Intelligent Trading Decisions with Seamless Automated Execution." },
    { icon: "🌍", title: "Global Payments", description: "Raaspay: Crypto-to-Fiat & Fiat-to-Crypto Gateway. Instant, Borderless, and Cost-Effective." },
    { icon: "⚡", title: "Lightning Speed", description: "Execution Speed: 50–80 ms. Outperforms Coinbase (~5x Faster) and Binance (~3x Faster)." },
    { icon: "💰", title: "Lower Cost", description: "Transaction Cost: <$0.001. 99% Lower Fees than Coinbase and 90–95% Lower Than Binance." },
    { icon: "🔄", title: "Dynamic Liquidity Pools", description: "Adjusts in Real-Time to Ensure Smooth and Stable Trading Activity." },
    { icon: "📈", title: "AI-Driven Spread Optimization", description: "Maximizes Market-Making Profitability with Dynamic Bid/Ask Spreads. Real-Time Global Arbitrage Detection." },
    { icon: "🛡️", title: "Advanced Risk Management", description: "RaasGenAI - as the CTO of the Ecosystem - Continuously Monitors Volatility, Adapts Strategy and Performs Stop-Loss to Protect Capital." },
    { icon: "🤖", title: "RaasFap & RaasFan", description: "Redefining global connectivity & AI mobility – connected for life, anywhere in the world. No data, no bills, no carriers, no chargers." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4 mt-8">Markets</h2>
      <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-8 leading-relaxed">
        Rabex is an AI-Powered Crypto and Gold-Backed Trading Platform Built For Speed and Intelligence. Trade Smarter. Stay Ahead — Powered by RaasGenAI and Optimized with Automated Market Making (AMM).
      </p>

      {/* ✅ Fixed table with Action column */}
      <div className="overflow-x-auto w-full max-w-6xl mb-12">
        <table className="min-w-full table-auto bg-gray-900 rounded-2xl shadow-lg text-left text-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-yellow-300">Coin</th>
              <th className="px-6 py-3 text-sm font-semibold text-yellow-300">Price</th>
              <th className="px-6 py-3 text-sm font-semibold text-yellow-300">Volume</th>
              <th className="px-6 py-3 text-sm font-semibold text-yellow-300">24h Change</th>
              <th className="px-6 py-3 text-sm font-semibold text-yellow-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((market, index) => (
              <tr key={index} className="border-t border-gray-700 hover:bg-gray-800 transition">
                <td className="px-6 py-4 flex items-center gap-2">
                  {market.logo ? (
                    <img src={market.logo} alt={market.token} className="w-6 h-6 rounded-full" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                      {market.token[0]}
                    </div>
                  )}
                  {market.token}
                </td>
                <td className="px-6 py-4">${market.price.toLocaleString()}</td>
                <td className="px-6 py-4">{market.volume.toLocaleString()}</td>
                <td className={`px-6 py-4 font-medium ${market.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {market.change24h >= 0 ? "+" : ""}{market.change24h}%
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => (window.location.href = `/trade?pair=${market.token}-USDT&side=buy`)}
                    className="px-3 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => (window.location.href = `/trade?pair=${market.token}-USDT&side=sell`)}
                    className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition duration-200 mb-16"
      >
        Get Started
        <ArrowRight size={18} />
      </button>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mb-16">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-start gap-3">
            <div className="text-2xl">{feature.icon}</div>
            <h3 className="text-xl font-bold text-yellow-400">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* RaasFap Section */}
      <section className="w-full bg-gray-900 bg-opacity-90 py-16 flex flex-col items-center text-center">
        <motion.img
          src={RaasFapImage}
          alt="RaasFap - Crypto Trading"
          className="w-full max-w-4xl h-auto rounded-2xl shadow-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.h2
          className="text-3xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Trade Smart. Trade with Rabex AMM (Automated Market Maker).
        </motion.h2>
      </section>
    </div>
  );
}
