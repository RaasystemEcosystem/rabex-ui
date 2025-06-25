// File: src/pages/raaspay/index.jsx

import { useState } from "react";
import ConnectWalletCard from "@/components/raaspay/ConnectWalletCard";
import PaymentFormCard from "@/components/raaspay/PaymentFormCard";
import ApprovalCard from "@/components/raaspay/ApproveCard";
import AllowanceCard from "@/components/raaspay/AllowanceCard";
import useRaaskoin from "@/hooks/useRaaskoin";

export default function RaaspayDashboard() {
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
    <main className="min-h-screen bg-black text-white py-10 px-4 md:px-20 space-y-10">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400 text-center">
        Raaspay Payment Dashboard
      </h1>

      <ConnectWalletCard
        walletAddress={walletAddress}
        connectWallet={connectWallet}
        tokenInfo={tokenInfo}
      />

      <PaymentFormCard
        transferData={transferData}
        onTransfer={handleTransfer}
        setTransferData={setTransferData}
      />

      <ApprovalCard
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



