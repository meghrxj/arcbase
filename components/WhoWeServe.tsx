'use client';

import React from 'react';
import { motion } from 'motion/react';

const categories = [
  {
    title: "SMEs",
    description: "Empowering small and medium enterprises with enterprise-grade automation tools.",
    details: "We help SMEs compete with giants by automating their back-office, customer service, and data management."
  },
  {
    title: "Hospitality",
    description: "Automating bookings, inventory, and customer loyalty for restaurants and cafes.",
    details: "Streamline your front-of-house and kitchen operations with integrated booking and inventory systems."
  },
  {
    title: "Service Companies",
    description: "Streamlining client intake and delivery through intelligent workflows.",
    details: "From lead capture to project delivery, we automate the manual steps in your service lifecycle."
  },
  {
    title: "Startups",
    description: "Building foundations that scale from seed to IPO without technical debt.",
    details: "We build scalable infrastructure that allows your team to focus on product, not plumbing."
  },
  {
    title: "Family Business",
    description: "Modernizing traditional workflows while preserving core business values.",
    details: "Preserve your legacy while adopting modern efficiency through thoughtful digital transformation."
  },
  {
    title: "E-commerce",
    description: "Scaling operations through automated inventory and customer care.",
    details: "Automate your fulfillment, inventory sync, and customer support to handle peak demand effortlessly."
  }
];

export const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-24 px-6 bg-brand-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-gray-400 max-w-2xl">
            Tailored technology for organizations ready to scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="glass-card p-8 flex flex-col cursor-default group hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-300 group-hover:text-brand-blue mb-4 transition-colors duration-300">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                {cat.description}
              </p>
              
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="pt-4 border-t border-white/10 text-xs text-gray-500 leading-relaxed italic">
                  {cat.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
