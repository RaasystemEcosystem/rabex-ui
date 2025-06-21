// File: src/components/DashboardMain.jsx

import React from 'react';
import WalletPanel from '@/components/wallet/WalletPanel';

export default function DashboardMain({ goldPrice }) {
  return (
    <div className="bg-black text-white font-sans min-h-screen p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">📈 RABEX Trading Dashboard</h1>
        <p className="text-gray-300 mt-2">AI-powered crypto & asset trading on XDC</p>
        <p className="mt-2 text-lg">
          Current Gold Price:{' '}
          <span className="text-yellow-400">
            {goldPrice !== null ? `$${goldPrice.toFixed(2)}` : 'Loading...'}
          </span>
        </p>
      </header>

      {/* Grid Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Market Overview */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-yellow-400 text-xl font-semibold mb-2">Market Overview</h2>
          <p className="text-gray-100">Market data and charts coming soon...</p>
        </div>

        {/* Wallet Summary */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-yellow-400 text-xl font-semibold mb-2">Wallet Summary</h2>
          <p className="text-gray-100">Wallet balance and transaction history here.</p>
        </div>

        {/* Order Book */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-yellow-400 text-xl font-semibold mb-2">Order Book</h2>
          <p className="text-gray-100">Live orders will be displayed here.</p>
        </div>
      </section>

      {/* Active Trades */}
      <section className="mt-10 bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-yellow-400 text-xl font-semibold mb-2">Active Trades</h2>
        <p className="text-gray-100">Summary of your active trades will appear here.</p>
      </section>
    </div>
  );
}
