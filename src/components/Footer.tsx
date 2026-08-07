import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center p-8 md:p-12 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs space-y-8">
          <div className="space-y-3 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Ready to Start Your Financial Journey?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Join the next cohort of students in Spendora's financial literacy workshop
            </p>
          </div>
          
          <Button 
            size="lg"
            className="text-base font-bold px-8 py-6 rounded-full shadow-md bg-primary text-primary-foreground"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
          >
            Sign Up for Free Workshop 🚀
          </Button>

          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-left">
                <img src="/logo-icon.png" alt="Spendora Logo" className="h-10 w-auto object-contain" />
                <div>
                  <h4 className="text-xl font-black text-foreground tracking-tight">
                    Spendora
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Student-led financial literacy workshop
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">
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
