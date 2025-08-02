import { Bot, Brain, GraduationCap, Share2, PenTool, Target, TrendingUp, Globe } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Workflow Automation",
      description: "Intelligent agents that streamline operations, reduce manual tasks, and optimize business processes with precision.",
      features: ["Smart Process Mining", "Automated Decision Trees", "Real-time Optimization"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Custom AI Agents",
      description: "Bespoke AI solutions tailored to your specific business needs, industry requirements, and operational goals.",
      features: ["Domain-Specific Training", "Custom Integrations", "Scalable Architecture"]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "AI Academy",
      description: "Premium training courses and certifications to empower your team with cutting-edge AI knowledge and skills.",
      features: ["Expert-Led Courses", "Industry Certifications", "Hands-on Projects"]
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and brand management powered by AI insights and automation.",
      features: ["Brand Strategy", "Content Scheduling", "Audience Analytics"]
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Creation",
      description: "AI-powered content generation that resonates with your audience across all platforms and formats.",
      features: ["Brand Voice Training", "Multi-Platform Publishing", "SEO Optimization"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Media Buying (Performance Marketing)",
      description: "Data-driven advertising campaigns optimized by AI for maximum ROI and precise audience targeting.",
      features: ["AI Optimization", "Cross-Platform Campaigns", "Real-time Analytics"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Strategy & Consultation",
      description: "Strategic business guidance including forecasting, market analysis, and growth planning powered by AI.",
      features: ["Business Forecasting", "Market Intelligence", "Growth Strategy"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "AI-enhanced web development that creates intelligent, responsive, and conversion-optimized websites.",
      features: ["AI-Driven UX", "Smart Personalization", "Performance Optimization"]
    }
  ];

  return (
    <section id="solutions" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform every aspect of your business, 
            from operations to customer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-premium group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:animate-glow">
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;