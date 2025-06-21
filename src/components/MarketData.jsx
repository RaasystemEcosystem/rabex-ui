import React from "react";
import { Card, CardContent } from "../ui/card.jsx";
import { Bitcoin, DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import XDCIcon from "../icons/XDCIcon.jsx";

const pairs = [
  { icon: <Bitcoin className="h-5 w-5" aria-label="Bitcoin icon" />, name: "BTC/RAASK", price: "₿ 0.0000432", trend: "up" },
  { icon: <XDCIcon size={20} aria-label="XDC icon" />, name: "XDC/RAASK", price: "Ͼ 0.0021", trend: "up" },
  { icon: <DollarSign className="h-5 w-5" aria-label="Dollar icon" />, name: "RAASK/USD", price: "$ 2.98", trend: "up" },
  { icon: <Bitcoin className="h-5 w-5" aria-label="Bitcoin icon" />, name: "BTC/RAAK", price: "₿ 0.0000650", trend: "down" },
  { icon: <XDCIcon size={20} aria-label="XDC icon" />, name: "XDC/RAAK", price: "Ͼ 0.0035", trend: "up" },
  { icon: <DollarSign className="h-5 w-5" aria-label="Dollar icon" />, name: "RAAK/USD", price: "$ 1.12", trend: "down" },
];

export default function MarketData() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-6 flex items-center gap-2">
        📊 Market Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pairs.map(({ icon, name, price, trend }, idx) => (
          <Card
            key={idx}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow rounded-2xl"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span>{icon}</span>
                <span className="font-semibold">{name}</span>
              </div>

              <div
                className="flex items-center gap-1 text-right"
                aria-label={trend === "up" ? "Trending up" : "Trending down"}
              >
                <span className="font-semibold text-gray-900 dark:text-yellow-400">{price}</span>
                {trend === "up" ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
