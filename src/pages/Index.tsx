import { useEffect, lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const MeetTheTeam = lazy(() => import("@/components/MeetTheTeam"));
const PressSection = lazy(() => import("@/components/PressSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const WorkshopSchedule = lazy(() => import("@/components/WorkshopSchedule"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const StartingEarlyTeaser = lazy(() => import("@/components/StartingEarlyTeaser"));
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
        {/* 1. Meet the founders */}
        <div id="meet-the-team" className="scroll-mt-28">
          <div id="about-spendora">
            <MeetTheTeam />
          </div>
        </div>

        {/* 2. Spendora in the news */}
        <div id="press" className="scroll-mt-28">
          <PressSection />
        </div>

        {/* 3. Partners and collaborations */}
        <div id="partners" className="scroll-mt-28">
          <PartnersSection />
        </div>

        {/* 4. The workshop schedule */}
        <div id="workshop-schedule" className="scroll-mt-28">
          <WorkshopSchedule />
        </div>

        {/* 5. The frequently asked questions */}
        <div id="faq" className="scroll-mt-28">
          <FAQSection />
        </div>

        {/* 6. The power of starting early */}
        <div id="calculator" className="scroll-mt-28">
          <div id="starting-early">
            <StartingEarlyTeaser />
          </div>
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
