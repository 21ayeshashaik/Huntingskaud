import GrowthPartners from "@/components/Growth";
import Navbar from "@/components/Header";
import HireSection from "@/components/HireSection";
import HomeSection from "@/components/Home";
import WhyCompanies from "@/components/WhyComapanies";
import Services from "@/components/Services";
import SubmitCv from "@/components/SubmitCv";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <>
      <Navbar />
      <div > {/* Add padding-top equal to navbar height */}
        <HomeSection />
        <GrowthPartners />
        <WhyCompanies />
        <HireSection />
        <Services />
        <Journey/>
        <SubmitCv />
        <Reviews />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
