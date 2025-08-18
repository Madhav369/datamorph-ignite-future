import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import QuoteForm from './QuoteForm';

const CaseStudies = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "SaaS Technology",
      challenge: "Manual customer onboarding taking 2+ weeks",
      solution: "AI-powered automated onboarding workflow",
      results: {
        timeReduction: "85%",
        costSavings: "$2M/year",
        satisfaction: "98%"
      },
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      testimonial: "The AI automation transformed our entire customer journey. What used to take weeks now happens in hours.",
      author: "Sarah Johnson, CEO"
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Complex invoice processing and compliance checks",
      solution: "AI document processing with automated compliance",
      results: {
        timeReduction: "92%",
        costSavings: "$1.5M/year",
        accuracy: "99.8%"
      },
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      testimonial: "Our finance team can now focus on strategy instead of manual data entry. Game-changing results.",
      author: "Michael Chen, CFO"
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Inventory management and demand forecasting",
      solution: "Predictive AI for inventory optimization",
      results: {
        timeReduction: "78%",
        costSavings: "$3.2M/year",
        accuracy: "94%"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      testimonial: "AI predictions help us stock exactly what customers want, when they want it. Revolutionary impact.",
      author: "Lisa Rodriguez, COO"
    }
  ];

  return (
    <section id="case-studies" className="py-24 neural-bg">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wide">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from
            <span className="block text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies transformed their operations with our AI automation solutions
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-sm font-medium text-accent mb-4">
                  {study.industry}
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {study.company}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 card-premium text-center">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{study.results.timeReduction}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="p-4 card-premium text-center">
                    <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{study.results.costSavings}</div>
                    <div className="text-xs text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="p-4 card-premium text-center">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{study.results.satisfaction || study.results.accuracy}</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-6 card-premium border-l-4 border-primary">
                  <p className="text-muted-foreground italic mb-3">"{study.testimonial}"</p>
                  <p className="font-semibold text-foreground">— {study.author}</p>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-80 object-cover rounded-2xl shadow-glow group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6">
                    <button className="btn-premium px-6 py-2 flex items-center gap-2 hover-lift">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-8 card-premium cta-wave max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join these industry leaders and transform your business with AI automation
            </p>
            <button 
              className="btn-premium px-8 py-3"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Get Quote
            </button>
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

export default CaseStudies;