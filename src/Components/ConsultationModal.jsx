import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Send, ArrowRight, ShieldCheck } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    service: "Custom Web Application",
    budget: "$15k - $50k",
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const services = [
    "Custom Web Application",
    "Cloud Architecture & DevOps",
    "AI Agents & Automation",
    "Mobile & Cross-Platform",
    "Security & Infrastructure Audit",
    "UI/UX Product Design",
  ];

  const budgets = ["<$10k", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Initiate Project Consultation</h3>
              <p className="text-xs text-slate-500">CodeCrafters LLC • Hillsborough, NJ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Area of Focus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`text-left text-xs font-medium px-3 py-2.5 rounded-lg border transition-all ${
                        formData.service === s
                          ? "bg-blue-50 border-blue-500 text-blue-700 font-semibold shadow-sm"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Anticipated Budget Scope
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        formData.budget === b
                          ? "bg-blue-600 border-blue-600 text-white font-semibold"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Brief Overview / Goals</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the product or infrastructure challenge you are tackling..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-[11px] text-slate-500 space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA • Same-day Response</span>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Consultation Request</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Inquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. An engineering partner at CodeCrafters LLC will review your {formData.service} project requirements and follow up within 4 business hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                >
                  Close &amp; Return to Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
