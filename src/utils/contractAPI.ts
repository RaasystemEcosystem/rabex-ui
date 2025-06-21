import { ethers } from 'ethers';

// ABI Imports (Ensure these paths match your frontend structure)
import RaaskoinABI from '@/abi/Raaskoin.json';
import RaastokenABI from '@/abi/Raastoken.json';
import RabexABI from '@/abi/Rabex.json';
import RaaspayABI from '@/abi/Raaspay.json';
import GoldPriceOracleABI from '@/abi/GoldPriceOracle.json';

// Contract addresses from .env or hardcoded (replace these if loading from backend)
const RAASKOIN_ADDRESS = import.meta.env.VITE_RAASKOIN_ADDRESS!;
const RAASTOKEN_ADDRESS = import.meta.env.VITE_RAASTOKEN_ADDRESS!;
const RABEX_ADDRESS = import.meta.env.VITE_RABEX_ADDRESS!;
const RAASPAY_ADDRESS = import.meta.env.VITE_RAASPAY_ADDRESS!;
const GOLDPRICEORACLE_ADDRESS = import.meta.env.VITE_GOLDPRICEORACLE_ADDRESS!;

// 🔌 Connect to MetaMask
const getProvider = () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  return new ethers.providers.Web3Provider(window.ethereum);
};

// ✍️ Get signer for write functions (transactions)
const getSigner = async () => {
  const provider = getProvider();
  await provider.send('eth_requestAccounts', []);
  return provider.getSigner();
};

// 📦 Universal contract loader
const loadContract = async (address: string, abi: any) => {
  const signer = await getSigner();
  return new ethers.Contract(address, abi, signer);
};

// ---- Contract Getters ---- //
export const getRaaskoinContract = async () => {
  return await loadContract(RAASKOIN_ADDRESS, RaaskoinABI);
};

export const getRaastokenContract = async () => {
  return await loadContract(RAASTOKEN_ADDRESS, RaastokenABI);
};

export const getRabexContract = async () => {
  return await loadContract(RABEX_ADDRESS, RabexABI);
};

export const getRaaspayContract = async () => {
  return await loadContract(RAASPAY_ADDRESS, RaaspayABI);
};

export const getGoldPriceOracleContract = async () => {
  return await loadContract(GOLDPRICEORACLE_ADDRESS, GoldPriceOracleABI);
};
