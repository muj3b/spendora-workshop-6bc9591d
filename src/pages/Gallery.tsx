
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png",
      alt: "Students learning about investing origins at Spendora workshop"
    },
    {
      src: "/lovable-uploads/672fa77a-f981-49c2-b3ad-9ad462f1fb41.png",
      alt: "Presenter explaining financial charts and investment strategies"
    },
    {
      src: "/lovable-uploads/43ffa40d-8361-401a-a4ef-2251c466a8f4.png",
      alt: "Interactive discussion about investment fundamentals"
    },
    {
      src: "/lovable-uploads/94b78fc9-f062-40b5-8e2e-977da26afeda.png",
      alt: "Setting up investment accounts workshop session"
    },
    {
      src: "/lovable-uploads/a9c673d3-410d-4593-a415-f9eaa6efbe74.png",
      alt: "Students engaged in learning about key economic terms"
    },
    {
      src: "/lovable-uploads/682cf84a-b680-4189-93ca-96be9f9ece99.png",
      alt: "Spendora's mission and goals presentation"
    },
    {
      src: "/lovable-uploads/9937f5f7-ec84-4a99-8719-715f1a743b92.png",
      alt: "Workshop conclusion and thank you message"
    },
    {
      src: "/lovable-uploads/eabd20b0-ff60-4809-b6ca-6ef2878b3576.png",
      alt: "Learning about compound interest and financial planning"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>

          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
              Workshop Gallery
            </h1>
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-4">
                <span className="text-3xl font-bold">DAY 1</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pictures from our first workshop session at R.H. Stafford Library
              </p>
            </div>
            <div className="mt-4 inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-semibold">First Workshop Session Highlights</span>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center mt-16 py-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Us for Our Next Workshop!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of our growing community of students learning essential financial skills. 
              Sign up now to secure your spot for our upcoming sessions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            >
              Reserve Your Spot - It's Free! 🚀
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;
