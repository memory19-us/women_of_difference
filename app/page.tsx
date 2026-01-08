import About from "@/components/custom/common/about";
import Contact from "@/components/custom/common/contact";
import Footer from "@/components/custom/common/footer";
import Hero from "@/components/custom/common/hero";
import Navigation from "@/components/custom/common/navigation";
import RootsFramework from "@/components/custom/common/roots-framework";
import Services from "@/components/custom/common/services";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navigation/>
    <Hero/>

    <About/>
    <Services/>
    <RootsFramework/>
    <Contact/>

    <Footer/>

   </div>
  );
}
