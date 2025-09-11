import HeroSection from "@/components/HeroService";
import Service2 from "@/components/Service2";
import Service3 from "@/components/Service3";
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
   <Service2/>
   <Service3/>
   <Trusted/>
      <Review/>
      <ContactUs/>
     <Footer/>
   </>   
  );
}
