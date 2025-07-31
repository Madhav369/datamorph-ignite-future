import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 40 : 50,
      period: isYearly ? "/year" : "/month",
      popular: false,
      features: [
        "3 Automated Workflows",
        "Basic AI Assistant Access", 
        "Email + Slack Integration",
        "Monthly Performance Reports",
        "Email Support"
      ]
    },
    {
      name: "Pro",
      price: isYearly ? 72 : 90,
      period: isYearly ? "/year" : "/month", 
      popular: true,
      features: [
        "10+ Automated Workflows",
        "Advanced AI Assistant Features",
        "Bi-Weekly Strategy Reviews", 
        "CRM + Marketing Tool Integrations",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited Custom Workflows",
        "Dedicated AI Strategist",
        "API & Private Integrations",
        "Real-Time Performance Dashboards", 
        "24/7 Premium Support + SLA"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Flexible Plans for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose a plan that fits your goals and scale as you grow
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-primary/5 border-primary shadow-glow'
                  : 'bg-card border-border hover:shadow-card'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mb-8 ${
                  plan.popular ? 'btn-premium' : 'btn-outline'
                }`}
              >
                Get Started
              </Button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            We donate 2% of your membership to pediatric wellbeing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;