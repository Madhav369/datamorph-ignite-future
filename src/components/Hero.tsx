import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-gradient">Intelligent AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented growth with Datamorph's premium AI solutions. 
            From workflow automation to predictive analytics, we empower enterprises 
            to lead in the AI revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-premium text-lg px-10 py-5">
              Start Your AI Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button variant="outline" className="btn-outline text-lg px-10 py-5 text-white border-white hover:bg-white hover:text-primary">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">AI Solutions Deployed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2.5x</div>
              <div className="text-white/70">Average ROI Increase</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;