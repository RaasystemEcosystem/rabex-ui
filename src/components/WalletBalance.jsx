import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWallet } from "../context/WalletProvider";

export default function WalletBalance() {
  const { provider, address } = useWallet();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      if (!provider || !address) {
        setBalance(null);
        return;
      }
      setLoading(true);
      try {
        const bal = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(bal));
      } catch (err) {
        console.error("Error fetching balance:", err);
        setBalance(null);
      } finally {
        setLoading(false);
      }
    }
    fetchBalance();
  }, [provider, address]);

  if (!address) {
    return <div className="text-yellow-400">Connect wallet to see balance</div>;
  }

  return (
    <div className="text-white">
      {loading ? (
        <span>Loading balance...</span>
      ) : (
        <span>
          Balance: <strong>{balance ? `${parseFloat(balance).toFixed(4)} ETH` : "N/A"}</strong>
        </span>
      )}
    </div>
  );
}
