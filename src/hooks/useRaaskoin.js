import { useState } from "react";
import { ethers } from "ethers";
import { getRaaskoinContract } from "@/lib/contractAPI.ts";
import { getWalletAddress } from "@/lib/xdc.ts";

export default function useRaaskoin() {
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenInfo, setTokenInfo] = useState({ name: "", symbol: "", balance: null });
  const [contract, setContract] = useState(null);

  const [transferData, setTransferData] = useState({ to: "", amount: "" });
  const [approvalData, setApprovalData] = useState({ spender: "", amount: "" });
  const [allowanceCheck, setAllowanceCheck] = useState({ spender: "", result: null });
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      const address = await getWalletAddress();
      const contractInstance = getRaaskoinContract();

      setWalletAddress(address);
      setContract(contractInstance);

      const [name, symbol, decimals, rawBalance] = await Promise.all([
        contractInstance.name(),
        contractInstance.symbol(),
        contractInstance.decimals(),
        contractInstance.balanceOf(address),
      ]);

      const balance = ethers.utils.formatUnits(rawBalance, decimals);
      setTokenInfo({ name, symbol, balance });
      setError(null);
    } catch (err) {
      console.error("Wallet Connection Failed:", err);
      setError("Failed to connect wallet.");
    }
  };

  const handleTransfer = async () => {
    if (!contract) return;
    try {
      const decimals = await contract.decimals();
      const tx = await contract.transfer(
        transferData.to,
        ethers.utils.parseUnits(transferData.amount, decimals)
      );
      await tx.wait();

      // Refresh balance
      const rawBalance = await contract.balanceOf(walletAddress);
      const balance = ethers.utils.formatUnits(rawBalance, decimals);
      setTokenInfo((prev) => ({ ...prev, balance }));

      setTransferData({ to: "", amount: "" });
      setError(null);
    } catch (err) {
      console.error("Transfer Failed:", err);
      setError("Transfer failed.");
    }
  };

  const handleApprove = async () => {
    if (!contract) return;
    try {
      const decimals = await contract.decimals();
      const tx = await contract.approve(
        approvalData.spender,
        ethers.utils.parseUnits(approvalData.amount, decimals)
      );
      await tx.wait();

      setApprovalData({ spender: "", amount: "" });
      setError(null);
    } catch (err) {
      console.error("Approve Failed:", err);
      setError("Approve failed.");
    }
  };

  const handleCheckAllowance = async () => {
    if (!contract || !walletAddress) return;
    try {
      const decimals = await contract.decimals();
      const result = await contract.allowance(walletAddress, allowanceCheck.spender);
      setAllowanceCheck((prev) => ({
        ...prev,
        result: ethers.utils.formatUnits(result, decimals),
      }));
      setError(null);
    } catch (err) {
      console.error("Allowance Check Failed:", err);
      setError("Allowance check failed.");
    }
  };

  return {
    walletAddress,
    tokenInfo,
    transferData,
    approvalData,
    allowanceCheck,
    error,
    connectWallet,
    handleTransfer,
    handleApprove,
    handleCheckAllowance,
    setTransferData,
    setApprovalData,
    setAllowanceCheck,
  };
}
