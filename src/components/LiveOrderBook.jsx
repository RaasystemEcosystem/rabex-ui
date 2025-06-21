import React, { useEffect, useState } from "react";
import Web3 from "web3";

const contractAddress = "0x21529C3F45Dc204650e271D82C0E176b813D7Cee"; // XDC-compatible
const abi = [ /* Your ABI here */ ];

const LiveOrderBook = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [orderType, setOrderType] = useState("All");
  const [sortPrice, setSortPrice] = useState("Highest First");
  const [amountFilter, setAmountFilter] = useState("All");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const contract = new web3.eth.Contract(abi, contractAddress);

          const result = await contract.methods.getOrderBook().call();

          // Optional: parse or map if needed
          setOrders(result);
        } else {
          console.error("MetaMask not detected");
        }
      } catch (err) {
        console.error("Error fetching order book:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) => {
      if (orderType !== "All" && order.orderType !== orderType) return false;
      if (amountFilter === ">10" && order.amount <= 10) return false;
      if (amountFilter === ">50" && order.amount <= 50) return false;
      if (amountFilter === ">100" && order.amount <= 100) return false;
      return true;
    })
    .sort((a, b) => {
      return sortPrice === "Highest First" ? b.price - a.price : a.price - b.price;
    });

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-900 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Live Order Book
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <select value={orderType} onChange={(e) => setOrderType(e.target.value)} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <option>All</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <option>Highest First</option>
          <option>Lowest First</option>
        </select>
        <select value={amountFilter} onChange={(e) => setAmountFilter(e.target.value)} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <option>All</option>
          <option>>10</option>
          <option>>50</option>
          <option>>100</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-800 dark:text-gray-200">
            <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-4 py-2">Type</th>
                <th scope="col" className="px-4 py-2">Price</th>
                <th scope="col" className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr><td colSpan="3" className="text-center py-4 text-gray-500">No orders found.</td></tr>
              ) : (
                filteredOrders.map((order, index) => (
                  <tr key={index} className={`border-b dark:border-gray-600 ${order.orderType === "Buy" ? "text-green-600" : "text-red-500"}`}>
                    <td className="px-4 py-2">{order.orderType}</td>
                    <td className="px-4 py-2">{Number(order.price).toFixed(2)}</td>
                    <td className="px-4 py-2">{order.amount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LiveOrderBook;
