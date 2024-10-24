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
import RewardsSystem from "../_components/RewardsSystem";
import SignUp from "../_components/SignUp";


export default function Home() {
  return (
    <main >
      <Hero />
      <AboutUs />
      <Mobileapplication/>
      <Constitution />
      <WIIFM />
      <RewardsSystem/>
      <Founders />
      <SignUp/>
      <Features/>
      <Trips />
      <SafetyGuidelines/>
      <ContactUs />
    </main>
  );
}
