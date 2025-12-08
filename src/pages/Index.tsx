import { useEffect, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

const AboutSpendora = lazy(() => import("@/components/AboutSpendora"));
const MeetTheTeam = lazy(() => import("@/components/MeetTheTeam"));
const Footer = lazy(() => import("@/components/Footer"));
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO: title, description, canonical
    document.title = "Spendora Financial Literacy Workshop";
    const desc = "Free student-led financial literacy workshop: budgeting, stocks, crypto, online business. Join Spendora.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + '/');
  }, []);

  return (
    <PageTransition transitionType="welcome">
      <div className="min-h-screen liquid-page">
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <div id="about-spendora">
            <AboutSpendora />
          </div>
          <div id="meet-the-team">
            <MeetTheTeam />
          </div>
          <Footer />
        </Suspense>
      </div>
    </PageTransition>
  );
};

export default Index;
