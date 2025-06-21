// File: /src/lib/getTokenBalance.js
import { ethers } from "ethers";

export const getTokenBalance = async (contract, walletAddress) => {
  const [name, decimals, rawBalance] = await Promise.all([
    contract.name(),
    contract.decimals(),
    contract.balanceOf(walletAddress)
  ]);

  return {
    name,
    balance: ethers.utils.formatUnits(rawBalance, decimals)
  };
};
