
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center liquid-glass-surface rounded-3xl p-8 md:p-12 shadow-medium">
          <h3 className="text-3xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Financial Journey?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join the next cohort of students in Spendora's summer workshop
          </p>
          
          <Button 
            size="lg"
            className="text-xl px-12 py-6 rounded-full mb-12 animate-fade-in"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            style={{ animationDelay: '0.2s' }}
          >
            Sign Up for Free Workshop
          </Button>

          <div className="border-t border-border pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold gradient-text-primary">
                  Spendora
                </h4>
                <p className="text-muted-foreground text-sm">
                  Student-led financial literacy workshop
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
                <button 
                  onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                >
                  Registration Form
                </button>
                <div className="flex space-x-3">
                  <div className="w-6 h-6 liquid-glass-surface rounded transition-all duration-300 hover:scale-110"></div>
                  <div className="w-6 h-6 liquid-glass-surface rounded transition-all duration-300 hover:scale-110"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-muted-foreground text-sm">
              <p>&copy; 2025 Spendora. A project by East Ridge High School students.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
