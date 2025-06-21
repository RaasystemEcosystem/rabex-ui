// File: /pages/rabex/index.jsx
import { useState } from "react";
import ConnectWalletCard from "@/components/rabex/ConnectWalletCard";
import TransferCard from "@/components/rabex/TransferCard";
import ApproveCard from "@/components/rabex/ApproveCard";
import AllowanceCard from "@/components/rabex/AllowanceCard";
import useRaaskoin from "@/hooks/useRaaskoin";

export default function RabexDashboard() {
  const {
    walletAddress,
    tokenInfo,
    transferData,
    approvalData,
    allowanceCheck,
    connectWallet,
    handleTransfer,
    handleApprove,
    handleCheckAllowance,
    setTransferData,
    setApprovalData,
    setAllowanceCheck,
  } = useRaaskoin();

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">RABEX Token Dashboard</h1>

      <ConnectWalletCard
        walletAddress={walletAddress}
        connectWallet={connectWallet}
        tokenInfo={tokenInfo}
      />

      <TransferCard
        transferData={transferData}
        onTransfer={handleTransfer}
        setTransferData={setTransferData}
      />

      <ApproveCard
        approvalData={approvalData}
        onApprove={handleApprove}
        setApprovalData={setApprovalData}
      />

      <AllowanceCard
        allowanceCheck={allowanceCheck}
        walletAddress={walletAddress}
        onCheck={handleCheckAllowance}
        setAllowanceCheck={setAllowanceCheck}
      />
    </main>
  );
}

// -------- Additional Files To Create ----------

// File: /components/rabex/ConnectWalletCard.jsx
// File: /components/rabex/TransferCard.jsx
// File: /components/rabex/ApproveCard.jsx
// File: /components/rabex/AllowanceCard.jsx
// File: /hooks/useRaaskoin.js
// File: /lib/raaskoin.js

// These files will contain logic/UI for each card and centralized logic for Raaskoin smart contract interaction.

// .env.local (add this at root level):
// NEXT_PUBLIC_RAASKOIN_CONTRACT_ADDRESS=0x1f1ddc9ecC8a82267188c699f472B70D599a3055
