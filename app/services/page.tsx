"use client";

import { Brain, Sparkles, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/custom/services/hero";
import Navigation from "@/components/custom/common/navigation";
import Footer from "@/components/custom/common/footer";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  return (
    <main className="bg-background">
      <Navigation />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-24 space-y-28">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#F5A623]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revenue-generating services and community initiatives designed to empower individuals,
            strengthen leadership, and create sustainable transformation.
          </p>
        </div>

        {/* 1. Mindset Coaching */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-[#F5A623]" />
              <h3 className="text-3xl font-bold">
                Mindset Transformation Coaching
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              <strong>Secondary Revenue Stream.</strong> Personalized and group coaching designed
              to cultivate clarity, discipline, leadership capacity, and sustainable growth.
            </p>

            <ul className="space-y-3 mb-6">
              <li>• 1:1 mindset and leadership coaching</li>
              <li>• Group coaching sessions</li>
              <li>• Leadership formation workshops</li>
            </ul>

            <p className="text-sm text-muted-foreground mb-8">
              <strong>Target Clients:</strong> Founders, leaders, individuals, and youth seeking clarity,
              discipline, and purpose-driven growth.
            </p>

            <Button onClick={() => router.push("/contact")} size="lg">
              Start Coaching
            </Button>
          </div>

          <img
            src="/images/coaching-image.jpg"
            className="rounded-2xl"
            alt="Mindset Coaching"
          />
        </section>

        {/* 2. Cleaning Services */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            className="rounded-2xl"
            alt="Cleaning Services"
          />

          <div>
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-8 h-8 text-[#3FA3A3]" />
              <h3 className="text-3xl font-bold">
                Premium Cleaning Services
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              <strong>Primary Revenue Stream.</strong> Professional, reliable, and discreet cleaning
              services delivered with excellence and consistency.
            </p>

            <ul className="space-y-3 mb-6">
              <li>• Residential cleaning</li>
              <li>• Move-in / move-out cleaning</li>
              <li>• Office & small business cleaning</li>
              <li>• Deep & seasonal cleaning</li>
            </ul>

            <p className="text-sm text-muted-foreground mb-6">
              <strong>Community Impact Initiative (Non-Revenue):</strong><br />
              Free residential cleaning services for elderly individuals living alone
              and lacking support — strengthening trust, dignity, and community alignment.
            </p>

            <Button onClick={() => router.push("/contact")} size="lg">
              Book Cleaning
            </Button>
          </div>
        </section>

        {/* 3. Events & Empowerment */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-8 h-8 text-[#F5A623]" />
              <h3 className="text-3xl font-bold">
                Events & Empowerment Programs
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Faith-aligned gatherings and leadership experiences designed
              to equip, connect, and inspire communities.
            </p>

            <ul className="space-y-3 mb-6">
              <li>• Community workshops</li>
              <li>• Leadership & mindset events</li>
              <li>• Faith-aligned empowerment sessions</li>
            </ul>

            <p className="text-sm text-muted-foreground mb-8">
              
              Women conferences • Retreats • Youth conferences
            </p>

            <Button onClick={() => router.push("/contact")} size="lg">
              Join Our Events
            </Button>
          </div>

          <video
  src="/videos/event.mp4"
  controls
  className=" w-full rounded-2xl"
/>

        </section>

      </div>

      <Footer />
    </main>
  );
};

export default Services;
