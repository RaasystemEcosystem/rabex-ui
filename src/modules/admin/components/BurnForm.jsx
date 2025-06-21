import { useState } from "react";
import { ethers } from "ethers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BurnForm({ contract, onSuccess }) {
  const [burnAmount, setBurnAmount] = useState("");

  const handleBurn = async () => {
    if (!contract || !burnAmount) return alert("Fill amount and connect wallet");
    try {
      const decimals = await contract.decimals();
      const tx = await contract.burn(ethers.utils.parseUnits(burnAmount, decimals));
      await tx.wait();
      alert("Burn successful");
      onSuccess();
      setBurnAmount("");
    } catch (err) {
      alert("Burn failed");
      console.error(err);
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="grid gap-4">
        <Label className="text-lg">Burn Tokens</Label>
        <Input
          type="number"
          placeholder="Amount to Burn"
          value={burnAmount}
          onChange={(e) => setBurnAmount(e.target.value)}
        />
        <Button onClick={handleBurn}>Burn</Button>
      </CardContent>
    </Card>
  );
}
