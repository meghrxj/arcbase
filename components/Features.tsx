'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />,
    title: "Custom-Built Systems",
    description: "Infrastructure designed from the ground up specifically for your unique business workflows."
  },
  {
    icon: <Shield className="w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />,
    title: "Open Technology",
    description: "Complete ownership of your tech stack. We use standard protocols to ensure no vendor lock-in, ever."
  },
  {
    icon: <Zap className="w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />,
    title: "AI + Strategy",
    description: "Combining cutting-edge artificial intelligence with high-level business goals to drive measurable ROI."
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not just another SaaS.</h2>
          <p className="text-gray-400 max-w-2xl">
            We build high-performance, proprietary systems that belong to you. No subscription traps, just pure operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 hover:border-brand-blue/30 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
