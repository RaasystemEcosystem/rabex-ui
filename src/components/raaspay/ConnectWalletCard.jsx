// File: src/components/raaspay/ConnectWalletCard.jsx
import React from "react";

export default function ConnectWalletCard({ walletAddress, connectWallet, tokenInfo }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow space-y-3">
      <h2 className="text-xl font-bold text-accent">🔗 Connect Wallet</h2>
      {walletAddress ? (
        <div className="space-y-1">
          <p>
            <span className="text-gray-400">Connected:</span>{" "}
            <span className="text-yellow-400">{walletAddress}</span>
          </p>
          <p className="text-sm text-gray-500">Balance: {tokenInfo?.balance ?? 0} Raaskoin</p>
        </div>
      ) : (
        <button
          className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}


