import { memo } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = memo(() => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Student, Age 16",
      content: "The workshop taught me practical budgeting skills I actually use. Now I understand how to manage my money better!",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "Student, Age 15", 
      content: "I finally understand how investing works! The presenters made complex topics easy to understand.",
      rating: 5
    },
    {
      name: "Emma K.",
      role: "Student, Age 17",
      content: "Learning about online business opened my eyes to so many opportunities. Great workshop!",
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
            Hear from students who've experienced our workshops firsthand
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