import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow">
        Welcome to RAASPAY
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-8 leading-relaxed">
        Experience seamless, gold-backed digital payments using Raaskoin. Send, receive, and settle crypto and fiat with confidence — globally.
      </p>

      {/* Call to Action */}
      <button
        onClick={() => navigate("/raaspay")}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition duration-200"
      >
        Get Started
        <ArrowRight size={18} />
      </button>

      {/* Features Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-5xl">
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">🔐 Secure Payments</h3>
          <p className="text-gray-400 text-sm">
            Send and receive Raaskoin in seconds. Protected by decentralized smart contracts.
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">💱 Fiat & Crypto Bridge</h3>
          <p className="text-gray-400 text-sm">
            Easily convert between fiat and crypto. Built-in pricing oracle and liquidity.
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">🌍 Borderless Remittances</h3>
          <p className="text-gray-400 text-sm">
            Raaspay enables low-cost global remittances — no intermediaries, no delays.
          </p>
        </div>
      </div>
    </div>
  );
}


