// src/context/WalletProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAddress(accounts[0]);
      } else {
        alert("MetaMask not found. Please install it.");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  useEffect(() => {
    // Optional: Auto-connect if already authorized
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
