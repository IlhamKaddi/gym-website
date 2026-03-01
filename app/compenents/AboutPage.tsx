"use client";

import React from "react";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth={2.5} />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-10 h-10">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth={2.5} />
  </svg>
);

const TitleWithLine = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block relative">
    <h3 className="text-white font-bold text-xl uppercase tracking-widest">
      {children}
    </h3>
    <span className="block w-12 h-[2px] bg-[#EB1C22] mt-2" />
  </div>
);

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 py-16 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold tracking-widest uppercase">
            Salle de Sport Casablanca Oulfa
          </h1>
          <div className="mx-auto mt-3 w-20 h-[3px] bg-[#EB1C22]" />
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-center text-base md:text-lg lg:text-xl mb-16 tracking-wide">
          Musculation, Fitness, Cross-Training, Biking, Cardio-Training &amp; Burning Park
        </p>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start justify-between">

          {/* Left */}
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 bg-[#EB1C22] rounded-full p-2.5 text-white">
                <LocationIcon />
              </div>
              <div className="text-white">
                <p>Casablanca</p>
                <p>Oulfa</p>
                <p className="font-bold text-lg mt-1">Farah Salam</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#EB1C22] rounded-full p-2.5 text-white">
                <PhoneIcon />
              </div>
              <span className="text-white font-semibold">+212 600 00 00 00</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#EB1C22] rounded-full p-2.5 text-white">
                <MailIcon />
              </div>
              <span className="text-white">farahfitness@gmail.com</span>
            </div>

            <hr className="border-white/30" />

            <div className="flex items-center gap-4">
              <a href="#" className="bg-[#EB1C22] rounded-full p-3 text-white hover:bg-red-700">
                <FacebookIcon />
              </a>
              <a href="#" className="bg-[#EB1C22] rounded-full p-3 text-white hover:bg-red-700">
                <InstagramIcon />
              </a>
              <span className="text-white font-semibold ml-2">Rejoins-nous</span>
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col flex-1">
            <div className="flex items-start gap-6">
              <div className="text-white/80 mt-1">
                <ClockIcon />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <TitleWithLine>Salle</TitleWithLine>
                  <p className="text-gray-300">Ouvert 7J/7</p>
                  <p className="text-gray-300">06:00 - 23:00</p>
                </div>

                <div className="h-px bg-white/25 w-48" />

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TitleWithLine>Accueil</TitleWithLine>
                    <span className="bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      ?
                    </span>
                  </div>
                  <p className="text-gray-300">Ouvert 7J/7</p>
                  <p className="text-gray-300">06:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-[#EB1C22] rounded-md p-7 w-[300px] flex-shrink-0 flex flex-col items-center text-center shadow-2xl">
            <span className="text-black font-black text-2xl uppercase mb-1" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
              Farah Fitness
            </span>
            <p className="text-black text-[10px] tracking-[0.25em] uppercase mb-5 font-medium">
              Se Dépasser · Se Surpasser
            </p>

            <p className="text-black text-sm font-bold uppercase">À partir de</p>

            <div className="flex items-end justify-center leading-none mb-2">
              <span className="text-black font-black" style={{ fontSize: 96, letterSpacing: "-3px", fontFamily: "Impact, Arial Black, sans-serif" }}>
                300
              </span>
              <span className="text-black font-black text-3xl ml-1">DHS</span>
            </div>

            <div className="bg-black rounded px-4 py-2">
              <span className="text-white text-sm font-semibold">/ mois</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}