import { useEffect, lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const AboutSpendora = lazy(() => import("@/components/AboutSpendora"));
const AudiobookPromo = lazy(() => import("@/components/AudiobookPromo"));
const MeetTheTeam = lazy(() => import("@/components/MeetTheTeam"));
const WorkshopSchedule = lazy(() => import("@/components/WorkshopSchedule"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero />
      <Suspense fallback={<div className="h-48" />}>
        <div id="about-spendora">
          <AboutSpendora />
        </div>
        <AudiobookPromo />
        <div id="workshop-schedule">
          <WorkshopSchedule />
        </div>
        <div id="meet-the-team">
          <MeetTheTeam />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
