import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl space-y-8">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Start Your Financial Journey?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Join the next cohort of students in Spendora's summer workshop
            </p>
          </div>
          
          <Button 
            size="lg"
            className="text-lg font-bold px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all bg-primary text-primary-foreground"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
          >
            Sign Up for Free Workshop 🚀
          </Button>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold gradient-text-primary">
                  Spendora
                </h4>
                <p className="text-muted-foreground text-sm">
                  Student-led financial literacy workshop
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
                <Link to="/donate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Donate
                </Link>
                <a 
                  href="https://forms.gle/JWCVyGcfN5UKiwqHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Registration Form
                </a>
                <a
                  href="https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-pink-500 transition-colors"
                  aria-label="Spendora Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8 text-muted-foreground text-xs">
              <p>&copy; 2025 Spendora. A project by East Ridge High School students.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
