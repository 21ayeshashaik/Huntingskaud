import HeroSection from "@/components/ContactUs";
import WhyLead from "@/components/ContactDetails"
import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Review from "@/components/Reviews";
import Navbar from "@/components/Header";
import ScrollTimeline from "@/components/ScrollTimeline";
export default function Home() {
  return (
   <>
   <Navbar/>
   <ScrollTimeline />
   <div className="pt-1">
     <HeroSection/>
     <WhyLead/>
     <Trusted/>
     <Review/>
     <ContactUs/>
     <Footer/>
   </div>
   </>   
  );
}
