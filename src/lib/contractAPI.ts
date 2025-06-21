import { ethers } from 'ethers';
import RaaskoinABI from '@/abi/Raaskoin.json';
import RaastokenABI from '@/abi/Raastoken.json';
import RabexABI from '@/abi/Rabex.json';
import RaaspayABI from '@/abi/Raaspay.json';
import OracleABI from '@/abi/GoldPriceOracle.json';

const provider = new ethers.providers.JsonRpcProvider(import.meta.env.VITE_RPC_URL); // or process.env for backend

export const getRaaskoinContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASKOIN_ADDRESS, RaaskoinABI, provider);

export const getRaastokenContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASTOKEN_ADDRESS, RaastokenABI, provider);

export const getRabexContract = () =>
  new ethers.Contract(import.meta.env.VITE_RABEX_ADDRESS, RabexABI, provider);

export const getRaaspayContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASPAY_ADDRESS, RaaspayABI, provider);

export const getGoldPriceOracleContract = () =>
  new ethers.Contract(import.meta.env.VITE_GOLDPRICEORACLE_ADDRESS, OracleABI, provider);
