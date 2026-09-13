"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Pass {
  id: number;
  type: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured?: boolean;
  features: string[];
}

const passes: Pass[] = [
  {
    id: 1,
    type: "CROSSFIT",
    monthlyPrice: 120,
    yearlyPrice: 1296,
    features: [
      "Accès illimité aux séances de CrossFit",
      "Suivi des performances et de la progression",
      "Groupes de 12 personnes maximum",
      "Matériel spécialisé inclus",
    ],
  },
  {
    id: 2,
    type: "OPEN GYM",
    monthlyPrice: 140,
    yearlyPrice: 1512,
    featured: true,
    features: [
      "Accès libre à la salle aux horaires d'ouverture",
      "Cardio, musculation et zone fonctionnelle",
      "Casiers et vestiaires inclus",
      "Sans engagement de durée",
    ],
  },
  {
    id: 3,
    type: "PERSONAL TRAINING",
    monthlyPrice: 150,
    yearlyPrice: 1620,
    features: [
      "Coach dédié à chaque séance",
      "Programme 100% personnalisé",
      "Suivi nutritionnel inclus",
      "Séances individuelles ou en duo",
    ],
  },
];

export default function GymPass() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateLayout = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const maxIndex = Math.max(0, passes.length - itemsPerPage);

  const safeIndex = Math.min(currentIndex, maxIndex);

  const visiblePasses = passes.slice(
    safeIndex,
    safeIndex + itemsPerPage
  );

  const isPrevDisabled = safeIndex === 0;
  const isNextDisabled = safeIndex >= maxIndex;

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      Math.max(prev - itemsPerPage, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, maxIndex)
    );
  };

  const pageCount = Math.ceil(passes.length / itemsPerPage);

  const pageStarts = Array.from(
    { length: pageCount },
    (_, i) => Math.min(i * itemsPerPage, maxIndex)
  );

  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-2xl md:text-5xl font-bold text-center mb-8">
          Nos formules d&apos;abonnement
        </h1>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={
              !isYearly ? "text-white" : "text-gray-500"
            }
          >
            Mensuel
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Basculer entre le tarif mensuel et annuel"
            onClick={() => setIsYearly((prev) => !prev)}
            className="relative w-14 h-7 bg-neutral-900 rounded-full border border-neutral-700"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-[#EB1C22] rounded-full transition-transform ${
                isYearly
                  ? "translate-x-8"
                  : "translate-x-1"
              }`}
            />
          </button>

          <span
            className={
              isYearly ? "text-white" : "text-gray-500"
            }
          >
            Annuel
          </span>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isPrevDisabled}
            aria-label="Formules précédentes"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center border rounded-full ${
              isPrevDisabled
                ? "border-gray-800 text-gray-700 cursor-not-allowed"
                : "border-gray-700 hover:bg-gray-900"
            }`}
          >
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:mx-8">
            {visiblePasses.map((pass) => (
              <div
                key={pass.id}
                className={`relative rounded-2xl p-8 flex flex-col border ${
                  pass.featured
                    ? "border-[#EB1C22]"
                    : "border-gray-600"
                }`}
              >
                {pass.featured && (
                  <span className="absolute -top-3 left-8 bg-[#EB1C22] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Le plus populaire
                  </span>
                )}

                <h2 className="font-playfair text-xl tracking-widest text-white mb-4">
                  {pass.type}
                </h2>

                <div className="mb-8">
                  <span className="font-playfair text-4xl font-bold">
                    {isYearly
                      ? pass.yearlyPrice
                      : pass.monthlyPrice}{" "}
                    DH
                  </span>

                  <span className="text-gray-500 text-sm ml-1">
                    {isYearly ? "/an" : "/mois"}
                  </span>

                  {isYearly && (
                    <p className="text-xs text-green-500 mt-2">
                      10% d&apos;économie avec le forfait annuel
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pass.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-[#EB1C22] mt-1 shrink-0" />

                      <span className="text-sm text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="w-full bg-[#EB1C22] text-black font-bold py-3 rounded-full hover:bg-red-500 transition-colors"
                >
                  Choisir ce pass
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Formules suivantes"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center border rounded-full ${
              isNextDisabled
                ? "border-gray-800 text-gray-700 cursor-not-allowed"
                : "border-gray-700 hover:bg-gray-900"
            }`}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {pageStarts.map((start, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(start)}
              aria-label={`Aller à la page ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                safeIndex === start
                  ? "bg-[#EB1C22]"
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}