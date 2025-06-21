import { getRaaswalletContract } from "@/lib/contractAPI";

export const fetchWalletBalance = async (address: string): Promise<string> => {
  const contract = getRaaswalletContract();
  const balance = await contract.getWalletBalance(address);
  return balance.toString(); // Format if necessary
};

export const isWalletRegistered = async (address: string): Promise<boolean> => {
  const contract = getRaaswalletContract();
  return await contract.isRegistered(address);
};
