import React from "react";

export default function ScrollArrow({ show }) {
  if (!show) return null;

  const bounceStyle = {
    animation: "arrow-bounce 1.2s infinite",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        style={{
          cursor: "pointer",
          ...bounceStyle,
        }}
      >
        <path
          d="M24 8v28M24 36l-10-10M24 36l10-10"
          stroke="#ffffffcc"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <style>
        {`
          @keyframes arrow-bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(16px);}
          }
        `}
      </style>
    </div>
  );
}
