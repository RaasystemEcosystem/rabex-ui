import { useState } from "react";
import { ethers } from "ethers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MintForm({ contract, walletAddress, onSuccess }) {
  const [mintAmount, setMintAmount] = useState("");

  const handleMint = async () => {
    if (!contract || !mintAmount) return alert("Fill amount and connect wallet");
    try {
      const decimals = await contract.decimals();
      const tx = await contract.mint(walletAddress, ethers.utils.parseUnits(mintAmount, decimals));
      await tx.wait();
      alert("Mint successful");
      onSuccess();
      setMintAmount("");
    } catch (err) {
      alert("Mint failed");
      console.error(err);
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="grid gap-4">
        <Label className="text-lg">Mint Tokens</Label>
        <Input
          type="number"
          placeholder="Amount to Mint"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
        />
        <Button onClick={handleMint}>Mint</Button>
      </CardContent>
    </Card>
  );
}
