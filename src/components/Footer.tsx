
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Target } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-blue-400">200+</span>
            </div>
            <p className="text-gray-300">Students Enrolled</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-green-400 mr-2" />
              <span className="text-3xl font-bold text-green-400">100%</span>
            </div>
            <p className="text-gray-300">Free Workshop</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-3xl font-bold text-purple-400">5</span>
            </div>
            <p className="text-gray-300">Days of Learning</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 animate-fade-in">
            🚀 Ready to Start Your Financial Journey?
          </h3>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join 200+ students already transforming their financial future with Spendora
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 mb-12 animate-fade-in group"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            style={{ animationDelay: '0.2s' }}
          >
            <Heart className="w-6 h-6 mr-2 group-hover:animate-pulse" />
            Sign Up for Free Workshop
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>

          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Spendora
                </h4>
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Student-led financial literacy workshop
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
                <button 
                  onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:scale-105"
                >
                  Registration Form
                </button>
                <div className="flex space-x-3">
                  <div className="w-6 h-6 bg-gray-700 dark:bg-gray-600 rounded hover:bg-gray-600 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-110"></div>
                  <div className="w-6 h-6 bg-gray-700 dark:bg-gray-600 rounded hover:bg-gray-600 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-110"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-500 dark:text-gray-600 text-sm">
              <p>&copy; 2025 Spendora. A project by East Ridge High School students.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
