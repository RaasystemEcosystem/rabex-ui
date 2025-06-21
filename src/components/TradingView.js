import React, { useEffect, useRef } from 'react';

export default function TradingView({ symbol = 'XDCUSD' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          autosize: true,
          symbol: symbol,
          interval: '60',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: true,
          save_image: false,
          studies: ['MACD@tv-basicstudies'],
        });
      }
    };
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [symbol]);

  return (
    <div
      ref={containerRef}
      id="tradingview-widget"
      className="w-full h-96 bg-gray-900 rounded-lg shadow-lg"
    />
  );
}
