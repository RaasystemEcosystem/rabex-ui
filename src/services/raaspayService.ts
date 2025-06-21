import { getRaaspayContract } from "@/lib/contractAPI";

export const isMerchantRegistered = async (merchantAddress: string): Promise<boolean> => {
  const contract = getRaaspayContract();
  return await contract.isMerchant(merchantAddress);
};
