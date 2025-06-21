import { getGoldPriceOracleContract } from "@/lib/contractAPI";

export const fetchGoldPrice = async (): Promise<string> => {
  try {
    const contract = getGoldPriceOracleContract();
    const price = await contract.getLatestGoldPrice(); // ethers auto handles `.call()`
    return price.toString(); // Ensure compatibility
  } catch (error) {
    console.error("Error fetching gold price:", error);
    throw error;
  }
};
