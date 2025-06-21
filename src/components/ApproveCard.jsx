// File: /src/components/rabex/ApproveCard.jsx
export default function ApproveCard({ approvalData, setApprovalData, handleApprove }) {
  return (
    <div className="card">
      <h2>3. Approve Allowance</h2>
      <input
        type="text"
        placeholder="Spender address"
        value={approvalData.spender}
        onChange={(e) => setApprovalData({ ...approvalData, spender: e.target.value })}
      />
      <input
        type="text"
        placeholder="Amount"
        value={approvalData.amount}
        onChange={(e) => setApprovalData({ ...approvalData, amount: e.target.value })}
      />
      <button onClick={handleApprove}>Approve</button>
    </div>
  );
}
