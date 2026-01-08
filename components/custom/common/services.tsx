"use client"
import { Brain, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-[#F5A623]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform every aspect of your life
          </p>
        </div>

        <div className="space-y-24">
          {/* Mindset Transformation Coaching */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Mindset Transformation Coaching</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Transform your thinking patterns and unlock your full potential using our proven 
                R.O.O.T.S FRAMEWORK. Our personalized coaching sessions help you identify limiting 
                beliefs, develop empowering mindsets, and create lasting behavioral change.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">One-on-one personalized coaching sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">R.O.O.T.S FRAMEWORK implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Goal setting and accountability tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Continuous support and guidance</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-[#F5A623] hover:bg-[#F5A623]/90 shadow-glow"
                onClick={scrollToContact}
              >
                Start Your Transformation
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={"/images/coaching-image.jpg"}
                alt="Mindset transformation coaching session"
                className="rounded-2xl shadow-card-hover w-full"
              />
            </div>
          </div>

          {/* Cleaning Services */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200"
                alt="Professional cleaning services"
                className="rounded-2xl shadow-card-hover w-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-teal rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Premium Cleaning Services</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Your environment shapes your mindset. Our professional cleaning services create 
                the pristine, organized space you need to thrive. A clean home is the foundation 
                for a clear mind and productive life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Residential deep cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Regular maintenance cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Eco-friendly products available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Flexible scheduling options</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-[#3FA3A3] hover:bg-[#3FA3A3]/90"
                onClick={scrollToContact}
              >
                Book Cleaning Service
              </Button>
            </div>
          </div>

          {/* Events & Empowerment */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Events & Empowerment</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Connect with like-minded women, share experiences, and grow together. Our events 
                provide inspiration, education, and the community support essential for lasting 
                transformation and personal development.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Monthly empowerment workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Networking and community building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Guest speakers and panel discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] text-xl">✓</span>
                  <span className="text-muted-foreground">Skills development sessions</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-[#F5A623] hover:bg-[#F5A623]/90 shadow-glow"
                onClick={scrollToContact}
              >
                Join Our Events
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={"/images/events-image.jpg"}
                alt="Empowerment events and community gatherings"
                className="rounded-2xl shadow-card-hover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
