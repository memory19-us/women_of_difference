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
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10 mb-16">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-600 mb-4 font-serif">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Woman of Difference Group, we help individuals live, lead, heal, and build from depth—where faith, identity, and discipline are rightly ordered before expansion begins.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 space-y-20 pb-20">
        
        {/* ROOTS Framework */}
        <RootsSection />

        {/* About Grace */}
        <AboutGrace />

        {/* Faith Statement */}
        <FaithStatement />
        
      </main>
      <Footer/>
    </>
  );
}