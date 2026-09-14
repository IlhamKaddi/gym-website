
"use client";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-zinc-950 text-white ${className}`}>
      {/* Contenu principal du footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Logo et description */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/FARAH_LOGO.png"
              alt="Logo Farah"
              width={120}
              height={120}
              className="mx-auto md:mx-0"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              Vivez des moments inoubliables et créez de précieux souvenirs
              avec nous.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Liens rapides
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="/maps"
                  className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm"
                >
                  Localisation
                </Link>
              </li>

              <li>
                <Link
                  href="/activities"
                  className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm"
                >
                  Activités
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contactez-nous
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +212 XXX-XXXXXX
                </span>
              </li>

              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@farah.com
                </span>
              </li>

              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Casablanca, Maroc
                </span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Suivez-nous
            </h3>

            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB1C22] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB1C22] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

           
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Farah. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm text-center"
              >
                Politique de confidentialité
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm text-center"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}