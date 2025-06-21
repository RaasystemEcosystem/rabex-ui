// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "@/components/Home";
import Dashboard from "@/components/Dashboard";
import WalletPanel from "@/components/WalletPanel";
import TradePanel from "@/components/TradePanel";
import ActiveTrades from "@/components/ActiveTrades";
import { useWallet } from "@/context/WalletProvider";

export default function App() {
  const { address, connectWallet } = useWallet();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/wallet", label: "Wallet" },
    { to: "/trade", label: "Trade" },
    { to: "/activetrades", label: "Active Trades" },
    { to: "/raaswallet", label: "Raaswallet" },
    { to: "/raaspay", label: "Raaspay" },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        {/* Header */}
        <header className="border-b border-gray-800 bg-black z-10">
          <div className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold tracking-wide text-yellow-500">RABEX UI</h1>

            <nav className="flex gap-10 text-white text-lg font-medium">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `pb-1 border-b-2 transition duration-150 ${
                      isActive
                        ? "text-yellow-400 border-yellow-400"
                        : "text-white border-transparent hover:text-yellow-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="ml-4">
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
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto w-full px-6 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/wallet" element={<WalletPanel />} />
              <Route path="/trade" element={<TradePanel />} />
              <Route path="/activetrades" element={<ActiveTrades />} />
              <Route
                path="/raaswallet"
                element={<div className="text-center text-yellow-400">Raaswallet Coming Soon</div>}
              />
              <Route
                path="/raaspay"
                element={<div className="text-center text-yellow-400">Raaspay Coming Soon</div>}
              />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 border-t border-gray-800 py-4">
          © 2025 Raasystem — All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
