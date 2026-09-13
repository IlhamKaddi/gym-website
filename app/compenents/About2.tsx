'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const RING_RADIUS = 105;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS; // ≈ 659.7

const photos = [
  { src: '/img1.jpg', alt: 'Coach accompagnant un adhérent pendant une séance', rotate: 'rotate-45', delay: 'delay-0' },
  { src: '/img2.jpg', alt: 'Adhérent en pleine séance de renforcement', rotate: '-rotate-45', delay: 'delay-100' },
];

const features = [
  {
    title: 'Coachs certifiés',
    text: 'Nos coachs diplômés construisent avec vous un programme adapté à votre niveau, votre rythme et vos objectifs.',
    delay: 'delay-200',
  },
  {
    title: 'Équipements modernes',
    text: 'Un plateau équipé des dernières machines, avec des zones dédiées à la musculation, au cardio et à la préparation physique.',
    delay: 'delay-300',
  },
];

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
      className="relative bg-zinc-950 text-white pt-2 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Images */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:w-1/2">
            {photos.map((item, index) => (
              <div
                key={item.src}
                className={`
                  group relative w-[180px] h-[180px]
                  transition-all duration-700 ease-out
                  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  ${item.delay}
                `}
              >
                {/* Photo */}
                <div className="absolute inset-1/2 w-[160px] h-[160px] rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 z-10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="160px"
                    className="object-cover scale-110 transition-transform duration-300 group-hover:scale-100"
                  />
                </div>

                {/* Decorative ring, draws fully closed on hover */}
                <svg viewBox="0 0 220 220" className={`absolute inset-0 w-full h-full ${item.rotate}`}>
                  <circle
                    cx="110"
                    cy="110"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#EB1C22"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={140}
                    className="transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0]"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Text Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`
                  transition-all duration-700 ease-out
                  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  ${feature.delay}
                  text-center sm:text-left
                `}
              >
                <h4 className="text-lg font-semibold mb-3 text-[#EB1C22]">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}