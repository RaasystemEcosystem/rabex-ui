// File: components/WalletConnect.jsx
import React, { useEffect, useState } from "react";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [xdcCompatible, setXdcCompatible] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);

        // Detect if XDC-compatible network (chainId 50 or 51)
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId === "0x33" || chainId === "0x51") {
          setXdcCompatible(true);
        } else {
          setXdcCompatible(false);
        }
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask or XDC-compatible wallet not detected.");
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setWalletAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow text-white">
      <h2 className="text-xl font-semibold mb-2">Wallet Connection</h2>
      {walletAddress ? (
        <div className="space-y-2">
          <p><span className="font-bold">Connected:</span> {walletAddress}</p>
          <p className={xdcCompatible ? "text-green-400" : "text-yellow-400"}>
            {xdcCompatible ? "XDC-Compatible Network Detected" : "Non-XDC Network (Switch to Apothem or XDC Mainnet)"}
          </p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
