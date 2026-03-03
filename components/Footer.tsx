'use client';

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1a69f0] rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="6" height="6" rx="1" fill="white" />
                  <rect x="14" y="2" width="6" height="6" rx="1" fill="white" />
                  <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
                  <path d="M8 9H11C12.1046 9 13 8.10457 13 7V5M13 11V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold">Arcbase</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom automation, AI integration, and workflow optimization for the modern enterprise. Built to last, designed to scale.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@arcbase.co.uk" className="flex items-center gap-3 text-gray-400 hover:text-brand-blue transition-colors text-sm">
                <Mail className="w-5 h-5" />
                info@arcbase.co.uk
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand-blue transition-colors text-sm">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Arcbase Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
