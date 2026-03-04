// components/ActivitiesHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ActivitiesHeroProps = {
  imageUrl?: string;
  title?: string;
};

export default function ActivitiesHero({
  imageUrl = "/img2.jpg", 
  title = "ACTIVITÉS",
}: ActivitiesHeroProps) {
  return (
    <section className="relative w-full h-[45vh] md:h-[75vh] overflow-hidden">

      
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Salle de sport Farah Fitness"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

      {/* Animated Title */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold italic uppercase tracking-wider text-white"
        >
          <span className="text-[#EB1C22]">A</span>
          {title.slice(1)}
        </motion.h1>
      </div>
    </section>
  );
}