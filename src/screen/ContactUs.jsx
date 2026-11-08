import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp 
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
    }, 600);
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
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. CONTACT HERO TILE (Pure Black) */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32 text-center px-4 sm:px-6 bg-black">
        <div className="max-w-[1024px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            Direct Access to Engineering Partners
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.07] tracking-[-0.28px] max-w-3xl mx-auto mb-4">
            Let's Architect Your Next System.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-white/80 font-normal leading-[1.2] max-w-2xl mx-auto">
            Headquartered at 436 Brookside Ln in Hillsborough, New Jersey.
          </p>
        </div>
      </section>

      {/* 2. MAIN TWO-COLUMN CONTACT SECTION (Deep Obsidian) */}
      <section className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Office & Location Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
                  Headquarters
                </span>
                <h2 className="text-[24px] font-semibold text-white">
                  CodeCrafters LLC
                </h2>
                <p className="text-[14px] text-[#a1a1a6] mt-0.5">
                  Engineering Studio • Somerset County, New Jersey
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3">
                <div className="apple-utility-card flex items-start space-x-3.5 !p-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#1c1d22] flex items-center justify-center text-[#2997ff] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase text-[#86868b]">Studio Address</h4>
                    <p className="text-[14px] font-semibold text-white mt-0.5">
                      436 Brookside Ln
                    </p>
                    <p className="text-[13px] text-[#a1a1a6]">
                      Hillsborough, NJ 08844, United States
                    </p>
                  </div>
                </div>

                <div className="apple-utility-card flex items-start space-x-3.5 !p-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#1c1d22] flex items-center justify-center text-[#2997ff] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase text-[#86868b]">Official Inquiries</h4>
                    <a
                      href="mailto:contact@codecraftersllc.com"
                      className="text-[14px] font-semibold text-[#2997ff] hover:underline mt-0.5 block"
                    >
                      contact@codecraftersllc.com
                    </a>
                    <p className="text-[12px] text-[#86868b]">
                      Reviewed within 2-4 hours by senior architects
                    </p>
                  </div>
                </div>

                <div className="apple-utility-card flex items-start space-x-3.5 !p-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#1c1d22] flex items-center justify-center text-[#2997ff] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase text-[#86868b]">Direct Studio Line</h4>
                    <a
                      href="tel:+19085550192"
                      className="text-[14px] font-semibold text-white hover:text-[#2997ff] mt-0.5 block"
                    >
                      +1 (908) 555-0192
                    </a>
                    <p className="text-[12px] text-[#86868b]">
                      Mon - Fri, 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-[18px] overflow-hidden border border-[#26272b]">
                <iframe
                  title="CodeCrafters LLC Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.229155004915!2d-74.6358745!3d40.5144258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ea4c0caed905%3A0x2e32209e21f9cac!2s436%20Brookside%20Ln%2C%20Hillsborough%20Township%2C%20NJ%2008844%2C%20USA!5e0!3m2!1sen!2sin!4v1715426680733!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Project Intake Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#121316] rounded-[18px] border border-[#26272b] p-8 sm:p-10 apple-product-shadow">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-[#2997ff] block mb-1">
                        Project Initiation
                      </span>
                      <h3 className="text-[21px] font-semibold text-white">
                        Tell Us About Your System Requirements
                      </h3>
                      <p className="text-[13px] text-[#86868b] mt-0.5">
                        Protected under mutual non-disclosure agreement (NDA).
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah Connor"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Technologies Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                          Focus Area
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white"
                        >
                          <option>Custom Web Application</option>
                          <option>Cloud Infrastructure &amp; DevOps</option>
                          <option>Enterprise AI &amp; Agents</option>
                          <option>Mobile iOS &amp; Android</option>
                          <option>Security &amp; Hardened Audits</option>
                          <option>Design Systems &amp; UI</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                          Target Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white"
                        >
                          <option>&lt;$25k</option>
                          <option>$25k - $50k</option>
                          <option>$50k - $100k</option>
                          <option>$100k - $250k</option>
                          <option>$250k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] mb-1">
                        System Overview / Architecture Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your current tech stack, scale expectations, and timeline requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 text-[14px] bg-[#18191d] border border-[#26272b] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-white placeholder-[#55565d]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="apple-btn-primary w-full"
                      >
                        {loading ? "Transmitting Requirements..." : "Submit Discovery Request"}
                      </button>
                    </div>

                    <div className="flex items-center justify-center space-x-1.5 text-[12px] text-[#86868b]">
                      <ShieldCheck className="w-4 h-4 text-[#2997ff]" />
                      <span>Strict 100% confidentiality guaranteed under NDA.</span>
                    </div>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#18191d] border border-[#26272b] flex items-center justify-center mx-auto text-[#2997ff]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-[24px] font-semibold text-white">
                      Discovery Request Transmitted
                    </h3>
                    <p className="text-[14px] text-[#a1a1a6] max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our lead architectural team in Hillsborough, NJ will review your specifications and schedule a discovery video call within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="apple-btn-secondary"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCORDION FAQS */}
      <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[768px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
              Everything You Need to Know.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#121316] rounded-[14px] border border-[#26272b] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-white">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#2997ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#86868b] shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[14px] text-[#a1a1a6] leading-relaxed border-t border-[#26272b] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
