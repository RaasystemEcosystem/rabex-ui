// useraaspayAIEngineContract.js
import { useEffect, useState } from "react";
import { Contract, BrowserProvider } from "ethers";
import raaspayAIEngineABI from "@/abi/raaspayAIEngine.json";

export function useraaspayAIEngineContract() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function loadContract() {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const raaspayAIEngine = new Contract(
          "0x21529C3F45Dc204650e271D82C0E176b813D7Cee",
          raaspayAIEngineABI,
          signer
        );
        setContract(raaspayAIEngine);
      }
    }

    loadContract();
  }, []);

  return contract;
}



