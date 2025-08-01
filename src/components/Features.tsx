import React from 'react';
import { Zap, Brain, Bot, TrendingUp, BarChart3, Link } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate complex business processes to boost speed, clarity, and efficiency.",
      details: "Transform your operations with intelligent automation that learns and adapts to your business needs."
    },
    {
      icon: Brain,
      title: "Custom AI Solutions", 
      description: "Build tailored AI systems that align with your business goals and challenges.",
      details: "Get bespoke AI solutions designed specifically for your industry and use cases."
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Deploy intelligent virtual agents to streamline tasks.",
      details: "24/7 AI assistants that handle customer inquiries, data processing, and routine operations."
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Leverage AI to optimize campaigns, track leads, and personalize outreach.",
      details: "Boost conversions with AI-driven lead scoring, automated follow-ups, and predictive analytics."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking", 
      description: "Track automation results in real time to improve and scale your workflows.",
      details: "Comprehensive dashboards with AI insights to optimize your automation strategies."
    },
    {
      icon: Link,
      title: "Seamless Integrations",
      description: "Connect your tools and apps for smooth, unified AI-powered workflows.",
      details: "Integrate with 500+ tools including CRM, ERP, marketing platforms, and custom APIs."
    },
    {
      icon: Brain,
      title: "Business Consultation",
      description: "Strategic AI consulting to identify opportunities and roadmap implementation.",
      details: "Expert guidance on AI transformation strategy, feasibility studies, and ROI optimization."
    },
    {
      icon: TrendingUp,
      title: "Social Media Management & Branding",
      description: "AI-powered content creation, scheduling, and brand management across platforms.",
      details: "Automated content generation, optimal posting times, engagement tracking, and brand consistency."
    }
  ];

  const handleFeatureClick = (feature: any) => {
    alert(`${feature.title}: ${feature.details}`);
  };

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
                onClick={() => handleFeatureClick(feature)}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group hover-lift animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
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