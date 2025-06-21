import { ethers } from "ethers";
import { getRaastokenContract } from "@/lib/contractAPI";

export const fetchRaastokenTotalSupply = async (): Promise<string> => {
  const contract = getRaastokenContract();
  const totalSupply = await contract.totalSupply();
  return ethers.utils.formatUnits(totalSupply, 18);
};

export const fetchRaastokenBalance = async (address: string): Promise<string> => {
  const contract = getRaastokenContract();
  const balance = await contract.balanceOf(address);
  return ethers.utils.formatUnits(balance, 18);
};
