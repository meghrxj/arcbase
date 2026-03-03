'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Get in touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-16"
          >
            Ready to automate your business? We&apos;re here to help you build the future of your operations.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:info@arcbase.co.uk"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 flex flex-col items-center gap-4 hover:border-brand-blue/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="text-brand-blue font-medium">info@arcbase.co.uk</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-10 flex flex-col items-center gap-4 hover:border-brand-blue/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="text-brand-blue font-medium">Follow our updates</p>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
