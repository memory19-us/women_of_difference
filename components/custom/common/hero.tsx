"use client"
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useRouter } from "next/navigation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={"/images/hero-image.jpg"}
          alt="Empowered woman in transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3FA3A3]/95 via-[#3FA3A3]/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Woman of <span className="text-[#F5A623]">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transform your life through mindset coaching, reclaim your space with premium cleaning services, 
            and grow through empowering events and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white shadow-glow transition-all hover:scale-105"
              onClick={() => router.push("/services")}
            >
              Explore Our Services
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#3FA3A3] backdrop-blur-sm"
              onClick={() => router.push("/contact")}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;