"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from './Navbar';

interface Slide {
  title: string;
  subtitle: string;
}

interface HeroSectionProps {
  slides?: Slide[];
  className?: string;
  includeNavbar?: boolean;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [
    {
      title: "WORK WITH PROFESSIONALS",
      subtitle: "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit.",
    },
    {
      title: "TRANSFORM YOUR BODY",
      subtitle: "Join our expert trainers and achieve your fitness goals with personalized programs.",
    },
    {
      title: "BUILD YOUR STRENGTH",
      subtitle: "State-of-the-art equipment and professional guidance for maximum results.",
    },
  ],
  className = '',
  includeNavbar = true,

}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative min-h-screen text-white overflow-hidden ${className}`}>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/man-training-with-weight-lifting.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

      </div>

      {/* Navbar */}
      {includeNavbar && <Navbar className="relative z-20" />}

      {/* Hero Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center px-4 ${includeNavbar ? 'min-h-[calc(100vh-100px)]' : 'min-h-screen'}`}>
        <div className="text-center max-w-4xl mx-auto">

          <h1
            key={currentSlide}
            className="font-orbitron font-bold text-2xl md:text-6xl  mb-6 leading-tight tracking-tight animate-fadeIn"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={`subtitle-${currentSlide}`}
            className="text-gray-300 text-[16px] md:text-xl mb-12 max-w-2xl mx-auto animate-fadeIn"
          >
            {slides[currentSlide].subtitle}
          </p>

          {/*  Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-[#EB1C22] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#EB1C22] transition-all transform hover:scale-105 shadow-lg shadow-[#EB1C22]">
              Our History
            </button>
            <button className="flex items-center gap-2 text-white px-4 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors border border-white/30 backdrop-blur-sm">
              Our Activities
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border  hover:bg-[#EB1C22]  transition-all "
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full border  hover:bg-[#EB1C22]  transition-all "
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>




    </div>
  );
};

export default HeroSection;