
import Footer from "@/components/Footer";

import Whystartup from "@/components/WhyStartup";

import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Review from "@/components/Reviews"
import Navbar from "@/components/Header";
import HeroSection from "@/components/HeroCompanies";
import ScrollTimeline from "@/components/ScrollTimeline";

export default function Home() {
  return (
   <>
   <Navbar/>
   <ScrollTimeline />
   <div>
     <HeroSection/>
     <Whystartup/>
     <Trusted/>
     <Review/>
     <ContactUs/>
     <Footer/>
   </div>
   </>   
  );
}
