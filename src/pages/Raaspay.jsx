// src/pages/Raaspay.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWallet } from "@/context/WalletProvider";

export default function RaaspayPage() {
  const { address, connectWallet, sendTransaction } = useWallet();

  // Modal states
  const [sendOpen, setSendOpen] = useState(false);
  const [receiveOpen, setReceiveOpen] = useState(false);
  const [fiatOpen, setFiatOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  // Form states
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [fiatAmount, setFiatAmount] = useState("");
  const [fiatResult, setFiatResult] = useState(null);

  const handleSend = () => {
    if (!sendAddress || !sendAmount) return alert("Fill all fields");
    sendTransaction(sendAddress, sendAmount)
      .then(() => alert("Transaction sent!"))
      .catch((err) => alert("Error: " + err.message));
    setSendOpen(false);
  };

  const handleFiatConvert = () => {
    if (!fiatAmount) return alert("Enter amount");
    // Placeholder conversion, replace with real Raaspay API call
    setFiatResult((parseFloat(fiatAmount) * 1.02).toFixed(2));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/raaspay", label: "Raaspay" },
    { to: "/raaswallet", label: "Raaswallet" },
    { to: "/trade", label: "Trade" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">

      {/* Navbar */}
      <header className="border-b border-gray-800 bg-black z-10">
        <div className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">

          {/* Left: Title */}
          <h1 className="text-2xl font-extrabold tracking-wide text-yellow-500">
            Raasystem
          </h1>

          {/* Center: Menu */}
          <nav className="flex-1 flex justify-center gap-6 text-sm sm:text-base font-medium">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
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

          {/* Right: Wallet */}
          <div>
            {address ? (
              <span className="text-sm font-mono text-yellow-400">
                {address.slice(0, 6)}...{address.slice(-4)}
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

          {/* Page Header */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Raaspay - Seamless Payments
            </h2>
            <p className="text-lg text-gray-300">
              Powering Effortless Crypto and Fiat Transactions Within the Raasystem Ecosystem.
            </p>
          </section>

          {/* Feature Grid */}
          <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto p-8">
            {[
              { title: "Send Crypto", desc: "Transfer Raas, Raak, and Other Tokens Seamlessly.", action: "Send", onClick: () => setSendOpen(true) },
              { title: "Receive Payments", desc: "Generate Payment Links or Invoices for Crypto or Fiat.", action: "Generate", onClick: () => setReceiveOpen(true) },
              { title: "Fiat Gateway", desc: "Instantly Convert Crypto-to-Fiat and Fiat-to-Crypto.", action: "Convert", onClick: () => setFiatOpen(true) },
              { title: "Transaction History", desc: "View all your Raaspay Transactions in One Dashboard.", action: "View", onClick: () => setHistoryOpen(true) },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">{feature.title}</h3>
                <p className="mb-4 text-gray-300 text-center">{feature.desc}</p>
                <button
                  onClick={feature.onClick}
                  className="mt-auto bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition"
                >
                  {feature.action}
                </button>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Modals */}
      {sendOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md w-full">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Send Crypto</h3>
            <input
              type="text"
              placeholder="Recipient Address"
              value={sendAddress}
              onChange={(e) => setSendAddress(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-black text-white border border-gray-700"
            />
            <input
              type="number"
              placeholder="Amount"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-black text-white border border-gray-700"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setSendOpen(false)} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Cancel</button>
              <button onClick={handleSend} className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Send</button>
            </div>
          </div>
        </div>
      )}

      {receiveOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md w-full text-center">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Receive Payment</h3>
            <p className="text-gray-300 mb-4">Payment link will be generated here.</p>
            <div className="h-32 w-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500">QR Code</div>
            <button onClick={() => setReceiveOpen(false)} className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Close</button>
          </div>
        </div>
      )}

      {fiatOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md w-full">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Fiat Gateway</h3>
            <input
              type="number"
              placeholder="Amount in Raaskoin"
              value={fiatAmount}
              onChange={(e) => setFiatAmount(e.target.value)}
              className="w-full mb-4 p-2 rounded bg-black text-white border border-gray-700"
            />
            <div className="flex justify-end gap-2 mb-2">
              <button onClick={() => setFiatOpen(false)} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Cancel</button>
              <button onClick={handleFiatConvert} className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Convert</button>
            </div>
            {fiatResult && <p className="text-yellow-300 font-bold">Converted: ${fiatResult}</p>}
          </div>
        </div>
      )}

      {historyOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full">
            <h3 className="text-2xl text-yellow-300 font-bold mb-4">Transaction History</h3>
            <p className="text-gray-300 mb-4">List of past transactions will appear here.</p>
            <button onClick={() => setHistoryOpen(false)} className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

