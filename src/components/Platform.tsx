import { Shield, Zap, Settings, BarChart3, Brain, Workflow } from 'lucide-react';
import platformImage from '@/assets/ai-platform.jpg';

const Platform = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Neural Networks",
      description: "State-of-the-art deep learning models trained on industry-specific datasets"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Self-learning workflows that adapt and optimize based on performance data"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards providing actionable insights and performance metrics"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with industry security standards"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Performance",
      description: "Optimized infrastructure delivering responses in milliseconds, not seconds"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Connect with your existing tech stack through our comprehensive API suite"
    }
  ];

  const metrics = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<50ms", label: "Response Time" },
    { value: "256-bit", label: "Encryption" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <section id="platform" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our AI <span className="text-gradient">Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge infrastructure, our platform delivers enterprise-grade AI capabilities 
            with unmatched reliability, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Platform Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={platformImage}
                alt="AI Platform Dashboard"
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>

          {/* Features */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-8">Platform Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 hover:bg-card transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Platform Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-white/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;