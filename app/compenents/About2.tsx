"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About2() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section-fitness-features"
      className="relative bg-black text-white pt-2 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Images */}
          <div className="flex flex-wrap justify-start gap-6 lg:w-1/2">
            {[ 
              {
                src: "/img1.jpg",
                rotate: "rotate-45",
                delay: "delay-0",
              },
              {
                src: "/img2.jpg",
                rotate: "-rotate-45",
                delay: "delay-100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  relative w-[180px] h-[180px]
                  transition-all duration-700 ease-out
                  ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  ${item.delay}
                `}
              >
                {/* Image */}
                <div className="absolute inset-1/2 w-[160px] h-[160px] rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 z-10">
                  <Image
                    src={item.src}
                    alt="Fitness"
                    fill
                    className="object-cover scale-110 hover:scale-100 transition-transform duration-300"
                  />
                </div>

                {/* SVG Circle */}
                <svg
                  viewBox="0 0 220 220"
                  className={`absolute inset-0 w-full h-full ${item.rotate}`}
                >
                  <circle
                    cx="110"
                    cy="110"
                    r="105"
                    className="
                      fill-transparent
                      stroke-[#EB1C22]
                      stroke-[8]
                      stroke-dasharray-[597]
                      stroke-dashoffset-[120]
                      transition-all duration-300
                      hover:stroke-dashoffset-0
                    "
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Text Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`
                  transition-all duration-700 ease-out
                  ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  ${i === 0 ? "delay-200" : "delay-300"}
                  text-center sm:text-left
                `}
              >
                <h4 className="text-lg font-semibold mb-3">
                  <span className="text-[#EB1C22]">Lorem ipsum</span> dolor sit amet
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
                  Pharetra enim sed.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
