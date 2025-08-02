import { Bot, Brain, GraduationCap, Share2, PenTool, Target, TrendingUp, Globe, Database, BarChart3, Video, Palette } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Solutions = () => {
  const verticals = [
    {
      id: "ai-business",
      title: "AI-Powered Business",
      icon: <Bot className="w-8 h-8" />,
      services: [
        {
          icon: <Bot className="w-10 h-10" />,
          title: "Custom AI Agents",
          description: "Bespoke AI solutions tailored to your specific business needs and operational goals.",
          features: ["Domain-Specific Training", "Custom Integrations", "Scalable Architecture"]
        },
        {
          icon: <Brain className="w-10 h-10" />,
          title: "Workflow Automation",
          description: "Intelligent systems that streamline operations and reduce manual tasks.",
          features: ["Process Mining", "Decision Trees", "Real-time Optimization"]
        },
        {
          icon: <Database className="w-10 h-10" />,
          title: "Data Dashboards & CRM",
          description: "AI-powered analytics and customer relationship management workflows.",
          features: ["Real-time Analytics", "CRM Integration", "Predictive Insights"]
        },
        {
          icon: <TrendingUp className="w-10 h-10" />,
          title: "Business Strategy & Consultation",
          description: "Strategic guidance with forecasting, market analysis, and growth planning.",
          features: ["Business Forecasting", "Market Intelligence", "Growth Strategy"]
        }
      ]
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing Engine",
      icon: <Target className="w-8 h-8" />,
      services: [
        {
          icon: <Target className="w-10 h-10" />,
          title: "Performance Media Buying",
          description: "Data-driven advertising campaigns optimized for maximum ROI.",
          features: ["AI Optimization", "Cross-Platform Campaigns", "Real-time Analytics"]
        },
        {
          icon: <BarChart3 className="w-10 h-10" />,
          title: "Funnel Building",
          description: "Conversion-optimized funnels with advanced analytics tracking.",
          features: ["Conversion Optimization", "A/B Testing", "Attribution Modeling"]
        }
      ]
    },
    {
      id: "content-digital",
      title: "Content & Digital Identity",
      icon: <Palette className="w-8 h-8" />,
      services: [
        {
          icon: <Video className="w-10 h-10" />,
          title: "AI Video & Content Creation",
          description: "AI-powered content generation that resonates across all platforms.",
          features: ["Brand Voice Training", "Multi-Platform Publishing", "SEO Optimization"]
        },
        {
          icon: <Share2 className="w-10 h-10" />,
          title: "Social Media Management",
          description: "Comprehensive social strategy and brand management with AI insights.",
          features: ["Brand Strategy", "Content Scheduling", "Audience Analytics"]
        },
        {
          icon: <Palette className="w-10 h-10" />,
          title: "Personal Branding",
          description: "Build and amplify your personal brand with strategic content.",
          features: ["Brand Positioning", "Thought Leadership", "Reputation Management"]
        }
      ]
    },
    {
      id: "ai-academy",
      title: "AI Academy",
      icon: <GraduationCap className="w-8 h-8" />,
      services: [
        {
          icon: <GraduationCap className="w-10 h-10" />,
          title: "AI Training & Certification",
          description: "Premium courses to empower your team with cutting-edge AI knowledge.",
          features: ["Expert-Led Courses", "Industry Certifications", "Hands-on Projects"]
        },
        {
          icon: <Globe className="w-10 h-10" />,
          title: "AI Implementation Workshops",
          description: "Practical workshops to implement AI solutions in your business.",
          features: ["Custom Workshops", "Implementation Guides", "Ongoing Support"]
        }
      ]
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

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verticals.map((vertical, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center pb-4 border-b border-border/20">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {vertical.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">{vertical.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {vertical.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="card-subtle group hover:scale-[1.02] transition-all duration-300 p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-1">
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors leading-tight">
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          <Tabs defaultValue="ai-business" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {verticals.map((vertical) => (
                <TabsTrigger key={vertical.id} value={vertical.id} className="text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4">{vertical.icon}</div>
                    <span className="hidden sm:inline">{vertical.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {verticals.map((vertical) => (
              <TabsContent key={vertical.id} value={vertical.id} className="space-y-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {vertical.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">{vertical.title}</h3>
                </div>
                
                <div className="grid gap-6">
                  {vertical.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="card-premium group hover:scale-[1.02] transition-all duration-300">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Solutions;