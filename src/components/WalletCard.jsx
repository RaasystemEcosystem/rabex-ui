import React, { useState } from "react";
import { useWallet } from "../context/WalletProvider";
import { ethers } from "ethers";

export default function WalletCard() {
  const { provider, address } = useWallet();
  const [balance, setBalance] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    async function fetchBalance() {
      if (!provider || !address) return setBalance(null);

      setLoading(true);
      try {
        const bal = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(bal));
      } catch {
        setBalance(null);
      } finally {
        setLoading(false);
      }
    }
    fetchBalance();
  }, [provider, address]);

  const handleCopy = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6 max-w-md mx-auto shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">Wallet Info</h2>

      {address ? (
        <>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="font-semibold">Address:</span>{" "}
              <span className="font-mono text-sm">
                {address.slice(0, 6)}...{address.slice(-4)}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="text-yellow-300 hover:text-yellow-400 text-sm font-semibold"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div>
            <span className="font-semibold">Balance:</span>{" "}
            {loading ? (
              <span>Loading...</span>
            ) : balance ? (
              <span>{parseFloat(balance).toFixed(4)} ETH</span>
            ) : (
              <span>N/A</span>
            )}
          </div>
        </>
      ) : (
        <p className="text-yellow-400">Connect your wallet to see info.</p>
      )}
    </div>
  );
}
