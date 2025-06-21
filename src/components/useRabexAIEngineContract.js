// useRabexAIEngineContract.js
import { useEffect, useState } from "react";
import { Contract, BrowserProvider } from "ethers";
import RabexAIEngineABI from "@/abi/RabexAIEngine.json";

export function useRabexAIEngineContract() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function loadContract() {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const rabexAIEngine = new Contract(
          "0x21529C3F45Dc204650e271D82C0E176b813D7Cee",
          RabexAIEngineABI,
          signer
        );
        setContract(rabexAIEngine);
      }
    }

    loadContract();
  }, []);

  return contract;
}
