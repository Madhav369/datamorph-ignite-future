import { CheckCircle, Zap, Target, Users } from 'lucide-react';
import aboutImage from '@/assets/about-us.jpg';

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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Datamorph</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Datamorph, we believe artificial intelligence is the cornerstone of future business success. 
              Founded by industry pioneers, we've dedicated ourselves to creating AI solutions that don't just 
              automate—they transform, predict, and elevate entire organizations.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to democratize access to enterprise-grade AI, making cutting-edge technology 
              accessible to businesses of all sizes while maintaining the highest standards of security, 
              reliability, and performance.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Datamorph Team"
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;