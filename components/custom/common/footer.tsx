"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3FA3A3] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Woman of <span className="text-[#F5A623]">Difference</span>
            </h3>
            <p className="text-white/80 leading-relaxed">
              Empowering women through mindset transformation, creating lasting change 
              that transforms lives and communities.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("roots")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  R.O.O.T.S Framework
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-white/80 mb-4">
              Join our community and stay updated on upcoming events and empowerment opportunities.
            </p>
            <p className="text-white/80">info@womanofdifference.com</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Woman of Difference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
