'use client';

import { useCallback, useEffect, useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ClinicalCases from "@/components/ClinicalCases";
import JourneySection from "@/components/JourneySection";
import CTABox from "@/components/CTABox";
import GoogleReviews from "@/components/GoogleReviews";
import DoctorProfile from "@/components/DoctorProfile";
import ClinicPhotos from "@/components/ClinicPhotos";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const OFFER_SECONDS = 20 * 60;

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [remaining, setRemaining] = useState(OFFER_SECONDS);

  // Offer countdown — one interval, restarted when it runs out.
  useEffect(() => {
    const timer = setInterval(
      () => setRemaining((s) => (s > 0 ? s - 1 : OFFER_SECONDS)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  // Sticky bar appears once the hero is scrolled past.
  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open the lead popup once, shortly after landing.
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Reveal each section as it scrolls into view (see `section.visible` in globals.css).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const openPopup = useCallback(() => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="relative min-h-screen bg-cream">
      <Header onBookAppointment={openPopup} />
      <HeroSection onBookAppointment={openPopup} />
      <AboutSection />
      <StatsSection />
      <TreatmentsSection onBookAppointment={openPopup} />
      <ClinicalCases onBookAppointment={openPopup} />
      <JourneySection onBookAppointment={openPopup} />
      <CTABox onBookAppointment={openPopup} />
      <GoogleReviews />
      <DoctorProfile onBookAppointment={openPopup} />
      <ClinicPhotos onBookAppointment={openPopup} />
      <FAQSection />
      <Footer />

      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <WhatsAppButton />
      <PopupForm
        isOpen={showPopup}
        onClose={closePopup}
        minutes={Math.floor(remaining / 60)}
        seconds={remaining % 60}
      />
    </div>
  );
}
