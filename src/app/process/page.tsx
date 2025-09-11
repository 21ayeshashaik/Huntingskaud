
import Footer from "@/components/Footer";


import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Review from "@/components/Reviews"
import Navbar from "@/components/Header";

import RecruitmentJourney from "@/components/RecruitJourney";
import FromFirst from "@/components/Fromfirst";

export default function Home() {
  return (
   <>
   <Navbar/>
   <RecruitmentJourney/>
   <FromFirst/>
   <Trusted/>
   <Review/>
   <ContactUs/>
  <Footer/>

   </>   
  );
}
