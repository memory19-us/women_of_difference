"use client"
import { Brain, Sparkles, Mic, BarChart, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const services = [
    {
      number: "1",
      title: "R.O.O.T.E.D Transformation Program",
      description: "A structured personal and leadership development experience designed to help you heal, grow, and lead with clarity.",
      icon: <Brain className="w-8 h-8 text-[#F5A623]" />,
      color: "bg-[#F3EDE7]",
    },
    {
      number: "2",
      title: "Coaching & Consulting",
      description: "We help individuals and institutions move from vision to execution through clear systems, structure, and strategy.",
      icon: <BarChart className="w-8 h-8 text-[#3FA3A3]" />,
      color: "bg-[#E6F4F4]",
    },
    {
      number: "3",
      title: "Speaking & Transformational Events",
      description: "High-impact sessions that shift mindset, identity, and direction—designed for conferences, organizations, and leadership platforms.",
      icon: <Mic className="w-8 h-8 text-[#F5A623]" />,
      color: "bg-[#FDF6E9]",
    },
    {
      number: "4",
      title: "Premium Cleaning Services",
      description: "Professional residential and commercial cleaning delivered with excellence, reliability, and attention to detail.",
      icon: <Sparkles className="w-8 h-8 text-[#3FA3A3]" />,
      color: "bg-[#F3FAF1]",
    },
    {
      number: "5",
      title: "Community Impact Initiative",
      description: "We provide free cleaning services for elderly individuals who live alone and cannot afford support—because leadership must serve.",
      icon: <Heart className="w-8 h-8 text-[#F5A623]" />,
      color: "bg-[#FFF5F5]",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-[#F5A623] uppercase mb-4">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            How We Work With You
          </h3>
          <div className="h-1.5 w-24 bg-[#3FA3A3] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 ${service.color} group ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                  {service.icon}
                </div>
                <span className="text-5xl font-black text-black/5 select-none">0{service.number}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-[#F5A623]/20 transition-all hover:scale-105 group"
            onClick={() => router.push("/contact")}
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[#3FA3A3] text-[#3FA3A3] hover:bg-[#3FA3A3] hover:text-white rounded-full px-8 h-14 text-lg font-bold transition-all"
            onClick={() => router.push("/services")}
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

