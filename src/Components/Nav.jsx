import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Code2 } from "lucide-react";

const Nav = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "News & Insights", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const getSubNavTitle = () => {
    switch (location.pathname) {
      case "/services":
        return "Services & Capabilities";
      case "/about":
        return "About CodeCrafters";
      case "/team":
        return "Leadership & Team";
      case "/news":
        return "News & Technical Insights";
      case "/contact":
        return "Contact Studio";
      default:
        return "CodeCrafters LLC";
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full select-none bg-black">
      {/* 1. Apple Global Nav (44px, pure black #000000, 12px text) */}
      <div className="bg-[#000000] text-white h-[44px] flex items-center border-b border-white/10 px-4 sm:px-6">
        <div className="max-w-[1024px] w-full mx-auto flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-opacity active:scale-95"
            aria-label="CodeCrafters LLC Home"
          >
            <div className="w-5 h-5 rounded-sm bg-white/15 flex items-center justify-center text-white">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-[12px] font-semibold tracking-[-0.12px]">
              CodeCrafters
            </span>
          </Link>

          {/* Desktop Global Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[12px] leading-none tracking-[-0.12px] transition-colors duration-150 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-[#86868b] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center text-[12px] text-[#2997ff] hover:text-white transition-colors cursor-pointer"
              title="Quick Consultation"
            >
              Consultation
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/90 hover:text-white p-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Apple Frosted Dark Sub-Nav (52px, frosted black with blur) */}
      <div className="apple-frosted-nav h-[52px] flex items-center px-4 sm:px-6">
        <div className="max-w-[1024px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-baseline space-x-3">
            <Link
              to={location.pathname}
              className="text-[21px] font-semibold text-white tracking-[0.231px] hover:opacity-85 transition-opacity"
            >
              {getSubNavTitle()}
            </Link>
            <span className="hidden lg:inline text-[12px] text-[#86868b]">
              Hillsborough, NJ
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Context Sublinks */}
            <div className="hidden lg:flex items-center space-x-5 text-[14px] text-[#a1a1a6]">
              <Link to="/services" className="hover:text-white transition-colors">
                Capabilities
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Story
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>

            {/* Apple Primary Action Blue Pill CTA */}
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary !text-[12px] !py-[4px] !px-[14px] font-normal leading-normal cursor-pointer"
            >
              <span>Schedule Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[96px] bottom-0 bg-[#000000]/95 backdrop-blur-2xl text-white p-6 z-50 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/10 text-[18px] text-white hover:text-[#2997ff]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </Link>
            ))}
            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full apple-btn-primary text-center justify-center !py-3"
              >
                Schedule Engineering Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
