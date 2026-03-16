// components/ActivitiesHero.tsx
"use client";

import { motion } from "framer-motion";
import { Navbar } from "../Navbar";

type ActivitiesHeroProps = {
  videoUrl?: string;
  title?: string;
};

export default function ActivitiesHero({
  videoUrl = "/activities-musculaton.mp4",
  title = "ACTIVITÉS",
}: ActivitiesHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-0 left-0 w-full z-20">
        <Navbar className="bg-transparent" />
      </div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-5xl md:text-7xl lg:text-8xl font-extrabold italic uppercase tracking-wider text-white"
      >
        <span className="text-[#EB1C22]">{title.charAt(0)}</span>
        {title.slice(1)}
      </motion.h1>
    </section>
  );
}