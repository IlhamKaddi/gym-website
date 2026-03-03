// components/AboutGymBlack.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AboutGymBlackProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function Gym({
  title = "À propos de notre salle",
  description = "Farah Fitness Oulfa est une salle de sport moderne à Casablanca, conçue pour offrir une expérience premium. Profitez d’équipements de dernière génération, de coachs professionnels et d’une ambiance motivante pour atteindre vos objectifs.",
  imageUrl = "/img1.jpg",
}: AboutGymBlackProps) {
  return (
    <section className="bg-zinc-950 py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={imageUrl}
            alt="Salle de sport Farah Fitness Oulfa"
            fill
            className="object-cover"
            priority
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Text - Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <p className="text-2xl font-bold text-red-500">100%</p>
              <p className="text-sm text-gray-400">Équipements modernes</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <p className="text-2xl font-bold text-red-500">7j/7</p>
              <p className="text-sm text-gray-400">Ouvert toute la semaine</p>
            </div>
          </div>

          <button className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition">
            Visiter la salle
          </button>
        </motion.div>
      </div>
    </section>
  );
}