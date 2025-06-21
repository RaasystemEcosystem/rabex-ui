import { useState } from "react";
import { ethers } from "ethers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApproveForm({ contract }) {
  const [approveAmount, setApproveAmount] = useState("");
  const [spenderAddress, setSpenderAddress] = useState("");

  const handleApprove = async () => {
    if (!contract || !approveAmount || !spenderAddress) return alert("Fill all fields and connect wallet");
    try {
      const decimals = await contract.decimals();
      const tx = await contract.approve(spenderAddress, ethers.utils.parseUnits(approveAmount, decimals));
      await tx.wait();
      alert("Approval successful");
      setApproveAmount("");
      setSpenderAddress("");
    } catch (err) {
      alert("Approval failed");
      console.error(err);
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="grid gap-4">
        <Label className="text-lg">Approve Spender</Label>
        <Input
          placeholder="Spender Address"
          value={spenderAddress}
          onChange={(e) => setSpenderAddress(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount to Approve"
          value={approveAmount}
          onChange={(e) => setApproveAmount(e.target.value)}
        />
        <Button onClick={handleApprove}>Approve</Button>
      </CardContent>
    </Card>
  );
}
