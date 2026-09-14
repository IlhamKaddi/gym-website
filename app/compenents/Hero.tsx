"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import Link from "next/link";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

interface HeroSectionProps {
  slides?: Slide[];
  className?: string;
  includeNavbar?: boolean;
  autoSlideInterval?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [
    {
      title: "ENTRAÎNEZ-VOUS AVEC DES PROFESSIONNELS",
      subtitle:
        "Entraînez-vous avec des coachs certifiés et atteignez vos objectifs plus rapidement.",
      image: "/hero/hero-header.jpg",
    },
    {
      title: "TRANSFORMEZ VOTRE CORPS",
      subtitle:
        "Des programmes d'entraînement personnalisés, adaptés à votre niveau et à vos objectifs.",
      image: "/hero/exercice-bike.webp",
    },
    {
      title: "DÉVELOPPEZ VOTRE FORCE",
      subtitle:
        "Des équipements modernes et performants pour repousser vos limites.",
      image: "/hero/DSC08963-Belhus_Gym.jpg",
    },
  ],

  className = "",
  includeNavbar = true,
  autoSlideInterval = 6000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  return (
    <div className={`relative min-h-screen text-white overflow-hidden ${className}`}>

      {/* Background Image Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navbar */}
      {includeNavbar && <Navbar className="relative z-20" />}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="text-center max-w-4xl mx-auto">

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentSlide].title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="font-orbitron font-bold text-3xl md:text-6xl mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[currentSlide].subtitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>


{/* Boutons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
  <Link
    href="/about"
    className="bg-[#EB1C22] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg shadow-[#EB1C22]/40"
  >
    Notre histoire
  </Link>

  <Link
    href="/activities"
    className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/40 hover:bg-white/10 transition"
  >
    Nos activités
    <ChevronRight className="w-5 h-5" />
  </Link>
</div>



          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/30 hover:bg-[#EB1C22] transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/30 hover:bg-[#EB1C22] transition"
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