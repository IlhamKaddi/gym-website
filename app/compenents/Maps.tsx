"use client";
import React, { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Clock, Navigation } from "lucide-react";

function Maps() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <section className="relative min-h-screen  overflow-hidden py-12 ">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EB1C22] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EB1C22] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        {/* MAP SECTION */}
        <div className="w-full md:w-[60%]  relative group">
          {/* Map Container with Glassmorphism Overlay */}
          <div className="absolute inset-0">
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.2511706145474!2d-7.6958862!3d33.546849900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d0016bb25fb%3A0xa52bb76623e1654c!2sFARAH%20FITNESS!5e0!3m2!1sfr!2sma"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-8 right-8">
            <a
              href="https://maps.app.goo.gl/z2vuhbmzoYXShZRc8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#EB1C22] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#EB1C22]/50 hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Navigation size={20} className="animate-pulse" />
           
            </a>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* INFO PANEL */}
        <div className="w-full md:w-[40%]  text-white relative overflow-hidden">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 grid-rows-6 h-full">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className="border border-white/20"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out ${i * 0.05}s backwards`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
            {/* TOP SECTION */}
            <div className="space-y-8">
              {/* Logo/Title with Animation */}
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                  Farah
                 Fitness
                </h2>
                <div className="w-20 h-1 bg-white rounded-full"></div>
              </div>

              {/* Address Section */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 group ">
                  <div className="mt-1 p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Notre Emplacement</p>
                  
                    <p className="text-white/90">Oulfa, Casablanca-Settat 20103</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group ">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Appelez-nous</p>
                    <a href="tel:+212669684523" className="text-white/90 hover:text-white transition">
                      +212 669 684 523
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Horaires</p>
                    <p className="text-white/90">Lun - Sam: 6h00 - 22h00</p>
                    <p className="text-white/90">Dim: 8h00 - 20h00</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <p className="font-semibold text-lg">Suivez-nous</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <Facebook size={22} />
                    </div>
                    {hoveredSocial === 'facebook' && (
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                        Facebook
                      </span>
                    )}
                  </a>
                  <a
                    href="#"
                 
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] to-[#D62976] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <Instagram size={22} className="text-white" />
                    </div>
                    {hoveredSocial === 'instagram' && (
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                        Instagram
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM CTA */}
            <div className="space-y-4 pt-8 border-t border-white/20">
              <a
                href="#"
                className="w-full hover:underline "
              >
                Contactez-nous
              </a>
            
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Maps;