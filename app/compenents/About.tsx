"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="section-about-gym"
      className="bg-black text-white py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2
          className={`font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          About Our Gym
        </h2>

        {/* Video */}
        <div
          className={`rounded-2xl overflow-hidden mb-10
          transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
            className="w-full h-auto object-cover rounded-2xl"
          >
            <source
              src="https://videos.pexels.com/video-files/4761426/4761426-hd_1366_720_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Text */}
          <div
            className={`md:w-2/3 transition-all duration-700 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <p className="leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
              Pharetra enim sed neque dolor viverra in elementum ultrices cursus.
              Egestas sagittis neque elit pharetra odio semper consectetur.
              Praesent ac tortor id sed sit tortor eu potenti gravida.
            </p>
          </div>

          {/* Badge */}
          <div
            className={`md:w-1/3 flex md:justify-end justify-center
            transition-all duration-700 delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <button className="px-10 py-4 rounded-xl uppercase tracking-wide bg-[#EB1C22] hover:scale-105 transition-transform duration-300">
              10 Years
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
