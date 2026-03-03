// components/ClubInfoSectionBlack.tsx
"use client";

import {
  Snowflake,
  Wifi,
  SmartphoneCharging,
  ShowerHead,
  SprayCan,
  Dumbbell,
  HeartPulse,
  Bike,
  PersonStanding,
  ClipboardList,
  Waves,
  Scale,
  Droplet,
  Footprints,
  Award,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

export default function InfosClub() {
  return (
    <section className="bg-zinc-950 py-4 md:py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* INFORMATIONS PRATIQUES */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-6 text-white">
            Informations pratiques
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <InfoItem icon={<Snowflake />} label="Climatisation" />
            <InfoItem icon={<SmartphoneCharging />} label="Casier de recharge téléphonique" />
            <InfoItem icon={<ShowerHead />} label="Douche individuelle" />
            <InfoItem icon={<SprayCan />} label="Produit désinfectant" />
            <InfoItem icon={<Wifi />} label="Wifi gratuit" />
            <InfoItem icon={<ClipboardList />} label="Distributeur automatique" />
          </div>
        </div>

        {/* SERVICES DU CLUB */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-6 text-white">
            Services du club
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <ServiceCard icon={<Dumbbell />} label="Musculation" />
            <ServiceCard icon={<HeartPulse />} label="Cardio training" />
            <ServiceCard icon={<Bike />} label="Biking" />
            <ServiceCard icon={<PersonStanding />} label="Espace Abdos Stretching" />
        
          </div>
        </div>

        {/* LES POINTS FORTS */}
        <div>
          <h3 className="text-xl font-bold uppercase mb-6 text-white">
            Les points forts
          </h3>

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto  pb-4 scrollbar-hide">
              <HighlightCard icon={<ClipboardList />} label="Programme d'entraînement personnalisé*" />
              <HighlightCard icon={<Waves />} label="Hydromassage*" />
              <HighlightCard icon={<Scale />} label="Boditrax*" />
            
              <HighlightCard icon={<Footprints />} label="Plateforme Oscillante Sismo*" />
              <HighlightCard icon={<Award />} label="Équipements haut de gamme" />
              <HighlightCard icon={<BadgeCheck />} label="Service de qualité" />
            </div>

            {/* Arrow (visual like screenshot) */}
            <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EB1C22] items-center justify-center shadow-lg">
              <ChevronRight className="text-black" />
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- UI Blocks ---------- */

function InfoItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function ServiceCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition">
      <div className="w-12 h-12 mb-3 flex items-center justify-center text-white">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-200">{label}</p>
    </div>
  );
}

function HighlightCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="min-w-[160px] h-[160px] bg-[#EB1C22] rounded-2xl p-4 flex flex-col items-center justify-center text-center font-semibold text-black shadow-xl">
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm leading-snug">{label}</p>
    </div>
  );
}