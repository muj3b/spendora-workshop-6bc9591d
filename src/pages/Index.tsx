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
