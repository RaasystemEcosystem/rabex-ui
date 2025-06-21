// File: /src/lib/initContract.js
import { ethers } from "ethers";
import RaaskoinABI from "@/abis/Raaskoin.json";

export const initContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractAddress = process.env.NEXT_PUBLIC_RAASKOIN_CONTRACT_ADDRESS;
  const contract = new ethers.Contract(contractAddress, RaaskoinABI, signer);

  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const walletAddress = accounts[0];

  return { provider, signer, contract, walletAddress };
};
