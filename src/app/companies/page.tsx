import HeroSection from "@/components/HeroCom";
import WhyLead from "@/components/WhyLeading"
import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Review from "@/components/Reviews";
import Navbar from "@/components/Header";
export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <WhyLead/>
   <Trusted/>
      <Review/>
      <ContactUs/>
     <Footer/>
   </>   
  );
}
