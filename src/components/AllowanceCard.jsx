// File: /src/components/rabex/AllowanceCard.jsx
export default function AllowanceCard({ allowanceCheck, setAllowanceCheck, handleCheckAllowance }) {
  return (
    <div className="card">
      <h2>4. Check Allowance</h2>
      <input
        type="text"
        placeholder="Spender address"
        value={allowanceCheck.spender}
        onChange={(e) => setAllowanceCheck({ ...allowanceCheck, spender: e.target.value })}
      />
      <button onClick={handleCheckAllowance}>Check</button>
      {allowanceCheck.result !== null && (
        <p>Allowance: {allowanceCheck.result} Raaskoin</p>
      )}
    </div>
  );
}
