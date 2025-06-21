import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card"; // Make sure this is imported
import { toast } from "sonner";

export default function ConnectWalletCard({ walletAddress, connectWallet, tokenInfo }) {
  return (
    <Card className="mb-8">
      <CardContent className="flex flex-col gap-4">
        <Label className="text-lg">Connect Wallet</Label>
        <Button onClick={connectWallet}>
          {walletAddress ? "Wallet Connected" : "Connect Wallet"}
        </Button>
        {walletAddress && (
          <div className="text-sm text-gray-700">
            <p>Address: {walletAddress}</p>
            <p>
              {tokenInfo.name} Balance: <strong>{tokenInfo.balance}</strong>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
