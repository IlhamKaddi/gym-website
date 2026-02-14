'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  image:string;
}

export default function ChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

const cards: Card[] = [
  {
    id: 1,
    title: 'MUSCLES BUILDING',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/img1.jpg',
  },
  {
    id: 2,
    title: 'STRENGTH TRAINING',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/img2.jpg',
  },
  {
    id: 3,
    title: 'BODY SHAPING',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/IMG--.jfif',
  },
  {
    id: 4,
    title: 'CARDIO FITNESS',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/img4.jpg',
  },
  {
    id: 5,
    title: 'PERSONAL TRAINER',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/img5.avif',
  },
  {
    id: 6,
    title: 'FAT LOSS',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    image: '/IMG6.webp',
  },
];


  /* Detect screen size */
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
      setCurrentIndex(0); // reset to avoid overflow
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  /* Arrow states */
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < cards.length - visibleCount;

  const nextSlide = () => {
    if (canGoNext) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (canGoPrev) setCurrentIndex((prev) => prev - 1);
  };

  /* Visible cards */
  const visibleCards = cards.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className=" bg-black flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">

        <h2 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-2xl md:text-4xl font-bold mb-12 ">
          WHY CHOOSE US
        </h2>

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 z-10
              rounded-full p-2 transition-all
              ${
                canGoPrev
                  ? 'bg-white/10 border border-white hover:bg-[#EB1C22]'
                  : 'bg-white/5 border border-white/50 opacity-40 cursor-not-allowed'
              }`}
          >
            <ChevronLeft
              className={`w-6 h-6 ${
                canGoPrev ? 'text-white' : 'text-neutral-500'
              }`}
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 z-10
              rounded-full p-2 transition-all
              ${
                canGoNext
                  ? 'bg-white/10 border border-white hover:bg-[#EB1C22]'
                  : 'bg-white/5 border border-white/50 opacity-40 cursor-not-allowed'
              }`}
          >
            <ChevronRight
              className={`w-6 h-6 ${
                canGoNext ? 'text-white' : 'text-neutral-500'
              }`}
            />
          </button>

          {/* CARDS */}
          <div
            className={`grid gap-12 ${
              visibleCount === 1 ? 'grid-cols-1' : 'grid-cols-3'
            }`}
          >
            {visibleCards.map((card, index) => {
              const isActive = index === 0;

              return (
                <div
                  key={card.id}
                  className={`rounded-2xl py-16 px-8 transition-all duration-300
                    ${
                      isActive
                        ? 'bg-[#EB1C22] scale-105 shadow-xl'
                        : 'bg-neutral-900'
                    }`}
                >
           <Image
               src={card.image}
              alt={card.title}
              width={164}
              height={64}
              className="mb-6"
          />


                  <h3
                    className={`text-xl font-bold mb-4 ${
                      isActive ? 'text-black' : 'text-white'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm mb-6 ${
                      isActive ? 'text-black/80' : 'text-neutral-400'
                    }`}
                  >
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between">
               

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-black' : 'bg-[#EB1C22]'
                      }`}
                    >
                      <Dumbbell
                        className={`w-5 h-5 ${
                          isActive ? 'text-[#EB1C22]' : 'text-black'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
