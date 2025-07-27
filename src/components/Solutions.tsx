import { Bot, Brain, TrendingUp, GraduationCap, PenTool, Megaphone, Video, Globe } from 'lucide-react';

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
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Forecasting",
      description: "Proprietary AI software that provides accurate predictions and strategic insights for informed decision-making.",
      features: ["Predictive Analytics", "Market Intelligence", "Risk Assessment"]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "AI Academy",
      description: "Premium training courses and certifications to empower your team with cutting-edge AI knowledge and skills.",
      features: ["Expert-Led Courses", "Industry Certifications", "Hands-on Projects"]
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Creation",
      description: "AI-powered content generation and social media management that resonates with your audience.",
      features: ["Brand Voice Training", "Multi-Platform Publishing", "Performance Analytics"]
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Paid Media Campaigns",
      description: "Expert-managed advertising campaigns optimized by AI for maximum ROI and audience engagement.",
      features: ["AI Optimization", "Expert Management", "Real-time Reporting"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "AI Video Content",
      description: "Revolutionary video content creation powered by artificial intelligence for engaging visual storytelling.",
      features: ["Automated Editing", "Script Generation", "Multi-format Output"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Development",
      description: "AI-enhanced web development that creates intelligent, responsive, and conversion-optimized websites.",
      features: ["AI-Driven UX", "Smart Personalization", "Performance Optimization"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business, 
            from operations to customer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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