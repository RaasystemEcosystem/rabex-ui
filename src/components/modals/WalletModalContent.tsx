import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletProvider";
import { ethers } from "ethers";

interface WalletModalContentProps {
  onClose: () => void;
}

export default function WalletModalContent({ onClose }: WalletModalContentProps) {
  const { provider, address } = useWallet();
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      if (!provider || !address) {
        setBalance(null);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const bal = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(bal));
      } catch (err) {
        console.error("Failed to fetch balance", err);
        setError("Failed to fetch balance");
        setBalance(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBalance();
  }, [provider, address]);

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : null;

  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-sm w-full text-white">
      <button
        onClick={onClose}
        className="mb-4 text-yellow-400 hover:text-yellow-300 font-semibold"
      >
        Close
      </button>

      <h2 className="text-2xl font-bold mb-6">Wallet Details</h2>

      {!address ? (
        <div className="text-center">
          <p className="mb-4">No wallet connected.</p>
          <button
            onClick={async () => {
              try {
                if (!window.ethereum) {
                  setError("MetaMask not detected");
                  return;
                }
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                // You might want to update wallet context here after connecting
                window.location.reload();
              } catch (err) {
                setError("Failed to connect wallet");
              }
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2">
            <span className="font-mono text-yellow-400">{shortAddress}</span>
          </p>

          {loading ? (
            <p>Loading balance...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p>Balance: {balance ? parseFloat(balance).toFixed(4) + " ETH" : "N/A"}</p>
          )}
        </div>
      )}
    </div>
  );
}
