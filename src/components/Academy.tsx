import { Star, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import academyImage from '@/assets/ai-academy.jpg';

const Academy = () => {
  const courses = [
    {
      title: "AI Fundamentals for Business Leaders",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.9,
      students: "2,500+",
      description: "Master the strategic implementation of AI in business environments",
      highlights: ["Strategic AI Planning", "ROI Measurement", "Risk Management"]
    },
    {
      title: "Advanced Machine Learning Certification",
      duration: "12 weeks", 
      level: "Advanced",
      rating: 4.8,
      students: "1,200+",
      description: "Deep dive into ML algorithms, neural networks, and model optimization",
      highlights: ["Neural Networks", "Deep Learning", "Model Deployment"]
    },
    {
      title: "AI Ethics & Governance",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: "3,100+",
      description: "Navigate the ethical considerations and governance frameworks for AI",
      highlights: ["Ethical Frameworks", "Compliance", "Best Practices"]
    }
  ];

  const certifications = [
    "Certified AI Business Strategist",
    "Professional ML Engineer",
    "AI Ethics Specialist",
    "Data Science Professional"
  ];

  return (
    <section id="academy" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI <span className="text-gradient">Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your team with industry-leading AI education. Our comprehensive courses 
            and certifications are designed by experts for real-world application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">Transform Your Team's AI Expertise</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI Academy offers world-class education programs designed to bridge the gap between 
              theoretical knowledge and practical implementation. Led by industry experts and AI pioneers, 
              our courses provide the skills needed to drive AI transformation in your organization.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-premium">
                Explore Courses
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button variant="outline" className="btn-outline">
                Download Curriculum
              </Button>
            </div>
          </div>

          {/* Academy Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={academyImage}
                alt="AI Academy Learning Environment"
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card-premium">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {course.level}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-4">{course.description}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full btn-outline">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;