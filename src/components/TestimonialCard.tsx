import { memo } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  animationDelay?: string;
}

const TestimonialCard = memo(({ name, role, content, rating, animationDelay = "0s" }: TestimonialCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 animate-fade-in hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large"
      style={{ animationDelay }}
    >
      <div className="flex items-center justify-between mb-4">
        <Quote className="w-8 h-8 text-primary opacity-60" />
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 italic">"{content}"</p>
      
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;