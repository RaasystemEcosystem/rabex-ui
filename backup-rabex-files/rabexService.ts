import { getRaaspayContract } from "@/lib/contractAPI";

export const fetchOrderBook = async (): Promise<any> => {
  const contract = getRaaspayContract();
  return await contract.getOrderBook(); // Assuming such a method exists
};


