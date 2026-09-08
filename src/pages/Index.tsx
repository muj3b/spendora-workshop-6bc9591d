import { useEffect, lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const CompoundInterestCalculator = lazy(() => import("@/components/CompoundInterestCalculator"));
const AboutSpendora = lazy(() => import("@/components/AboutSpendora"));
const GlobalFootprintSection = lazy(() => import("@/components/GlobalFootprintSection"));
const PressSection = lazy(() => import("@/components/PressSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const WorkshopSchedule = lazy(() => import("@/components/WorkshopSchedule"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const MeetTheTeam = lazy(() => import("@/components/MeetTheTeam"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

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
        <div id="calculator">
          <CompoundInterestCalculator />
        </div>
        <div id="about-spendora">
          <AboutSpendora />
        </div>
        <div id="global-reach">
          <GlobalFootprintSection />
        </div>
        <div id="press">
          <PressSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="workshop-schedule">
          <WorkshopSchedule />
        </div>
        <div id="faq">
          <FAQSection />
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
