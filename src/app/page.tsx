import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorProfile from "@/components/DoctorProfile";
import SpecialistsSection from "@/components/SpecialistsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ClinicalCases from "@/components/ClinicalCases";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ClinicBand from "@/components/ClinicBand";
import ClinicGallery from "@/components/ClinicGallery";
import TechnologySection from "@/components/TechnologySection";
import TreatmentPlanningSection from "@/components/TreatmentPlanningSection";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import AwardBand from "@/components/AwardBand";
import JourneySection from "@/components/JourneySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadProvider from "@/components/lead/LeadProvider";

/**
 * The page is a server component. Only the pieces that genuinely need the
 * browser are client islands — the header (scroll state), the lead dialog and
 * its triggers, the clinic carousel and the mobile bar.
 *
 * There are no scroll-reveal animations and no timers. Sections render visible
 * in the HTML, so nothing depends on JavaScript arriving to be readable.
 *
 * ORDER — the sequence a patient actually evaluates a clinic in:
 *   what it is → why here → who treats me → what they do →
 *   does it work → what it looks like → how it's done → how it's planned →
 *   what others say → what happens next → objections → where to go → the ask.
 */
export default function Home() {
  return (
    <LeadProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorProfile />
        <SpecialistsSection />
        <TreatmentsSection />
        <ClinicalCases />
        <BeforeAfterGallery />
        <ClinicBand />
        <ClinicGallery />
        <TechnologySection />
        <TreatmentPlanningSection />
        <GoogleReviews />
        <VideoTestimonials />
        <AwardBand />
        <JourneySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />

      <StickyCTA />
      <WhatsAppButton />
    </LeadProvider>
  );
}
