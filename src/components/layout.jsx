// src/components/layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import { useWallet } from '@/context/WalletProvider';

export default function Layout() {
  const { address, connectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400">RABEX UI</h1>
        <div>
          {address ? (
            <span className="text-sm font-mono text-yellow-400">
              Connected: {address.slice(0, 6)}...{address.slice(-4)}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <Outlet /> {/* This renders child routes */}
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 border-t border-gray-800 py-4">
        © 2025 Raasystem — All rights reserved.
      </footer>
    </div>
  );
}
