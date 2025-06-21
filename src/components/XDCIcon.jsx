import React from "react";

export default function XDCIcon({ size = 16 }) {
  return (
    <svg
      role="img"
      aria-label="XDC Token Icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        XDC
      </text>
    </svg>
  );
}
