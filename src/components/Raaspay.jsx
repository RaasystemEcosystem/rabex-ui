import React from "react";
import { Globe, CreditCard, SendHorizontal } from "lucide-react";

export default function Raaspay() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-10 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-yellow-400">🌍 Raaspay</h2>

      <p className="text-gray-400 max-w-2xl leading-relaxed">
        Raaspay is your gateway to instant, borderless, and low-cost payments powered by Raaskoin.
        Whether you're paying merchants, sending remittances, or settling smart contracts — Raaspay gets it done securely and instantly.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl space-y-3 shadow-md">
          <Globe className="w-8 h-8 text-yellow-400" />
          <h3 className="font-semibold text-lg">Borderless Transfers</h3>
          <p className="text-sm text-gray-400">Send money globally with no banks or intermediaries.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl space-y-3 shadow-md">
          <CreditCard className="w-8 h-8 text-yellow-400" />
          <h3 className="font-semibold text-lg">Merchant Payments</h3>
          <p className="text-sm text-gray-400">Accept payments in-store or online — crypto to fiat conversion included.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl space-y-3 shadow-md">
          <SendHorizontal className="w-8 h-8 text-yellow-400" />
          <h3 className="font-semibold text-lg">One-Click Send</h3>
          <p className="text-sm text-gray-400">Send funds in just one click using wallet address, phone, or QR code.</p>
        </div>
      </div>

      {/* Coming Soon Card */}
      <div className="mt-10 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 space-y-4">
        <h4 className="text-xl font-bold text-yellow-400">Raaspay Debit Card (Coming Soon)</h4>
        <p className="text-gray-400 max-w-xl mx-auto">
          Spend your crypto instantly anywhere Mastercard is accepted. Raaspay will link directly to your Raaswallet for seamless use.
        </p>
        <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md shadow">
          Join Waitlist
        </button>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © 2025 Raasystem — All rights reserved.
      </footer>
    </div>
  );
}

