"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const leftFeatures = [
"Salle de sport moderne dédiée à votre performance",
"Un espace unique à Oulfa, conçu pour votre progression",
  "Espaces Cardio-Training, Musculation libre et guidée",
  "Une communauté de passionnés !",
];

const rightFeatures = [
  "Cage de Cross-Training et accessoires complets",
  "Matériel haut de gamme et connecté",
  "Cours collectifs vidéo exclusifs",
  "Wifi gratuit",
];

function CheckIcon() {
  return (
    <svg
      className="shrink-0 w-5 h-5 text-[#EB1C22] mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeatureItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3"
    >
      <CheckIcon />
      <span className="text-white text-sm font-semibold leading-snug">{text}</span>
    </motion.li>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img1.jpg" // Replace with your actual image path
          alt="Gym background"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        {/* Left dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Pourquoi s entraîner
            <br />
            <span className="text-[#EB1C22]">chez nous ?</span>
          </h2>
          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 h-[3px] w-16 bg-[#EB1C22] origin-left"
          />
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 max-w-3xl">
          {/* Left column */}
          <ul className="space-y-4">
            {leftFeatures.map((text, i) => (
              <FeatureItem key={i} text={text} delay={0.1 + i * 0.1} />
            ))}
          </ul>

          {/* Right column */}
          <ul className="space-y-4">
            {rightFeatures.map((text, i) => (
              <FeatureItem key={i} text={text} delay={0.3 + i * 0.1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}