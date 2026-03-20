"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success("Thank you for reaching out. We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  return (
    <section id="contact" className="py-24 bg-[#F3EDE7]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
              Ready to Move Forward With <br />
              <span className="text-[#3FA3A3]">Clarity, Structure, and Purpose?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Take the next step toward transformation, excellence, and sustainable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-card"
                  />
                </div>
                <div>
                  <select
                    title="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-card text-foreground"
                  >
                    <option value="">Select a Service</option>
                    <option value="coaching">Mindset Transformation Coaching</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="events">Events & Empowerment</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <span className="sr-only">Message</span>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your goals and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#F5A623] hover:bg-[#F5A623]/90 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-glow"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div className="space-y-8 ">
              <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground text-sm break-all">info@womanofdifferencegroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3FA3A3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">+1 (347) 987-9304</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground text-sm">310 3rd Street, Farmington, 55025 MN.USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-tr from-[#3FA3A3] to-[#F5A623] p-6 md:p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: closed</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>


            </div>
          </div>
          <div className="text-center mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              size="lg"
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-black uppercase tracking-tight shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => router.push("/contact")}
            >
              Book Memory to Speak
            </Button>
            <Button
              size="lg"
              className="bg-[#3FA3A3] hover:bg-[#3FA3A3]/90 text-white font-black uppercase tracking-tight shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => router.push("/contact")}
            >
              Book Cleaning Services
            </Button>
            <Button
              size="lg"
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-black uppercase tracking-tight shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => router.push("/contact")}
            >
              Apply for Coaching
            </Button>
            <Button
              size="lg"
              className="bg-[#3FA3A3] hover:bg-[#3FA3A3]/90 text-white font-black uppercase tracking-tight shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => router.push("/contact")}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
