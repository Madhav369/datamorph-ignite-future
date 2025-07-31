import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Dynamics",
      company: "Fortune 500 Manufacturing",
      rating: 5,
      quote: "Datamorph's AI solutions transformed our production efficiency by 340%. Their intelligent automation reduced our operational costs while maintaining the highest quality standards. The ROI was evident within the first quarter.",
      results: ["340% efficiency increase", "45% cost reduction", "99.8% accuracy rate"]
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Operations, FinanceForward",
      company: "Financial Services",
      rating: 5,
      quote: "The predictive analytics platform has revolutionized our risk assessment processes. We can now forecast market trends with unprecedented accuracy, giving us a significant competitive advantage in volatile markets.",
      results: ["92% prediction accuracy", "60% faster decisions", "$2.3M additional revenue"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Data Officer, HealthTech Solutions",
      company: "Healthcare Technology",
      rating: 5,
      quote: "Datamorph's custom AI agents have streamlined our patient care workflows while ensuring full HIPAA compliance. The implementation was seamless and the support team's expertise is unmatched.",
      results: ["50% workflow optimization", "Zero compliance issues", "98% staff satisfaction"]
    }
  ];

  const caseStudies = [
    {
      industry: "E-commerce",
      challenge: "Personalization at Scale",
      solution: "AI-powered recommendation engine",
      result: "285% increase in conversion rates",
      timeline: "3 months"
    },
    {
      industry: "Manufacturing",
      challenge: "Predictive Maintenance",
      solution: "IoT + AI monitoring system",
      result: "70% reduction in downtime",
      timeline: "6 months"
    },
    {
      industry: "Finance",
      challenge: "Fraud Detection",
      solution: "Real-time AI security platform",
      result: "99.2% fraud detection accuracy",
      timeline: "4 months"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-primary/5 to-transparent rounded-r-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Visionaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from real users who achieved success with our automation
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              name: "Daniel Kim",
              role: "Operations Lead at Flowbyte",
              content: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction."
            },
            {
              name: "Priya Mehra", 
              role: "CTO at Brightstack Labs",
              content: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters."
            },
            {
              name: "Elena Rodriguez",
              role: "Product Manager at Nexora", 
              content: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week."
            },
            {
              name: "Marcus Thompson",
              role: "Marketing Director at OrbitShift",
              content: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently."
            },
            {
              name: "Sarah Wong",
              role: "Analytics Manager at Corelink",
              content: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast."
            },
            {
              name: "Ravi Shah",
              role: "COO at PixelNest Solutions", 
              content: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control."
            }
          ].slice(0, 6).map((testimonial, index) => (
            <div 
              key={index} 
              className="card-premium hover-lift animate-fade-in group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors">
                "{testimonial.content}"
              </blockquote>
              
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-4xl text-primary/10 group-hover:text-primary/20 transition-colors">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20 animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Success Stories to Inspire</h3>
            <p className="text-muted-foreground text-lg">Discover how businesses and creators achieve results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Max's SaaS Revolution",
                description: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%.",
                metrics: ["50% cost reduction", "75% productivity boost"]
              },
              {
                title: "Emily's E-commerce Success", 
                description: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI.",
                metrics: ["60% ROI increase", "45% better personalization"]
              },
              {
                title: "Sophia's Retail Breakthrough",
                description: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior and increased engagement by 40%.",
                metrics: ["40% engagement boost", "30% repeat purchases"]
              }
            ].map((story, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-lift animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{story.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{story.description}</p>
                <div className="space-y-2">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-primary font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;