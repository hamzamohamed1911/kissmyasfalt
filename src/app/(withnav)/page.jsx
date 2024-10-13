import AboutUs from "../_components/AboutUs";
import Constitution from "../_components/Constitution";
import ContactUs from "../_components/ContactUs";
import Trips from "../_components/Trips";
import Founders from "../_components/Founders";
import Hero from "../_components/Hero";
import SafetyGuidelines from "../_components/SafetyGuidelines";
import WIIFM from "../_components/WIIFM";
import Features from "../_components/Features";
import Mobileapplication from "../_components/Mobileapplication";


export default function Home() {
  return (
    <main >
      <Hero />
      <AboutUs />
      <Mobileapplication/>
      <Constitution />
      <WIIFM />
      <Founders />
      <Features/>
      <Trips />
      <SafetyGuidelines/>
      <ContactUs />
    </main>
  );
}
