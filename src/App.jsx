import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Hero from "./screen/Hero";
import About from "./screen/About";
import Services from "./screen/Services";
import News from "./screen/News";
import TeamPage from "./screen/TeamPage";
import ContactUs from "./screen/ContactUs";
import ScrollToTop from "./Components/ScrollToTop";
import ConsultationModal from "./Components/ConsultationModal";
import { MessageSquarePlus } from "lucide-react";

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <ScrollToTop />

      {/* Global Navigation */}
      <Nav onOpenConsultation={handleOpenConsultation} />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services" element={<Services onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/news" element={<News onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/team" element={<TeamPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/contact" element={<ContactUs onOpenConsultation={handleOpenConsultation} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Hero onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      {/* Global Enterprise Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Floating Quick Consultation Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleOpenConsultation}
          className="group flex items-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 active:scale-95 border border-slate-700/60 cursor-pointer"
          aria-label="Start a Project Consultation"
        >
          <MessageSquarePlus className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
          <span className="text-xs font-bold tracking-wide">Quick Consultation</span>
        </button>
      </div>
    </div>
  );
}

export default App;
