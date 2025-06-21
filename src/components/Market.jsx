import MarketData from "./MarketData";

export default function Market() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Market</h1>
      <MarketData />
    </div>
  );
}
