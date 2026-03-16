"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`relative ${className}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">
        {/* Logo */}
        <div className="tracking-wider flex-shrink-0">
          <Image
            src="/FARAH_LOGO.png"
            alt="farah logo"
            width={150}
            height={150}
          />
        </div>

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex items-center space-x-6 lg:space-x-8"> */}
        <div className="flex md:flex items-center space-x-8 max-md:hidden font-medium">

          <a href="/ " className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">Home</a>
          <a href="/about" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">About</a>
      <Link href="/maps" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">
          Location
       </Link>
          <a href="/activities" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">Activities</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/contact">
          <button className="group flex md:flex max-md:hidden items-center gap-2 px-5 py-2
              border-2  text-sm font-semibold tracking-wide uppercase
            bg-[#EB1C22] text-white
             shadow-[0_4px_20px_rgba(235,28,34,0.40)]
             transition-all duration-300 border-[#EB1C22] rounded-xl
             hover:text-[#EB1C22] hover:bg-transparent">contact us </button>
               </Link>
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-4 space-y-3 bg-black/20 backdrop-blur-sm">
          <a
            href=" /"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
        <Link href="/maps" className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10">
          Location
       </Link>
          <a
            href="/activities"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Activities
          </a>
          {/* Contact Button */}
          <Link href="/contact">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="
                w-full 
                mt-3 
                py-3 
                text-center 
                font-semibold 
                border-2 
               border-[#EB1C22] 
               rounded-xl 
            text-white 
             hover:bg-[#EB1C22] 
           hover:text-black 
           transition-all
        "
          >
            Contact us
          </button>
          </Link>
       

        </div>
      </div>
    </nav>
  );
};

