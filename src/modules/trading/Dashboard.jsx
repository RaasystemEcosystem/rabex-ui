import React, { useState } from "react";

import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import PriceChart from "./components/PriceChart";
import PriceFeedDisplay from "./components/PriceFeedDisplay";
import TransactionStatus from "./components/TransactionStatus";
import useTradingPair from "./useTradingPair";

export default function Dashboard() {
  const { tradingPair, setTradingPair, orderBook } = useTradingPair();
  const [txStatus, setTxStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleOrderSubmit = async ({ orderType, price, amount }) => {
    try {
      setTxStatus("pending");
      setMessage("Submitting order...");

      // Simulate transaction logic
      await new Promise((res) => setTimeout(res, 2000));

      // TODO: Replace with actual order logic via backend or smart contract
      setTxStatus("success");
      setMessage(`${orderType} order for ${amount} RAK at ${price} submitted.`);
    } catch (error) {
      setTxStatus("error");
      setMessage("Failed to submit order.");
    }
  };

  const fetchPrice = async () => {
    // TODO: Replace with real-time price fetch
    return 58.23;
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Rabex Trading Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <PriceFeedDisplay fetchPrice={fetchPrice} />
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <OrderForm onSubmit={handleOrderSubmit} />
          </div>
        </div>

        {txStatus && <TransactionStatus status={txStatus} message={message} />}

        <div className="my-8">
          <PriceChart tradingPair={tradingPair} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Order Book Preview</h2>
          <div className="bg-gray-800 p-4 rounded-lg space-y-2">
            {orderBook.map((order, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className={`font-bold ${order.orderType === "Buy" ? "text-green-400" : "text-red-400"}`}>
                  {order.orderType}
                </span>
                <span>
                  {order.amount} @ {order.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
