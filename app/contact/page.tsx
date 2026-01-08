import Footer from "@/components/custom/common/footer";
import Navigation from "@/components/custom/common/navigation";
import ContactForm from "@/components/custom/contact/form";
import Hero from "@/components/custom/contact/hero";
import { Linkedin, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info & Context */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Whether you have questions about the ROOTS Framework,<br />
                  are seeking professional support to organize and clean your space,<br />
                  wish to book a coaching session,<br />
                  or simply want to connect and say hello<br />
                  we would be pleased to hear from you.
                </p>

                <p>
                  At our core, we value clarity, order, and intentional engagement.
                </p>

                <div>
                  <p className="mb-2">Every inquiry is an opportunity to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Serve with excellence</li>
                    <li>Respond with care</li>
                    <li>Create alignment.</li>
                  </ul>
                </div>

                <p>
                  We welcome the conversation<br />
                  and look forward to engaging with you<br />
                  in a meaningful and purposeful way.
                </p>

                <p>
                  Please reach out at your convenience.
                </p>

                <p>
                  We are ready to support your next step.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3FA3A3]/10 rounded-lg flex items-center justify-center text-[#3FA3A3] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a href="mailto:hello@womanofdifference.com" className="text-gray-600 hover:text-[#3FA3A3] transition-colors">
                    info@womanofdifferencegroup.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center text-[#F5A623] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">310 3rd Street, Farmington, 55025 MN.USA</p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/meshagrace12345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/p/181LGvcv8F/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com/@womanofdifference?si=wgYPdXSFyWCwbamF" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <ContactForm />
          </div>

        </div>
      </main>
      <Footer/>
    </>
  );
}