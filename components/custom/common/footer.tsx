"use client"

import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const router = useRouter()

  return (
    <footer className="bg-[#102457] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black mb-6 tracking-tight">
              Woman of <span className="text-[#F5A623]">Difference</span> Group LLC
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 font-medium italic">
              We do not simply provide services. We build people, strengthen institutions, and serve communities with structure, excellence, and purpose.
            </p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm font-bold text-[#F5A623] uppercase tracking-widest mb-1">Founder</p>
              <p className="text-lg font-bold text-white">Memory Grace Hector</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <button
                  onClick={() => router.push("/about")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/services")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/ministries")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  Our Ministries
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/resources")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/reviews")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/contact")}
                  className="hover:text-[#F5A623] transition-all hover:translate-x-1"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Connect With Us</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-[#F5A623] uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:info@womanofdifferencegroup.com" className="text-white/80 hover:text-white transition-colors">
                  info@womanofdifferencegroup.com
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-[#F5A623] uppercase tracking-widest mb-3">Social Links</p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/memorygracehector?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-[#F5A623] transition-all group"
                  >
                    <span className="font-bold">LinkedIn:</span>
                    <span className="text-sm truncate">Memory Grace Hector</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/p/184U9SYM88/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-[#F5A623] transition-all group"
                  >
                    <span className="font-bold">Facebook:</span>
                    <span className="text-sm truncate">Woman of Difference</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {currentYear} Woman of Difference Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
