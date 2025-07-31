import React from 'react';
import { Zap, Brain, Bot, TrendingUp, BarChart3, Link } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate complex business processes to boost speed, clarity, and efficiency."
    },
    {
      icon: Brain,
      title: "Custom AI Solutions", 
      description: "Build tailored AI systems that align with your business goals and challenges."
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Deploy intelligent virtual agents to streamline tasks."
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Leverage AI to optimize campaigns, track leads, and personalize outreach."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking", 
      description: "Track automation results in real time to improve and scale your workflows."
    },
    {
      icon: Link,
      title: "Seamless Integrations",
      description: "Connect your tools and apps for smooth, unified AI-powered workflows."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            All features in one place
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate operations, boost productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;