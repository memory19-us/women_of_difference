"use client"
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Ministries", path: "/ministries" },
    { label: "Resources", path: "/resources" },
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
  ];

  const externalLinks = [
    { label: "Events", path: "https://luma.com/8l6vu9fw" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-500",
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-xl md:text-2xl font-black tracking-tighter transition-all duration-300 flex items-center gap-2",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            {/* <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-[#3FA3A3] to-[#F5A623] flex items-center justify-center text-white text-sm">
                W
            </div> */}
            <span>
              Woman of <span className="text-[#F5A623]">Difference</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-all relative group",
                  isScrolled
                    ? "text-slate-600 hover:text-[#3FA3A3]"
                    : "text-white/80 hover:text-white",
                  pathname === link.path && (isScrolled ? "text-[#3FA3A3]" : "text-white")
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-4 right-4 h-0.5 bg-current transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                  pathname === link.path && "scale-x-100"
                )} />
              </Link>
            ))}

            {externalLinks.map((link) => (
              <a
                href={link.path}
                key={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-all",
                  isScrolled ? "text-slate-600 hover:text-[#3FA3A3]" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}

            <div className="ml-4 pl-4 border-l border-white/20 h-8 flex items-center">
              <Button
                onClick={() => router.push("/contact")}
                size="sm"
                className={cn(
                  "rounded-full px-6 font-bold transition-all",
                  isScrolled
                    ? "bg-[#3FA3A3] hover:bg-[#3FA3A3]/90 text-white shadow-lg shadow-[#3FA3A3]/20"
                    : "bg-white text-[#3FA3A3] hover:bg-white/90"
                )}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              isScrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 top-[72px] bg-slate-900/95 backdrop-blur-2xl transition-all duration-500 lg:hidden overflow-y-auto z-[90]",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}>
          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-[#3FA3A3] text-xs font-black tracking-widest uppercase">Navigation</p>
              <div className="grid gap-2">
                {[...navLinks, ...externalLinks].map((link) => (
                  <Link
                    href={link.path}
                    key={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-black transition-colors flex items-center justify-between group",
                      pathname === link.path ? "text-[#F5A623]" : "text-white hover:text-[#F5A623]"
                    )}
                  >
                    {link.label}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="space-y-4">
                <p className="text-[#F5A623] text-xs font-black tracking-widest uppercase">Get Started</p>
                <Button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#3FA3A3] text-white rounded-2xl h-16 text-xl font-bold shadow-2xl flex items-center justify-center gap-3"
                >
                  Contact Us
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  "Building people, establishing structure, and creating lasting impact through excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
