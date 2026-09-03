import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  Building2 
} from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Web Application",
    budget: "$25k - $50k",
    timeline: "1 - 3 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const faqs = [
    {
      q: "How quickly can a CodeCrafters engineering squad initiate work?",
      a: "Our standard onboarding window is 5 to 10 business days following architectural alignment and agreement execution. We assign dedicated US-based lead architects immediately to begin technical discovery and backlog refinement.",
    },
    {
      q: "Who owns the code, documentation, and intellectual property?",
      a: "You retain 100% full intellectual property ownership. All source code, design assets, Dockerfiles, Terraform scripts, and CI/CD pipelines are transferred directly to your organization's private repositories with zero vendor lock-in.",
    },
    {
      q: "Do you sign a mutual Non-Disclosure Agreement (NDA) before discovery?",
      a: "Yes, absolutely. We enforce strict enterprise-grade confidentiality. We are happy to execute our standard two-way NDA or review your corporate agreement prior to discussing proprietary architecture or datasets.",
    },
    {
      q: "Can CodeCrafters provide ongoing SLA support post-deployment?",
      a: "Yes. In addition to project-based rollouts, we provide 24/7 mission-critical infrastructure monitoring, automated security patching, and tiered support SLAs (up to 99.999% uptime guarantees) to keep your platform resilient.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER HERO */}
      <section className="pt-16 pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Access to Engineering Partners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Let's Architect Your <span className="text-gradient-blue">Next System</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out directly to our engineering partners at our Hillsborough, NJ headquarters. Every inquiry is reviewed with strict confidentiality and same-day response times.
          </p>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTACT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: OFFICE & LOCATION */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Headquarters
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                CodeCrafters LLC
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Engineering Studio • Somerset County, New Jersey
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters Address</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    436 Brookside Ln
                  </p>
                  <p className="text-xs text-slate-600">
                    Hillsborough, NJ 08844, USA
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Inquiries</h4>
                  <a
                    href="mailto:contact@codecraftersllc.com"
                    className="text-sm font-semibold text-blue-600 hover:underline mt-0.5 block"
                  >
                    contact@codecraftersllc.com
                  </a>
                  <p className="text-xs text-slate-500">
                    Typically answered within 2-4 hours
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone</h4>
                  <a
                    href="tel:+19085550192"
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 mt-0.5 block"
                  >
                    +1 (908) 555-0192
                  </a>
                  <p className="text-xs text-slate-500">
                    Mon - Fri, 8:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map from User Data */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <iframe
                title="CodeCrafters LLC Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.229155004915!2d-74.6358745!3d40.5144258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ea4c0caed905%3A0x2e32209e21f9cac!2s436%20Brookside%20Ln%2C%20Hillsborough%20Township%2C%20NJ%2008844%2C%20USA!5e0!3m2!1sen!2sin!4v1715426680733!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: PROJECT INTAKE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      Project Initiation Form
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Tell Us About Your Objectives
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      All submissions are protected under mutual NDA.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Technologies Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Primary Area of Need
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white"
                    >
                      <option value="Custom Web Application">Custom Web Application / SaaS Platform</option>
                      <option value="Cloud Architecture & DevOps">Cloud Architecture &amp; DevOps (Kubernetes/AWS)</option>
                      <option value="Enterprise AI & RAG">Enterprise AI &amp; Autonomous Reasoning Agents</option>
                      <option value="Mobile App Development">Mobile App Development (iOS &amp; Android)</option>
                      <option value="Security & Compliance Audit">Cybersecurity &amp; SOC2/HIPAA Readiness Audit</option>
                      <option value="Dedicated Engineering Squad">Dedicated Cross-Functional Engineering Squad</option>
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white"
                      >
                        <option value="<$15k">&lt;$15k (Advisory / Fast MVP)</option>
                        <option value="$15k - $30k">$15k - $30k</option>
                        <option value="$30k - $60k">$30k - $60k</option>
                        <option value="$60k - $120k">$60k - $120k</option>
                        <option value="$120k+">$120k+ (Enterprise Infrastructure)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white"
                      >
                        <option value="Immediate (1-2 weeks)">Immediate (1 - 2 weeks)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Flexible / Ongoing">Flexible / Ongoing Roadmapping</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Details &amp; Technical Goals *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Describe what you want to build, current technical bottlenecks, stack preferences, or scale requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center text-xs text-slate-500 space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Strict Mutual NDA Protected</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-500/25 transition-all text-sm flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Project Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A principal engineer at CodeCrafters LLC will review your {formData.service} requirements and reach out within 4 business hours to schedule an architecture discovery session.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Know Before Partnering
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer"
                  >
                    <span className="font-bold text-base text-slate-900">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
