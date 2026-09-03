import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles, Code2, PhoneCall } from "lucide-react";

const Nav = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "News & Insights", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-slate-200/90 py-3"
          : "bg-white/85 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center space-x-3 text-slate-900 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">
                  CODECRAFTERS
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60 uppercase">
                  LLC
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                Software Engineering &amp; Cloud
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                    active
                      ? "text-blue-600 bg-blue-50/70 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-slate-400" />
              <span>Talk to an Engineer</span>
            </Link>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-md shadow-blue-500/25 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-blue-200" />
              <span>Start a Project</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl animate-fadeIn px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                closeMenu();
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Start a Project</span>
            </button>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition-all"
            >
              Contact Hillsborough Office (NJ)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
