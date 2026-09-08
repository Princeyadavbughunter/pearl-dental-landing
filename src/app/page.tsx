import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClinicBand from "@/components/ClinicBand";
import DoctorProfile from "@/components/DoctorProfile";
import TechnologySection from "@/components/TechnologySection";
import ClinicGallery from "@/components/ClinicGallery";
import TreatmentsSection from "@/components/TreatmentsSection";
import ClinicalCases from "@/components/ClinicalCases";
import JourneySection from "@/components/JourneySection";
import ReviewsLink from "@/components/ReviewsLink";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadProvider from "@/components/lead/LeadProvider";

/**
 * The page is a server component. Only the pieces that genuinely need the
 * browser are client islands — the header (scroll state), the lead dialog and
 * its triggers, the case-photo reveal and the mobile action bar.
 *
 * The previous build marked the whole page 'use client' and held a 1-second
 * countdown interval at the top of the tree, re-reconciling every section once
 * a second for as long as the tab was open.
 *
 * There are no scroll-reveal animations. Sections render visible in the HTML,
 * so nothing depends on JavaScript arriving in order to be readable.
 *
 * Section order follows how a patient evaluates a clinic: what it is, what it
 * looks like, who treats you, what it can do, what it treats, proof, process,
 * objections, then the ask.
 */
export default function Home() {
  return (
    <LeadProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClinicBand />
        <DoctorProfile />
        <TechnologySection />
        <ClinicGallery />
        <TreatmentsSection />
        <ClinicalCases />
        <JourneySection />
        <ReviewsLink />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />

      <StickyCTA />
      <WhatsAppButton />
    </LeadProvider>
  );
}
