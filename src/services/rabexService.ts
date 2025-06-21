import { getRabexContract } from "@/lib/contractAPI";

export const fetchOrderBook = async (): Promise<any> => {
  const contract = getRabexContract();
  return await contract.getOrderBook(); // Assuming such a method exists
};
