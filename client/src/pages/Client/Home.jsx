import Hero from "../../components/Hero/Hero";
import ServicesGrid from "../../components/Services/ServicesGrid";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import PricingCards from "../../components/Pricing/PricingCards";
import TeamSection from "../../components/About/TeamSection";
import GallerySection from "../../components/Gallery/GallerySection";
import StatisticsSection from "../../components/Common/StatisticsSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import FaqSection from "../../components/FAQ/FaqSection";
import AppointmentCTA from "../../components/Appointment/AppointmentCTA";
import InstagramSection from "../../components/Common/InstagramSection";
import ContactSection from "../../components/Contact/ContactSection";
import Footer from "../../components/Layout/Footer";
import GoogleMap from "../../components/Contact/GoogleMap";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <PricingCards />
      <TeamSection />
      <StatisticsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <AppointmentCTA />
      <InstagramSection />
      <ContactSection />
      <GoogleMap />
      <Footer />
    </>
  );
}
