import React from 'react';

export default function Wallet({ isConnected, connectWallet }) {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-gold text-2xl font-bold mb-4">Wallet (Demo)</h2>
      {isConnected ? (
        <p className="text-green-400">✅ Wallet Connected</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-gold text-black font-semibold px-4 py-2 rounded hover:bg-gold-deep"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}


