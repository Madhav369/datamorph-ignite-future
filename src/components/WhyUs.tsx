import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Zap, Brain, CheckCircle } from 'lucide-react';
import QuoteForm from './QuoteForm';

const WhyUs = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const reasons = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption",
      badge: "ISO 27001 Certified"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "5+ years specializing in AI automation across 20+ industries",
      badge: "500+ Projects"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support with dedicated account management",
      badge: "98% Satisfaction"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Go live in 2-4 weeks with our proven implementation framework",
      badge: "Fast ROI"
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Proprietary AI algorithms trained specifically for your business",
      badge: "Unique Solution"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Results",
      description: "Money-back guarantee if you don't see 3x ROI within 6 months",
      badge: "Risk-Free"
    }
  ];

  const trustSignals = [
    { logo: "Featured in", text: "TechCrunch" },
    { logo: "Partner", text: "Microsoft AI" },
    { logo: "Certified", text: "Google Cloud" },
    { logo: "Member", text: "Forbes Council" }
  ];

  return (
    <section id="why-us" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The AI Automation
            <span className="block text-gradient">Authority</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading expertise, proven results, and unmatched support for your AI transformation
          </p>
        </motion.div>

        {/* Trust Signals */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="trust-badge hover-scale">
              <span className="text-xs text-muted-foreground">{signal.logo}</span>
              <span className="font-semibold text-foreground">{signal.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                className="p-8 card-premium hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
                  {reason.badge}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-8 card-premium cta-wave max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 500+ companies that trust us with their AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-premium px-8 py-3"
                onClick={() => setIsQuoteFormOpen(true)}
              >
                Get Quote
              </button>
              <button className="btn-secondary px-8 py-3">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </section>
  );
};

export default WhyUs;