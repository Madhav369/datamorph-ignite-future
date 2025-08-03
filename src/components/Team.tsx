import React from 'react';
import aiWorkspace from '@/assets/ai-workspace.jpg';

const Team = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge AI technology and deep industry expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Leading AI Innovation
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team combines deep technical expertise with business acumen to deliver 
                AI solutions that drive real results. We stay at the forefront of AI advancement 
                to ensure our clients always have access to the latest technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20">
                <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-muted-foreground">AI Models Deployed</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20">
                <div className="text-3xl font-bold text-gradient mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
            </div>
          </div>

          {/* AI Workspace Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-1">
              <img 
                src={aiWorkspace} 
                alt="AI Technology Workspace" 
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;