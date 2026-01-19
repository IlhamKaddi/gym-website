"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';

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

          <a href="#" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">Home</a>
          <a href="#" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">About</a>
          <a href="#" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">Blog</a>
          <a href="#" className="hover:text-[#EB1C22] transition-colors text-sm lg:text-base">Activities</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs">
              2
            </span>
          </button> */}
          <button className='flex md:flex max-md:hidden px-4 py-[4px] border-2 border-[#EB1C22] rounded-xl'>contact us </button>
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
            href="#"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-white hover:text-[#EB1C22] transition-colors py-2 px-4 rounded hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Activities
          </a>
          {/* Contact Button */}
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

        </div>
      </div>
    </nav>
  );
};

// Demo wrapper to show the navbar
export default function NavbarDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 py-12 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Responsive Navbar Demo</h1>
        <p className="text-gray-300 max-w-2xl">
          This navbar is fully responsive with a mobile menu that slides down when you click the menu icon on smaller screens. Try resizing your browser window to see it in action!
        </p>
      </div>
    </div>
  );
}