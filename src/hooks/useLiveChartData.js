// File: hooks/useLiveChartData.js
import { useState, useEffect } from "react";

export const useLiveChartData = (initialData = [10, 12, 9, 14, 13], intervalMs = 5000) => {
  const [data, setData] = useState(initialData);
  const [labels, setLabels] = useState(["Mon", "Tue", "Wed", "Thu", "Fri"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const nextValue = +(prev[prev.length - 1] + (Math.random() * 2 - 1)).toFixed(2);
        return [...prev.slice(1), nextValue];
      });

      setLabels(prev => {
        const nextDay = `D${prev.length + 1}`;
        return [...prev.slice(1), nextDay];
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return { data, labels };
};
