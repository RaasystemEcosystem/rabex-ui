import { ethers } from "ethers";

// Change to Mainnet URL if deploying live
const RPC_URL = "https://erpc.apothem.network";

// Raaskoin Oracle Address (Test Oracle)
const oracleAddress = "0x8bfa7644c53f338557a5fd52710cba04fc07d510";
const oracleAbi = [
  "function getLatestPrice() view returns (uint256)"
];

const provider = new ethers.JsonRpcProvider(RPC_URL);

export async function fetchGoldPrice() {
  const contract = new ethers.Contract(oracleAddress, oracleAbi, provider);
  const raw = await contract.getLatestPrice();
  return ethers.formatUnits(raw, 2); // Adjust decimals if your oracle uses more
}
