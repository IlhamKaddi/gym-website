'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Zap,
  Activity,
  HeartPulse,
  Users,
  Flame,
  LucideIcon,
} from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Prise de muscle',
    description:
      'Des programmes de renforcement adaptés à votre morphologie pour gagner en volume musculaire, en toute sécurité.',
    image: '/img1.jpg',
    icon: Dumbbell,
  },
  {
    id: 2,
    title: 'Renforcement',
    description:
      'Des séances progressives, encadrées par nos coachs, pour développer une force pure et durable.',
    image: '/img2.jpg',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Sculpter le corps',
    description:
      'Un travail ciblé sur chaque groupe musculaire pour affiner votre silhouette avec précision.',
    image: '/IMG--.jfif',
    icon: Activity,
  },
  {
    id: 4,
    title: 'Cardio & endurance',
    description:
      'Des séances cardio intenses pour améliorer votre souffle, votre rythme cardiaque et votre endurance.',
    image: '/img4.jpg',
    icon: HeartPulse,
  },
  {
    id: 5,
    title: 'Coaching personnalisé',
    description:
      'Un coach dédié vous suit pas à pas, du premier jour jusqu\u2019à l\u2019atteinte de vos objectifs.',
    image: '/img5.avif',
    icon: Users,
  },
  {
    id: 6,
    title: 'Perte de poids',
    description:
      'Un programme combinant sport et nutrition pour perdre du poids durablement, sans effet yo-yo.',
    image: '/IMG6.webp',
    icon: Flame,
  },
];

export default function ChooseUs() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  // Detect screen size and keep currentIndex in a valid range whenever it changes
  useEffect(() => {
    const updateVisibleCount = () => {
      const next = window.innerWidth < 768 ? 1 : 3;
      setVisibleCount(next);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, cards.length - next)));
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const prevSlide = () => canGoPrev && setCurrentIndex((i) => i - 1);
  const nextSlide = () => canGoNext && setCurrentIndex((i) => i + 1);

  const slideWidth = 100 / visibleCount;

  return (
    <section className="bg-zinc-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-2xl md:text-4xl font-bold mb-12">
          Pourquoi nous choisir
        </h2>

        <div className="relative">
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={prevSlide}
            disabled={!canGoPrev}
            aria-label="Voir les avantages précédents"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 z-10
              rounded-full p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
              ${
                canGoPrev
                  ? 'bg-white/10 border border-white hover:bg-[#EB1C22]'
                  : 'bg-white/5 border border-white/50 opacity-40 cursor-not-allowed'
              }`}
          >
            <ChevronLeft className={`w-6 h-6 ${canGoPrev ? 'text-white' : 'text-neutral-500'}`} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={!canGoNext}
            aria-label="Voir les avantages suivants"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 z-10
              rounded-full p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
              ${
                canGoNext
                  ? 'bg-white/10 border border-white hover:bg-[#EB1C22]'
                  : 'bg-white/5 border border-white/50 opacity-40 cursor-not-allowed'
              }`}
          >
            <ChevronRight className={`w-6 h-6 ${canGoNext ? 'text-white' : 'text-neutral-500'}`} />
          </button>

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {cards.map((card, index) => {
                const isActive = index === currentIndex;
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className="shrink-0 px-4"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <div
                      className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                        isActive ? 'bg-[#EB1C22] shadow-xl shadow-[#EB1C22]/20' : 'bg-neutral-900'
                      }`}
                    >
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>

                      <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-black' : 'text-white'}`}>
                        {card.title}
                      </h3>

                      <p className={`text-sm mb-6 leading-relaxed ${isActive ? 'text-black/80' : 'text-neutral-400'}`}>
                        {card.description}
                      </p>

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive ? 'bg-black' : 'bg-[#EB1C22]'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#EB1C22]' : 'text-black'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DOTS (mobile-friendly position indicator) */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Aller à la diapositive ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-[#EB1C22]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}