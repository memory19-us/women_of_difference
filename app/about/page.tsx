import AboutGrace from "@/components/custom/about/about-grace";
import FaithStatement from "@/components/custom/about/faith-statement";
import Hero from "@/components/custom/about/hero";
import RootsSection from "@/components/custom/about/roots-section";
import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Intro / Mission */}
      <main className="max-w-7xl mx-auto px-4 space-y-32 pb-32">

        {/* ROOTS Framework */}
        <RootsSection />



        {/* About Grace */}
        <AboutGrace />

        {/* Faith Statement */}
        <FaithStatement />

      </main>
      <Footer />
    </>
  );
}