'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            FULL-SERVICE AUTOMATION AGENCY
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
            Take the operational <span className="text-brand-blue">weight</span> off your shoulders
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Arcbase specializes in custom infrastructure, AI integration, and workflow optimization designed to scale with your business without vendor lock-in.
          </p>
          
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
