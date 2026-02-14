'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';


interface Pass {
  id: number;
  type: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

const passes: Pass[] = [
  {
    id: 1,
    type: 'CROSSFIT',
    monthlyPrice: 120,
    yearlyPrice: 120 * 12,
    features: [
      'Lorem Ipsum is simply dummy text',
      'Contrary to popular belief, Lorem Ipsum is',
      'Contrary to popular belief, Lorem Ipsum',
      'Lorem Ipsum is simply dummy text',
    ],
  },
  {
    id: 2,
    type: 'OPEN GYM',
    monthlyPrice: 140,
    yearlyPrice: 120 * 12,
    features: [
      'Lorem Ipsum is simply dummy text',
      'Contrary to popular belief, Lorem Ipsum is',
      'Contrary to popular belief, Lorem Ipsum',
      'Lorem Ipsum is simply dummy text',
    ],
  },
  {
    id: 3,
    type: 'PERSONAL TRAINING',
    monthlyPrice: 150,
    yearlyPrice: 3000,
    features: [
      'Lorem Ipsum is simply dummy text',
      'Contrary to popular belief, Lorem Ipsum is',
      'Contrary to popular belief, Lorem Ipsum',
      'Lorem Ipsum is simply dummy text',
    ],
  },
];

export default function GymPass() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const maxIndex = passes.length - itemsPerPage;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;


  // ✅ Detect screen size
  useEffect(() => {
    const updateLayout = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // ✅ Visible cards logic
  const visiblePasses = Array.from({ length: itemsPerPage }, (_, i) => {
    return passes[(currentIndex + i) % passes.length];
  });

  // ✅ Navigation logic
  const handlePrevious = () => {
    if (isPrevDisabled) return;
    setCurrentIndex((prev) => prev - itemsPerPage);
  };

  const handleNext = () => {
    if (isNextDisabled) return;
    setCurrentIndex((prev) => prev + itemsPerPage);
  };


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <h1 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-2xl md:text-5xl font-bold text-center mb-8 tracking-wider">
          OUR GYM PASSES
        </h1>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={!isYearly ? 'text-white' : 'text-gray-500'}>
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-neutral-900 rounded-full"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-[#EB1C22] rounded-full transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
            />
          </button>

          <span className={isYearly ? 'text-white' : 'text-gray-500'}>
            Yearly
          </span>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={handlePrevious}
            disabled={isPrevDisabled}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center border rounded-full
    ${isPrevDisabled
                ? 'border-gray-800 text-gray-700 cursor-not-allowed'
                : 'border-gray-700 hover:bg-gray-900'
              }`}
          >
            <ChevronLeft />
          </button>


          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:mx-8 ">
            {visiblePasses.map((pass) => (
              <div
                key={pass.id}
                className="border border-gray-600 rounded-2xl p-8 flex flex-col"
              >
                <h2 className="font-playfair text-xl tracking-widest text-white mb-4">
                  {pass.type}
                </h2>

                <div className="mb-8">
                  <span className="font-playfair text-4xl font-bold">
                    {isYearly ? pass.yearlyPrice : pass.monthlyPrice}
                    DH</span>
                  <span className="text-gray-500 text-sm ml-1">
                    {isYearly ? '/Year' : '/MO'}
                  </span>
                  {isYearly && (
                    <p className="text-xs text-green-500 mt-2">
                      Save 10%  with yearly plan
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pass.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-gray-500 mt-1" />
                      <span className="text-sm text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#EB1C22] text-black font-bold py-3 rounded-full">
                  PURCHASE NOW
                </button>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center border rounded-full
    ${isNextDisabled
                ? 'border-gray-800 text-gray-700 cursor-not-allowed'
                : 'border-gray-700 hover:bg-gray-900'
              }`}
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(passes.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-2 h-2 rounded-full ${currentIndex === index * itemsPerPage
                  ? 'bg-[#EB1C22]'
                  : 'bg-gray-700'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
