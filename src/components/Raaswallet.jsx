import React from "react";
import { Wallet, Lock, Send, Download } from "lucide-react";

export default function Raaswallet() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-yellow-400">💼 Raaswallet</h2>

      <p className="text-gray-400 max-w-2xl leading-relaxed">
        Manage your digital assets securely and efficiently using Raaswallet.
        You can store Raaskoin (RAAS), Raastoken (RAAK), and stablecoins like USDT-XDC.
        With advanced encryption, user control, and seamless trading integration — your wallet is your power.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-xl p-6 shadow-md space-y-4">
          <Wallet className="text-yellow-400 w-8 h-8" />
          <h3 className="text-lg font-semibold">Multi-Asset Wallet</h3>
          <p className="text-gray-400 text-sm">Supports RAAS, RAAK, USDT-XDC, and more.</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-md space-y-4">
          <Lock className="text-yellow-400 w-8 h-8" />
          <h3 className="text-lg font-semibold">Secure & Non-Custodial</h3>
          <p className="text-gray-400 text-sm">You control your private keys. End-to-end encryption.</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-md space-y-4">
          <Send className="text-yellow-400 w-8 h-8" />
          <h3 className="text-lg font-semibold">Send & Receive</h3>
          <p className="text-gray-400 text-sm">Instant transfers within the Raasystem ecosystem.</p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl mt-10 text-center">
        <Download className="mx-auto text-yellow-400 w-10 h-10 mb-4" />
        <h4 className="text-xl font-bold mb-2">Mobile App Coming Soon</h4>
        <p className="text-gray-400">
          Get ready to download the Raaswallet app on Android and iOS.
          Full trading, payments, and wallet access in your pocket.
        </p>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © 2025 Raasystem — All rights reserved.
      </footer>
    </div>
  );
}
