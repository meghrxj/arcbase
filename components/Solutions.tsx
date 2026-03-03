'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Bot, CreditCard, Layout, Globe, BarChart3, Share2, Search, Cloud } from 'lucide-react';

const solutions = [
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Workflow Automation",
    description: "Intelligent agents and bots that handle repetitive cognitive tasks across your stack.",
    details: "Our AI agents are designed to integrate seamlessly with your existing tools. We build custom LLM-powered workflows that can handle customer support, data entry, and complex decision-making processes."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Financial Automation",
    description: "Automate invoicing, reconciliation, and reporting with precision and security.",
    details: "Eliminate manual errors in your financial operations. We automate the entire lifecycle of financial transactions, from invoice generation to bank reconciliation."
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Custom Business Apps",
    description: "Internal tools and dashboards designed to fit your team's exact requirements.",
    details: "Stop fighting with generic software. We build bespoke internal applications that mirror your unique business processes, providing your team with the exact tools they need."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Digital Presence",
    description: "High-end web experiences that convert visitors into long-term clients.",
    details: "Your digital storefront should be as efficient as your operations. We create high-performance web applications that are optimized for conversion, speed, and user experience."
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data BI",
    description: "Turn raw data into actionable insights with custom analytics and visualization.",
    details: "Data is only useful if you can act on it. We build comprehensive business intelligence dashboards that aggregate data from all your sources, providing clear, visual insights."
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: "System Integration",
    description: "Unify disparate software systems into a single, cohesive business engine.",
    details: "Break down data silos. We specialize in connecting legacy systems with modern cloud applications, ensuring data flows smoothly across your entire organization."
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Process Consulting",
    description: "Strategic evaluation of your current operations to identify automation opportunities.",
    details: "Before we build, we analyze. Our consultants work closely with your team to identify the highest-impact areas for automation, ensuring that every implementation delivers maximum value."
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud environments tailored for high-performance automation.",
    details: "We design and deploy robust cloud architectures on AWS, Azure, or GCP. Our solutions are built with automation in mind, featuring auto-scaling and high-availability configurations."
  }
];

export const Solutions = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored technology services that transform how your organization operates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="glass-card p-6 flex flex-col cursor-default group hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-brand-blue mb-4 transition-colors duration-300">
                {solution.icon}
              </div>
              <h3 className="font-bold mb-2 group-hover:text-white transition-colors">{solution.title}</h3>
              <p className="text-gray-400 text-xs mb-4 group-hover:text-gray-300 transition-colors">
                {solution.description}
              </p>
              
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400 leading-relaxed italic">
                  {solution.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
