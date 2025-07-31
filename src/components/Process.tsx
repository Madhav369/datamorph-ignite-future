import React from 'react';
import { Search, Settings, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & Analyze",
      description: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
      icon: Search,
    },
    {
      number: "02", 
      title: "Design & Build",
      description: "Custom AI solutions are developed and integrated seamlessly with your existing tools and processes for maximum efficiency.",
      icon: Settings,
    },
    {
      number: "03",
      title: "Deploy & Scale", 
      description: "Your automation goes live with full support and monitoring. We optimize performance and scale as your business grows.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Simple & Smart Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group hover-lift animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform animate-pulse-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line with animation */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/50 animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;