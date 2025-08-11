import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSpendora from "@/components/AboutSpendora";
import WorkshopSchedule from "@/components/WorkshopSchedule";
import MeetTheTeam from "@/components/MeetTheTeam";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
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
        <div id="about-spendora">
          <AboutSpendora />
        </div>
        <div id="workshop-schedule">
          <WorkshopSchedule />
        </div>
        <div id="meet-the-team">
          <MeetTheTeam />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
