// components/ActivitiesContent.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Activity = {
  title: string;
  highlight: string;
  description: string;
  image: string;
};

const activities: Activity[] = [
  {
    title: "Espace Musculation",
    highlight: "Conçu pour développer la force",
    description:
      "Un espace équipé de machines professionnelles et de poids libres pour un entraînement complet et performant.",
    image: "/activities/imgAC1.png",
  },
  {
    title: "Espace Cardio-training",
    highlight: "Idéal pour le renforcement cardio",
    description:
      "Tapis de course, vélos et elliptiques dernière génération pour améliorer votre endurance.",
    image: "/activities/cardio.png",
  },
  {
    title: "Espace Cours Collectifs",
    highlight: "Plus de 100 cours disponibles",
    description:
      "Des sessions variées et motivantes adaptées à tous les niveaux.",
    image: "/activities/collectif cours.png",
  },
  {
    title: "Espace Cross-Training",
    highlight: "Repoussez vos limites",
    description:
      "Zone dédiée aux entraînements fonctionnels intensifs pour un maximum de performance.",
    image: "/activities/Cross-training.png",
  },
  {
    title: "Espace Biking",
    highlight: "Haute intensité assurée",
    description:
      "Des séances dynamiques pour brûler un maximum de calories.",
    image: "/activities/biking.png",
  },
];

export default function ActivitiesContent() {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="max-w-6xl mx-auto space-y-10 px-6">
        {activities.map((activity, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={isReversed ? "md:order-2" : ""}
              >
                <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-3">
                  {activity.title}
                </h3>

                <h2 className="text-3xl md:text-4xl font-bold text-[#EB1C22] mb-6">
                  {activity.highlight}
                </h2>

                <p className="text-zinc-300 leading-relaxed text-lg max-w-lg">
                  {activity.description}
                </p>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={isReversed ? "md:order-1" : ""}
              >
                <div className="relative w-full h-[350px] md:h-[500px]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}