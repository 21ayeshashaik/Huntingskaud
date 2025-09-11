
import Footer from "@/components/Footer";


import Trusted from "@/components/Trusted";
import ContactUs from "@/components/ContactForm";
import Review from "@/components/Reviews"
import Navbar from "@/components/Header";
import ScrollTimeline from "@/components/ScrollTimeline";

import RecruitmentJourney from "@/components/RecruitJourney";
import FromFirst from "@/components/Fromfirst";

export default function Home() {
  return (
   <>
   <Navbar/>
   <ScrollTimeline />
   <div className="pt-1">
     <RecruitmentJourney/>
     <FromFirst/>
     <Trusted/>
     <Review/>
     <ContactUs/>
     <Footer/>
   </div>
   </>   
  );
}
