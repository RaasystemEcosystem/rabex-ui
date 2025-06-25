import { JsonRpcProvider, Contract } from 'ethers';
import RaaskoinABI from '@/abis/Raaskoin.json';
import RaastokenABI from '@/abis/Raastoken.json';
import raaspayABI from '@/abis/raaspay.json';
import RaaspayABI from '@/abis/Raaspay.json';
import OracleABI from '@/abis/GoldPriceOracle.json';

const provider = new JsonRpcProvider(import.meta.env.VITE_RPC_URL);

export const getRaaskoinContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASKOIN_ADDRESS, RaaskoinABI, provider);

export const getRaastokenContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASTOKEN_ADDRESS, RaastokenABI, provider);

export const getraaspayContract = () =>
  new ethers.Contract(import.meta.env.VITE_raaspay_ADDRESS, raaspayABI, provider);

export const getRaaspayContract = () =>
  new ethers.Contract(import.meta.env.VITE_RAASPAY_ADDRESS, RaaspayABI, provider);

export const getGoldPriceOracleContract = () =>
  new ethers.Contract(import.meta.env.VITE_GOLDPRICEORACLE_ADDRESS, OracleABI, provider);



