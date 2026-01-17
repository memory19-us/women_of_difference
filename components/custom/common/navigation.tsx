"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { label: "Home", id: "home" , path:"/"},
    { label: "About", id: "about", path:"/about" },
    { label: "Services", id: "services", path:"/services" },
    { label: "Our Ministries", id: "roots", path:"/ministries" },
    { label: "Resources", id: "roots", path:"/resources" },
    { label: "FAQ", id: "roots", path:"/faq" },
    { label: "Events", id: "events", path:"https://luma.com/8l6vu9fw" },
        { label: "Contact", id: "contact", path:"/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-8  ${
        isScrolled ? "bg-white/30 backdrop-blur-sm shadow-md  rounded-b-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-[#3FA3A3]" : "text-white"
            }`}
          >
            Woman of <span className="text-[#F5A623]">Difference</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
              href={link.path}
                key={link.path}
                // onClick={() => router.push(link.path)}
                className={`transition-colors hover:text-[#F5A623] ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => router.push(link.path)}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
