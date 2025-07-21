import { memo } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = memo(() => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Student, Age 16",
      content: "Spendora taught me how to budget my part-time job money. I've already saved $500 for college!",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "Student, Age 15", 
      content: "I never understood investing before, but now I'm excited to start building my financial future.",
      rating: 5
    },
    {
      name: "Emma K.",
      role: "Student, Age 17",
      content: "The online business workshop inspired me to start my own small business. Amazing program!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-display text-foreground mb-6">
            What <span className="gradient-text-primary">Students Say</span>
          </h2>
          <p className="text-body-large text-muted-foreground">
            Real feedback from students who have transformed their financial knowledge with Spendora
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              animationDelay={`${index * 0.2}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;