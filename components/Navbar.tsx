'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/80 backdrop-blur-md border-bottom border-white/5"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a69f0] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="6" height="6" rx="1" fill="white" />
            <rect x="14" y="2" width="6" height="6" rx="1" fill="white" />
            <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
            <path d="M8 9H11C12.1046 9 13 8.10457 13 7V5M13 11V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">Arcbase</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <Link href="/contact" className="btn-primary text-sm py-2 px-4">
        Contact Us
      </Link>
    </motion.nav>
  );
};
