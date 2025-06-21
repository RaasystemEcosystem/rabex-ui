import dotenv from 'dotenv';
dotenv.config();

import { ethers } from 'ethers';

import {
  getRaaskoinContract,
  getRaastokenContract,
  getRabexContract,
  getRaaspayContract,
  getGoldPriceOracleContract,
} from '@/lib/contractAPI';

// Optionally override .env values here if needed
const userAddress = '0xYourTestAddressHere'; // Replace with a real address

// ---- Raaskoin Example ----
const getRaaskoinBalance = async (address: string) => {
  const contract = getRaaskoinContract();
  const balance = await contract.balanceOf(address);
  console.log(`Raaskoin balance of ${address}: ${ethers.utils.formatUnits(balance, 18)}`);
};

// ---- Raastoken Example ----
const getRaastokenTotalSupply = async () => {
  const contract = getRaastokenContract();
  const supply = await contract.totalSupply();
  console.log(`Total Raastoken supply: ${ethers.utils.formatUnits(supply, 18)}`);
};

// ---- Rabex Example ----
const getRabexOrderBookDepth = async () => {
  const contract = getRabexContract();
  try {
    const depth = await contract.getOrderBookDepth(); // Confirm method exists in ABI
    console.log(`Rabex Order Book Depth: ${depth}`);
  } catch (err) {
    console.error('Rabex order book depth error:', err);
  }
};

// ---- Raaspay Example ----
const getMerchantBalance = async (merchant: string) => {
  const contract = getRaaspayContract();
  const balance = await contract.getMerchantBalance(merchant);
  console.log(`Raaspay merchant balance: ${ethers.utils.formatEther(balance)}`);
};

// ---- GoldPriceOracle Example ----
const getCurrentGoldPrice = async () => {
  const contract = getGoldPriceOracleContract();
  const price = await contract.getLatestPrice();
  console.log(`Gold Price from Oracle: ${ethers.utils.formatUnits(price, 2)} USD/oz`);
};

// ---- TEST RUN ----
(async () => {
  await getRaaskoinBalance(userAddress);
  await getRaastokenTotalSupply();
  await getRabexOrderBookDepth();
  await getMerchantBalance(userAddress);
  await getCurrentGoldPrice();
})();

