"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export  const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-black text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/FARAH_LOGO.png"
              alt="farah logo"
              width={120}
              height={120}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience unforgettable moments and create lasting memories with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/maps" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+212 XXX-XXXXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@farah.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-[#EB1C22] flex-shrink-0" />
                <span className="text-gray-400 text-sm">Casablanca, Morocco</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
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
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB1C22] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
       
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Farah. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EB1C22] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

