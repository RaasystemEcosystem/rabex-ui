import { useState, useEffect } from "react";
import { ethers } from "ethers";
import raaskoinAbi from "@/abis/Raaskoin.json";

import MintForm from "./components/MintForm";
import BurnForm from "./components/BurnForm";
import ApproveForm from "./components/ApproveForm";
import StrategySimulator from "./components/StrategySimulator";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const contractAddress = "0x1f1ddc9ecC8a82267188c699f472B70D599a3055";

export default function AdminPanel() {
  const [walletAddress, setWalletAddress] = useState("");
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = accounts[0];
        setWalletAddress(address);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const raaskoinContract = new ethers.Contract(contractAddress, raaskoinAbi, signer);
        setContract(raaskoinContract);

        const supply = await raaskoinContract.totalSupply();
        const decimals = await raaskoinContract.decimals();
        setTotalSupply(ethers.utils.formatUnits(supply, decimals));
      } catch (err) {
        console.error("Wallet connection error:", err);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  // Update total supply after mint or burn
  const refreshTotalSupply = async () => {
    if (!contract) return;
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    setTotalSupply(ethers.utils.formatUnits(supply, decimals));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">RABEX Admin Panel</h1>

      {/* Connect Wallet */}
      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4">
          <Label className="text-lg">Connect Wallet</Label>
          <Button onClick={connectWallet}>
            {walletAddress ? "Wallet Connected" : "Connect Wallet"}
          </Button>
          {walletAddress && (
            <div className="text-sm text-gray-700">
              <p>Address: {walletAddress}</p>
              <p>
                Total Supply: <strong>{totalSupply}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Mint Form */}
      <MintForm contract={contract} walletAddress={walletAddress} onSuccess={refreshTotalSupply} />

      {/* Burn Form */}
      <BurnForm contract={contract} onSuccess={refreshTotalSupply} />

      {/* Approve Form */}
      <ApproveForm contract={contract} />

      {/* AI Trading Strategy Simulator */}
      <StrategySimulator />
    </main>
  );
}
