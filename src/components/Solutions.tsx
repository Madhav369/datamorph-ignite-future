import { useState } from 'react';
import { Bot, Brain, GraduationCap, Share2, PenTool, Target, TrendingUp, Globe, Database, BarChart3, Video, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const verticals = [
    {
      id: "ai-business",
      title: "AI-Powered Business",
      icon: <Bot className="w-8 h-8" />,
      services: [
        {
          id: "custom-ai-agents",
          icon: <Bot className="w-10 h-10" />,
          title: "Custom AI Agents",
          description: "Bespoke AI solutions tailored to your business.",
          fullDescription: "Build intelligent AI agents that understand your business context, automate complex workflows, and integrate seamlessly with your existing systems. Our custom solutions are designed to scale with your growth.",
          features: ["Domain-Specific Training", "Custom Integrations", "Scalable Architecture", "Real-time Learning", "API Connectivity"]
        },
        {
          id: "workflow-automation",
          icon: <Brain className="w-10 h-10" />,
          title: "Workflow Automation",
          description: "Intelligent systems that streamline operations.",
          fullDescription: "Transform your business processes with AI-powered automation that learns from your workflows, eliminates bottlenecks, and continuously optimizes for efficiency and accuracy.",
          features: ["Process Mining", "Decision Trees", "Real-time Optimization", "Error Detection", "Performance Analytics"]
        },
        {
          id: "data-dashboards-crm",
          icon: <Database className="w-10 h-10" />,
          title: "Data Dashboards & CRM",
          description: "AI-powered analytics and CRM workflows.",
          fullDescription: "Unlock the power of your data with intelligent dashboards that provide real-time insights, predictive analytics, and automated CRM workflows that nurture leads and optimize customer relationships.",
          features: ["Real-time Analytics", "CRM Integration", "Predictive Insights", "Customer Journey Mapping", "Automated Reporting"]
        },
        {
          id: "business-strategy",
          icon: <TrendingUp className="w-10 h-10" />,
          title: "Business Strategy & Consultation",
          description: "Strategic guidance with AI-driven insights.",
          fullDescription: "Leverage AI for strategic decision-making with advanced forecasting models, market intelligence, and data-driven growth strategies that position your business ahead of the competition.",
          features: ["Business Forecasting", "Market Intelligence", "Growth Strategy", "Competitive Analysis", "Risk Assessment"]
        }
      ]
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing Engine",
      icon: <Target className="w-8 h-8" />,
      services: [
        {
          id: "performance-media-buying",
          icon: <Target className="w-10 h-10" />,
          title: "Performance Media Buying",
          description: "AI-optimized campaigns for maximum ROI.",
          fullDescription: "Scale your advertising with intelligent media buying that uses AI to optimize bids, target audiences, and maximize conversions across all major platforms in real-time.",
          features: ["AI Optimization", "Cross-Platform Campaigns", "Real-time Analytics", "Audience Targeting", "Budget Optimization"]
        },
        {
          id: "funnel-building",
          icon: <BarChart3 className="w-10 h-10" />,
          title: "Funnel Building",
          description: "Conversion-optimized funnels with analytics.",
          fullDescription: "Build high-converting sales funnels with AI-powered optimization, advanced analytics tracking, and continuous testing to maximize your conversion rates and revenue.",
          features: ["Conversion Optimization", "A/B Testing", "Attribution Modeling", "User Journey Analysis", "Revenue Tracking"]
        }
      ]
    },
    {
      id: "content-digital",
      title: "Content & Digital Identity",
      icon: <Palette className="w-8 h-8" />,
      services: [
        {
          id: "ai-content-creation",
          icon: <Video className="w-10 h-10" />,
          title: "AI Video & Content Creation",
          description: "AI-powered content that resonates everywhere.",
          fullDescription: "Create compelling content at scale with AI that understands your brand voice, generates video content, and optimizes for engagement across all platforms and channels.",
          features: ["Brand Voice Training", "Multi-Platform Publishing", "SEO Optimization", "Video Generation", "Content Automation"]
        },
        {
          id: "social-media-management",
          icon: <Share2 className="w-10 h-10" />,
          title: "Social Media Management",
          description: "AI-driven social strategy and engagement.",
          fullDescription: "Manage your social presence with AI-powered content planning, audience analysis, and engagement optimization that grows your community and drives meaningful interactions.",
          features: ["Brand Strategy", "Content Scheduling", "Audience Analytics", "Engagement Optimization", "Community Growth"]
        },
        {
          id: "personal-branding",
          icon: <Palette className="w-10 h-10" />,
          title: "Personal Branding",
          description: "Build and amplify your personal brand.",
          fullDescription: "Establish thought leadership and build a powerful personal brand with strategic content creation, reputation management, and AI-driven audience growth strategies.",
          features: ["Brand Positioning", "Thought Leadership", "Reputation Management", "Content Strategy", "Network Building"]
        }
      ]
    },
    {
      id: "ai-academy",
      title: "AI Academy",
      icon: <GraduationCap className="w-8 h-8" />,
      services: [
        {
          id: "ai-training-certification",
          icon: <GraduationCap className="w-10 h-10" />,
          title: "AI Training & Certification",
          description: "Empower your team with AI expertise.",
          fullDescription: "Transform your team into AI experts with comprehensive training programs, industry-recognized certifications, and hands-on projects that deliver immediate business value.",
          features: ["Expert-Led Courses", "Industry Certifications", "Hands-on Projects", "Custom Curricula", "Ongoing Support"]
        },
        {
          id: "ai-implementation-workshops",
          icon: <Globe className="w-10 h-10" />,
          title: "AI Implementation Workshops",
          description: "Practical AI implementation for your business.",
          fullDescription: "Fast-track your AI adoption with intensive workshops that provide practical implementation strategies, custom roadmaps, and ongoing support to ensure successful deployment.",
          features: ["Custom Workshops", "Implementation Guides", "Ongoing Support", "Strategy Sessions", "Technical Training"]
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
                
                <div className="space-y-3">
                  {vertical.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="card-premium group transition-all duration-300 p-4 border border-border/20 rounded-xl bg-card/50 backdrop-blur-sm">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-1">
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors leading-tight">
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                            {expandedService === service.id ? service.fullDescription : service.description}
                          </p>
                          
                          {expandedService === service.id && (
                            <ul className="space-y-1 mb-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                  <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="text-xs h-6 px-2 text-primary hover:text-primary-foreground hover:bg-primary"
                          >
                            {expandedService === service.id ? (
                              <>
                                <ChevronUp className="w-3 h-3 mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-3 h-3 mr-1" />
                                See More
                              </>
                            )}
                          </Button>
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
                    <div key={serviceIndex} className="card-premium group transition-all duration-300 border border-border/20 rounded-xl bg-card/50 backdrop-blur-sm">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {expandedService === service.id ? service.fullDescription : service.description}
                          </p>
                          
                          {expandedService === service.id && (
                            <ul className="space-y-2 mb-4">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="text-sm text-primary hover:text-primary-foreground hover:bg-primary"
                          >
                            {expandedService === service.id ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                See More
                              </>
                            )}
                          </Button>
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