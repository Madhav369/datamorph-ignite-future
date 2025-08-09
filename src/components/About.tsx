import { CheckCircle, Zap, Target, Users } from 'lucide-react';
import aiAutomationAnimation from '@/assets/ai-automation-animation.jpg';

const About = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "Pioneering AI technologies that reshape industries"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "Measurable outcomes that accelerate business growth"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Focus",
      description: "Long-term relationships built on trust and success"
    }
  ];

  const achievements = [
    "Industry-leading AI algorithms",
    "Fortune 500 client portfolio", 
    "Award-winning development team",
    "Proven track record of transformation"
  ];

  return (
    <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">WHO WE ARE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              We build your AI employee — and manage it end-to-end.
              <span className="text-primary"> We find growth opportunities and automate what matters.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We’re a team of tech and business experts who act as an extension of your company —
              identifying growth levers, designing AI systems, and deploying automation that runs 24/7.
              Your operations get faster, clearer, and more profitable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Custom AI solution development</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Workflow optimization & automation</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Data analysis & insights generation</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 hover-lift">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src={aiAutomationAnimation} 
                    alt="AI Automation and Performance Marketing animation"
                    loading="lazy" decoding="async"
                    className="w-full h-full object-cover rounded-xl animate-pulse-glow"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;