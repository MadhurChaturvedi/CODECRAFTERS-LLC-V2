import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    service: "Custom Web Platform",
    budget: "$25k - $50k",
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const services = [
    "Custom Web Platform",
    "Cloud & DevOps Architecture",
    "Enterprise AI & Agents",
    "Mobile Applications",
    "Security & Infrastructure Audit",
    "Design Systems & UI",
  ];

  const budgets = ["<$15k", "$15k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#121316] text-white rounded-[18px] border border-[#26272b] apple-product-shadow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Apple Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26272b] bg-[#0c0d10]">
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-tight">
              Schedule Architectural Discovery
            </h3>
            <p className="text-[12px] text-[#86868b]">
              CodeCrafters LLC • Hillsborough, NJ Studio
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1e1f24] hover:bg-[#282930] active:scale-95 transition-transform flex items-center justify-center text-white cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[12px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">
                  1. Focus Area
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`text-left text-[12px] px-3 py-2 rounded-[8px] border transition-all active:scale-95 cursor-pointer ${
                        formData.service === s
                          ? "bg-[#0066cc] text-white border-[#0066cc] font-medium"
                          : "border-[#26272b] bg-[#18191d] text-[#cccccc] hover:border-[#383940]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">
                  2. Project Scope &amp; Budget
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`text-[12px] px-3 py-1.5 rounded-full border transition-all active:scale-95 cursor-pointer ${
                        formData.budget === b
                          ? "bg-[#2997ff] text-black font-semibold border-[#2997ff]"
                          : "border-[#26272b] bg-[#18191d] text-[#cccccc] hover:border-[#383940]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                  Technical Goals / Brief Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Outline your tech stack, timeline, or current architectural bottlenecks..."
                  className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="apple-btn-primary w-full !text-[15px] !py-[10px]"
                >
                  {submitting ? "Processing..." : "Schedule Architectural Discovery"}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#86868b]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2997ff]" />
                <span>Strict 100% mutual NDA enforced. Direct senior architect review.</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#18191d] border border-[#26272b] flex items-center justify-center mx-auto text-[#2997ff]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-[20px] font-semibold text-white">
                Discovery Request Received
              </h4>
              <p className="text-[14px] text-[#a1a1a6] max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. A lead architect from our Hillsborough, NJ studio will review your project parameters and respond within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="apple-btn-secondary !text-[14px] !py-[8px] !px-[20px]"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
