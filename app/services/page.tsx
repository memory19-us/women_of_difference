"use client";

import { Brain, Sparkles, Mic, BarChart, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/custom/services/hero";
import Navigation from "@/components/custom/common/navigation";
import Footer from "@/components/custom/common/footer";
import { useRouter } from "next/navigation";
import { ReviewSection } from "@/components/custom/reviews/review-section";

const Services = () => {
  const router = useRouter();

  return (
    <main className="bg-white">
      <Navigation />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-sm font-bold tracking-widest text-[#F5A623] uppercase mb-4">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
            How We Work With You
          </h3>
          <div className="h-2 w-24 bg-[#3FA3A3] mx-auto rounded-full mb-12"></div>
          <p className="text-xl text-slate-600 font-medium">
            Building people, establishing structure, and creating lasting impact through
            excellence and intentionality.
          </p>
        </div>

        <div className="space-y-40">
          {/* 1. R.O.O.T.E.D Transformation Program */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#3FA3A3]/20 to-[#F5A623]/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="R.O.O.T.E.D Transformation"
                className="relative rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F3EDE7] rounded-full text-[#F5A623] font-bold text-sm">
                <Brain className="w-4 h-4" />
                <span>SERVICE 01</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                R.O.O.T.E.D <br />
                <span className="text-[#F5A623]">Transformation</span> Program
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                "A structured personal and leadership development experience designed to help you heal, grow, and lead with clarity."
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our flagship program focuses on identity, mindset, and leadership capacity, guiding you through a journey of self-discovery and empowerment. Each stage—Restoration, Ownership, Order, Transformation, Empowerment, and Deployment—is meticulously designed to produce lasting results.
              </p>
              <Button onClick={() => router.push("/contact")} size="lg" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white rounded-full px-8 h-14 font-bold shadow-xl shadow-[#F5A623]/20">
                Learn More About ROOTED
              </Button>
            </div>
          </section>

          {/* 2. Mindset Transformation Coaching (Featured Section) */}
          <section className="bg-slate-950 text-white rounded-[4rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5A623]/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3FA3A3]/10 blur-[150px] rounded-full"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-[#F5A623] font-bold text-sm backdrop-blur-md border border-white/10">
                  <BarChart className="w-4 h-4" />
                  <span>PREMIUM COACHING</span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                    Stop Feeling Stuck. <br />
                    <span className="text-[#F5A623]">Start Moving</span> With Clarity.
                  </h3>
                  <p className="text-2xl font-bold text-white/90">
                    You do not need more information. <br />
                    <span className="text-[#3FA3A3]">You need clarity, structure, and decisive next steps.</span>
                  </p>
                </div>

                <p className="text-xl text-white/70 leading-relaxed">
                  This coaching experience is designed to help you break through confusion,
                  gain direction, and move forward with purpose.
                </p>

                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <h4 className="text-2xl font-black mb-2">Clarity & Breakthrough Session</h4>
                  <p className="text-[#3FA3A3] text-xl font-bold mb-6 italic">Investment: $150–$300</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Clarify where you are and what needs to change",
                      "Identify what is holding you back",
                      "Develop clear, actionable next steps",
                      "Build structure for sustainable growth"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                        <span className="text-white/80 text-sm leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black tracking-[0.3em] text-[#F5A623] uppercase">WHY THIS MATTERS</h4>
                  <div className="space-y-4">
                    <p className="text-lg text-white/80 leading-relaxed">
                      Most people do not stay stuck because they lack potential. They stay stuck because they lack <span className="text-white font-bold">clarity and direction.</span>
                    </p>
                    <p className="text-lg text-white/80 leading-relaxed">
                      Without structure, even the most capable individuals remain in cycles. This session helps you move forward with confidence, intention, and a clear plan.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-black tracking-[0.3em] text-[#3FA3A3] uppercase">WHAT YOU CAN EXPECT</h4>
                  <ul className="space-y-4">
                    {[
                      "A structured, focused coaching conversation.",
                      "Direct, honest insight into your situation.",
                      "Practical strategies you can apply immediately.",
                      "Clear next steps tailored to your growth."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/70">
                        <div className="w-1.5 h-1.5 bg-[#3FA3A3] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => router.push("/contact")}
                  size="lg"
                  className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-white rounded-2xl h-16 text-xl font-bold shadow-2xl shadow-[#F5A623]/20 transition-all hover:scale-[1.02]"
                >
                  Book Your Session
                </Button>
              </div>
            </div>
          </section>

          {/* 3. Speaking & Engagements */}
          <section className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FDF6E9] rounded-full text-[#F5A623] font-bold text-sm">
                <Mic className="w-4 h-4" />
                <span>SERVICE 03</span>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Speaking & <br />
                  <span className="text-[#F5A623]">Engagements</span>
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Memory Grace Hector delivers transformational speaking experiences that equip individuals and organizations to lead with clarity, discipline, and purpose.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-[#3FA3A3] pl-6 py-2 bg-slate-50">
                  "Identity before influence. Character before visibility. Structure before scale. Discipline before success."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-black text-slate-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F5A623] rounded-full"></div>
                    Where She Speaks
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li><span className="font-bold text-slate-900">Global Platforms:</span> Youth leadership, faith-based events, & women's summits.</li>
                    <li><span className="font-bold text-slate-900">Institutional:</span> Universities, campus ministries, and student leadership bodies.</li>
                    <li><span className="font-bold text-slate-900">Corporate:</span> Leadership workshops and team culture development.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-slate-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3FA3A3] rounded-full"></div>
                    The Outcomes
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">Move from <span className="font-bold text-slate-900">Confusion → Clarity</span></li>
                    <li className="flex items-center gap-2">Build <span className="font-bold text-slate-900">Identity → Discipline</span></li>
                    <li className="flex items-center gap-2">Grow <span className="font-bold text-slate-900">Influence → Impact</span></li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={() => router.push("/contact")} size="lg" className="bg-[#3FA3A3] hover:bg-[#3FA3A3]/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-[#3FA3A3]/20 w-full md:w-auto">
                  Book Memory for Your Next Event
                </Button>
                <p className="mt-4 text-sm text-slate-500 font-medium">Inquire today to discuss your audience, goals, and engagement needs.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#3FA3A3]/10 to-[#F5A623]/10 rounded-[3rem] blur-2xl opacity-100"></div>
              <img
                src="/images/mems.jpeg"
                alt="Memory Grace Hector Speaking"
                className="relative rounded-[2.5rem] shadow-2xl w-full h-[650px] object-cover hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                <p className="text-slate-900 font-black text-center tracking-tight uppercase">Equipping leaders to build with clarity and purpose.</p>
              </div>
            </div>
          </section>

          {/* 4. Premium Cleaning Services */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200"
                alt="Premium Cleaning"
                className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F3FAF1] rounded-full text-[#3FA3A3] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>SERVICE 04</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Premium <br />
                <span className="text-[#3FA3A3]">Cleaning</span> Services
              </h3>
              <p className="text-xl text-slate-600 font-bold leading-relaxed mb-6">
                Professional residential and commercial cleaning delivered with excellence, reliability, and attention to detail.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe a clean environment is essential for a clear mind. Our team delivers meticulous service to ensure your space reflects your standard of excellence, providing the pristine organization you need to thrive.
              </p>
              <Button onClick={() => router.push("/contact")} size="lg" className="bg-[#3FA3A3] hover:bg-[#3FA3A3]/90 text-white rounded-full px-8 h-14 font-bold shadow-xl shadow-[#3FA3A3]/20">
                Book a Cleaning
              </Button>
            </div>
          </section>

          {/* 5. Community Impact Initiative */}
          <div className="bg-gradient-to-br from-[#F5A623]/10 to-[#3FA3A3]/10 p-12 md:p-20 rounded-[4rem] text-center space-y-8">
            <Heart className="w-16 h-16 text-[#F5A623] mx-auto" />
            <h3 className="text-4xl font-black text-slate-900">Community Impact Initiative</h3>
            <p className="max-w-3xl mx-auto text-xl text-slate-700 font-medium">
              We provide free cleaning services for elderly individuals who live alone and cannot afford support—because leadership must serve.
            </p>
            <p className="max-w-2xl mx-auto text-slate-600">
              Our commitment to leadership extends beyond business. This initiative is our way of serving those who have spent their lives serving others, strengthening trust and dignity in our communities.
            </p>
          </div>

          {/* 6. Events & Empowerment Programs */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E6F4F4] rounded-full text-[#3FA3A3] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>SERVICE 06</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Events & <br />
                <span className="text-[#3FA3A3]">Empowerment</span> Programs
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Faith-aligned gatherings and leadership experiences designed to equip, connect, and inspire communities.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Community workshops",
                  "Leadership & mindset events",
                  "Faith-aligned empowerment sessions",
                  "Women conferences",
                  "Retreats",
                  "Youth conferences"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />
                    <span className="text-slate-900 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => router.push("/contact")} size="lg" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-[#F5A623]/20">
                Inquire for Your Next Program
              </Button>
            </div>
            <div className="relative group">
              <img
                src="/images/events.jpeg"
                alt="Empowerment Events"
                className="rounded-[2.5rem] shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
          </section>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-40 flex flex-col md:flex-row items-center justify-center gap-8 bg-slate-50 p-12 rounded-[3rem] border border-slate-200/50">
          <Button
            size="lg"
            className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-[#F5A623]/30 transition-all hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Book a Consultation
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-[#3FA3A3] hover:bg-[#3FA3A3]/10 rounded-full px-12 h-16 text-xl font-bold transition-all"
            onClick={() => router.push("/contact")}
          >
            Ask a Question
          </Button>
        </div>

        {/* Reviews Section */}
        <div className="mt-40 space-y-20">
          <div className="border-t border-slate-100 pt-20">
            <ReviewSection
              itemType="service"
              itemId="cleaning-services"
              title="Cleaning Service Reviews"
            />
          </div>

          <div className="border-t border-slate-100 pt-20">
            <ReviewSection
              itemType="service"
              itemId="mindset-coaching"
              title="Coaching Reviews"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Services;
