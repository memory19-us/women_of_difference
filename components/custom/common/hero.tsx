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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 animate-fade-in leading-[1.1] tracking-tighter">
            Building Leaders. <br />
            Establishing Structure. <br />
            <span className="text-[#F5A623]">Sustaining Impact.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-medium">
            We help individuals and institutions move from confusion to clarity, structure, and disciplined leadership, while supporting real-world transformation through <span className="">Luketekelo Family Foundation</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white shadow-glow transition-all hover:scale-105"
              onClick={() => router.push("/contact")}
            >
              Work with us
            </Button>
            {/* <Button
              size="lg"
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white shadow-glow transition-all hover:scale-105"
              onClick={() => router.push("/contact")}
            >
              Invite Me to Speak
            </Button> */}

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-[#3FA3A3] backdrop-blur-sm"
              onClick={() => router.push("/services")}
            >
              Explore our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;