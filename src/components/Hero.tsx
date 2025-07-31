import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">NEW GEN AI AUTOMATION PARTNER</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Automate Smarter. Grow Faster.
            <span className="block text-gradient italic">With AI.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI Automation for Modern Businesses Made Simple
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-premium text-lg px-8 py-4 rounded-lg">
              Book A Free Call
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
              <span className="text-muted-foreground">𝕏</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
              <span className="text-muted-foreground">IG</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
              <span className="text-muted-foreground">FB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;