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
    <div className="flex flex-col min-h-screen bg-black text-[#f5f5f7] font-sans antialiased selection:bg-[#0066cc] selection:text-white">
      <ScrollToTop />

      {/* Global Apple Navigation */}
      <Nav onOpenConsultation={handleOpenConsultation} />

      {/* Main Routed Content */}
      <main className="flex-grow bg-black">
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

      {/* Floating Apple-Style Quick Action Capsule */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleOpenConsultation}
          className="group flex items-center space-x-2 px-4 py-2.5 bg-[#141518]/90 hover:bg-[#0066cc] text-white rounded-full backdrop-blur-md transition-all duration-200 active:scale-95 border border-white/20 shadow-2xl cursor-pointer"
          aria-label="Start a Project Consultation"
        >
          <MessageSquarePlus className="w-4 h-4 text-[#2997ff] group-hover:text-white transition-colors" />
          <span className="text-[12px] font-normal tracking-[-0.12px]">Schedule Call</span>
        </button>
      </div>
    </div>
  );
}

export default App;
