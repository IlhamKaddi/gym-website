
"use client";

import React from "react";

const ScrollingBanner = () => {
const items = [
  "ENTRAÎNEZ-VOUS SANS LIMITES",
  "DÉVELOPPEZ VOTRE FORCE",
  "AUCUNE EXCUSE",
  "COACHING PERSONNALISÉ",
  "OUVERT 7J/7",
  "DEVENEZ PLUS FORT CHAQUE JOUR",
];

  return (
    <div className="w-full overflow-hidden bg-[#EB1C22] py-3">
      <div className="flex w-max animate-scroll">
        {[...items, ...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span className="px-6 text-sm font-bold tracking-[0.15em] text-black md:px-8 md:text-base">
              {item}
            </span>
            <span className="text-black">✦</span>
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;