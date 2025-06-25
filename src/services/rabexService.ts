import { getraaspayContract } from "@/lib/contractAPI";

export const fetchOrderBook = async (): Promise<any> => {
  const contract = getraaspayContract();
  return await contract.getOrderBook(); // Assuming such a method exists
};



