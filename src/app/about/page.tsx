
import Footer from "@/components/Footer";
import About from "@/components/About";
import Recruit from "@/components/Recruit";
import ValuesSection from "@/components/ValueSection";
import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Review from "@/components/Reviews"
import Navbar from "@/components/Header";

export default function Home() {
  return (
   <>
   <Navbar/>
   <About/>
   <Recruit/>
   <ValuesSection/>
   <Trusted/>
   <Review/>
   <ContactUs/>
  <Footer/>

   </>   
  );
}
