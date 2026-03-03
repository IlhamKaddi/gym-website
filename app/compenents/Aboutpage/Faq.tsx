"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nous sommes ouverts du lundi au vendredi de 6h à 23h, le samedi de 7h à 22h, et le dimanche de 8h à 20h.",
  },
  {
    question: "Comment fonctionne l'abonnement ?",
    answer: "Nous proposons des abonnements mensuels, trimestriels et annuels. Aucun engagement pour la formule mensuelle. Vous pouvez vous inscrire directement à l'accueil ou en ligne.",
  },
  {
    question: "Y a-t-il des cours collectifs inclus ?",
    answer: "Oui ! Plus de 30 cours par semaine sont inclus dans tous les abonnements : Yoga, HIIT, Spinning, Pilates, et bien d'autres.",
  },
  {
    question: "Proposez-vous un coaching personnalisé ?",
    answer: "Absolument. Nos coachs certifiés sont disponibles pour des séances individuelles. La première séance d'évaluation est offerte pour tous les nouveaux membres.",
  },
  {
    question: "Puis-je essayer la salle avant de m'abonner ?",
    answer: "Oui, nous offrons un accès d'essai gratuit d'une journée. Venez avec une tenue de sport et nous vous ferons visiter les installations.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-8 md:py-20">
      <div className="w-full max-w-4xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">
            Questions <span className="text-[#EB1C22]">fréquentes</span>
          </h2>
          <p className="mt-3 text-zinc-500 text-sm">Tout ce que vous devez savoir.</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`cursor-pointer rounded-xl border transition-colors duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#EB1C22]/40 bg-zinc-900"
                      : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                  }`}
                >
                  {/* Question */}
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <span className="text-sm font-semibold text-white">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 text-lg font-light leading-none transition-colors ${
                        isOpen ? "text-[#EB1C22]" : "text-zinc-500"
                      }`}
                    >
                      +
                    </motion.span>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}