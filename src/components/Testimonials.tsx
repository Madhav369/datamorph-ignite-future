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
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how industry leaders are achieving breakthrough results with our AI solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="space-y-2 mb-6">
                {testimonial.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-primary font-medium mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Case Studies</h3>
            <p className="text-white/80 text-lg">Real results from real implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-white/60 text-sm font-medium mb-2">{study.industry}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{study.challenge}</h4>
                <p className="text-white/80 text-sm mb-4">{study.solution}</p>
                <div className="text-2xl font-bold text-white mb-2">{study.result}</div>
                <div className="text-white/60 text-sm">Implemented in {study.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;