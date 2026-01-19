"use client";
import React from 'react';

const ScrollingBanner = () => {
  const text = "PERMANENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFESSIONAL C";
  
  return (
    <div className="w-full overflow-hidden bg-[#EB1C22] py-2">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 text-sm font-bold tracking-wide text-black md:text-base">
          {text}
        </span>
        <span className="inline-block px-4 text-sm font-bold tracking-wide text-black md:text-base">
          {text}
        </span>
        <span className="inline-block px-4 text-sm font-bold tracking-wide text-black md:text-base">
          {text}
        </span>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;