import { useState } from 'react';
import { Bot, Brain, GraduationCap, Target, TrendingUp, Video, Palette, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  
  const solutions = [
    {
      id: "ai-business",
      title: "AI-Powered Business",
      icon: <Bot className="w-8 h-8" />,
      description: "Intelligent automation and custom AI solutions for your business operations.",
      services: [
        "Custom AI Agents",
        "Workflow Automation", 
        "Data Dashboards & CRM",
        "Business Strategy & Consultation"
      ],
      details: {
        "Custom AI Agents": "Bespoke AI solutions tailored to your business with domain-specific training, custom integrations, and scalable architecture.",
        "Workflow Automation": "Intelligent systems that streamline operations with process mining, decision trees, and real-time optimization.",
        "Data Dashboards & CRM": "AI-powered analytics and CRM workflows with real-time insights, predictive analytics, and automated reporting.",
        "Business Strategy & Consultation": "Strategic guidance with AI-driven insights, business forecasting, and market intelligence."
      }
    },
    {
      id: "growth-marketing-digital",
      title: "Growth Marketing & Digital Identity",
      icon: <Target className="w-8 h-8" />,
      description: "Comprehensive marketing automation and digital brand building solutions.",
      services: [
        "Performance Media Buying",
        "Funnel Building",
        "AI Video & Content Creation",
        "Social Media Management",
        "Personal Branding"
      ],
      details: {
        "Performance Media Buying": "AI-optimized campaigns for maximum ROI with cross-platform optimization, real-time analytics, and audience targeting.",
        "Funnel Building": "Conversion-optimized funnels with analytics, A/B testing, attribution modeling, and user journey analysis.",
        "AI Video & Content Creation": "AI-powered content that resonates everywhere with brand voice training, multi-platform publishing, and SEO optimization.",
        "Social Media Management": "AI-driven social strategy with content scheduling, audience analytics, and engagement optimization.",
        "Personal Branding": "Build and amplify your personal brand with strategic content creation, reputation management, and network building."
      }
    },
    {
      id: "ai-academy",
      title: "AI Academy",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Comprehensive AI training and implementation programs for teams.",
      services: [
        "AI Training & Certification",
        "AI Implementation Workshops"
      ],
      details: {
        "AI Training & Certification": "Transform your team into AI experts with comprehensive training programs, industry-recognized certifications, and hands-on projects.",
        "AI Implementation Workshops": "Fast-track your AI adoption with intensive workshops, practical implementation strategies, and ongoing support."
      }
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary group-hover:animate-pulse">
                    {solution.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Services List */}
              <div className="space-y-2 mb-6">
                {solution.services.map((service, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    View More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {solution.icon}
                      </div>
                      {solution.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-semibold text-lg mb-2 text-primary">{service}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.details[service]}
                        </p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;