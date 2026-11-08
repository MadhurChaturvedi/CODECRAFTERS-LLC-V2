import React from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Users 
} from "lucide-react";

function About({ onOpenConsultation }) {
  const values = [
    {
      title: "Radical Craftsmanship",
      desc: "We write clean, strictly typed, self-documenting code backed by exhaustive test suites. Good enough is never our finish line.",
      icon: Code2,
    },
    {
      title: "Zero Technical Debt",
      desc: "We never take architectural shortcuts that cost 10x to rewrite later. We architect modular, decoupled systems engineered to scale.",
      icon: ShieldCheck,
    },
    {
      title: "Velocity by Design",
      desc: "Through continuous integration, automated preview environments, and rapid 14-day agile sprints, we ship production software without delay.",
      icon: Zap,
    },
    {
      title: "Direct Engineering Access",
      desc: "No non-technical account managers. You collaborate directly with senior architects who write code and understand your business goals.",
      icon: Users,
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founded in Hillsborough, NJ",
      desc: "CodeCrafters LLC was formed with a mission to deliver Silicon-Valley caliber engineering to ambitious businesses and enterprises.",
    },
    {
      year: "2022",
      title: "Cloud & Distributed Systems Practice",
      desc: "Established our cloud modernization practice, successfully migrating high-frequency fintech and e-commerce platforms to Kubernetes.",
    },
    {
      year: "2023",
      title: "Enterprise AI & Autonomous Agents",
      desc: "Integrated enterprise LLM pipelines, autonomous reasoning agents, and vector search systems into mission-critical client workflows.",
    },
    {
      year: "2024+",
      title: "250+ Production Deployments Worldwide",
      desc: "Surpassed 250 production software rollouts, powering over $45M in client transactions with an unbroken 99.999% reliability record.",
    },
  ];

  return (
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. HERO TILE (Pure Black) */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32 text-center px-4 sm:px-6 bg-black">
        <div className="max-w-[1024px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            The CodeCrafters Story
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.07] tracking-[-0.28px] max-w-3xl mx-auto mb-4">
            Pioneering the Next Standard of Software Craftsmanship.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-white/80 font-normal leading-[1.2] max-w-2xl mx-auto mb-8">
            Headquartered at 436 Brookside Ln in Hillsborough, New Jersey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary"
            >
              Partner With Us
            </button>
            <Link
              to="/team"
              className="apple-btn-secondary"
            >
              Meet Technical Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MISSION & MANIFESTO */}
      <section className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
                Genesis &amp; Mission
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-4">
                We eliminate the frustration of low-quality outsourced software.
              </h2>
              <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mb-6">
                Too often, organizations hire technology agencies only to receive bloated codebases, fragile architectures, and missed deadlines. We created CodeCrafters LLC to be the antithesis of that broken agency model.
              </p>
              <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mb-8">
                Every system we build is architected from day one for continuous scale, sub-millisecond edge latency, and seamless maintenance. Our Hillsborough squad pairs technical mastery with commercial discipline.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-[11px] bg-[#121316] border border-[#26272b]">
                  <span className="text-[28px] font-semibold text-[#2997ff] block">100%</span>
                  <span className="text-[13px] text-[#86868b]">Client IP Ownership Guaranteed</span>
                </div>
                <div className="p-4 rounded-[11px] bg-[#121316] border border-[#26272b]">
                  <span className="text-[28px] font-semibold text-white block">0</span>
                  <span className="text-[13px] text-[#86868b]">Security Breaches in Production</span>
                </div>
              </div>
            </div>

            {/* Right: Engineering Manifesto Card */}
            <div className="rounded-[18px] bg-[#121316] text-white p-8 sm:p-10 border border-[#26272b] apple-product-shadow">
              <div className="flex items-center space-x-2 text-[12px] font-mono text-[#2997ff] mb-4">
                <Terminal className="w-4 h-4" />
                <span>codecrafters_manifesto.json</span>
              </div>

              <h3 className="text-[22px] font-semibold text-white leading-snug mb-4">
                Non-Negotiable Engineering Standards
              </h3>

              <div className="space-y-3 font-mono text-[13px] text-[#cccccc] mb-6">
                <div className="p-3 rounded-[8px] bg-black border border-[#26272b] flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#27c93f] shrink-0" />
                  <span>Strict TypeScript &amp; Comprehensive API Schemas</span>
                </div>
                <div className="p-3 rounded-[8px] bg-black border border-[#26272b] flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#27c93f] shrink-0" />
                  <span>90%+ Automated Unit &amp; Integration Test Suites</span>
                </div>
                <div className="p-3 rounded-[8px] bg-black border border-[#26272b] flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#27c93f] shrink-0" />
                  <span>Sub-20ms P99 Service Response Threshold</span>
                </div>
                <div className="p-3 rounded-[8px] bg-black border border-[#26272b] flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#27c93f] shrink-0" />
                  <span>Zero-Trust Infrastructure as Code (Terraform)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#26272b] flex items-center justify-between text-[12px] text-[#86868b]">
                <span>SOC2 Type II Aligned</span>
                <span>HIPAA Ready</span>
                <span>Zero Lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              Foundational Values
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
              The Principles That Guide Every Line of Code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="apple-utility-card"
                >
                  <div className="w-10 h-10 rounded-[11px] bg-[#1e1f24] flex items-center justify-center text-[#2997ff] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-[14px] text-[#a1a1a6] leading-[1.43]">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MILESTONES */}
      <section className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-2">
              Chronology
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
              Our Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="rounded-[18px] bg-[#121316] border border-[#26272b] p-6 text-left"
              >
                <span className="text-[28px] font-semibold text-[#2997ff] block mb-2">
                  {m.year}
                </span>
                <h4 className="text-[17px] font-semibold text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-[13px] text-[#a1a1a6] leading-[1.43]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVITATION */}
      <section className="bg-black py-20 text-center px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-white mb-3">
            Build With Our Senior Engineering Squad.
          </h2>
          <p className="text-[17px] text-[#a1a1a6] mb-6">
            Schedule an architectural alignment session directly with our lead partners.
          </p>
          <button
            onClick={onOpenConsultation}
            className="apple-btn-primary"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
