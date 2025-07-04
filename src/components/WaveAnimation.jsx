import React from "react";

export default function WaveAnimation() {
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-end">
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[220px] animate-wave"
        style={{ minWidth: '100%', minHeight: 220 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path>
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z;
                    M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z;
                    M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          />
        </path>
        <path
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          fill="url(#waveGradient)"
          opacity="0.7"
        />
      </svg>
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-2%); }
        }
        .animate-wave {
          animation: wave 7s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}
