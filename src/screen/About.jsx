import React from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Zap, 
  Award, 
  Users, 
  Globe2 
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
      desc: "Through continuous integration, automated staging environments, and rapid two-week agile sprints, we ship production software without delay.",
      icon: Zap,
    },
    {
      title: "Radical Transparency",
      desc: "No middlemen or opaque account managers. You collaborate directly with senior architects who write the code and understand your business goals.",
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
      title: "Cloud & Distributed Systems Expansion",
      desc: "Established our cloud modernization practice, successfully migrating high-frequency fintech and e-commerce platforms to Kubernetes.",
    },
    {
      year: "2023",
      title: "AI & Agentic Systems Practice",
      desc: "Integrated enterprise LLM pipelines, autonomous reasoning agents, and vector search systems into mission-critical client workflows.",
    },
    {
      year: "2024+",
      title: "250+ Scaled Deployments Worldwide",
      desc: "Surpassed 250 production software rollouts, powering over $45M in client transactions with a 99.999% reliability record.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-16 pb-20 bg-slate-50/70 border-b border-slate-200/80 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The CodeCrafters LLC Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Pioneering the Next Standard of{" "}
            <span className="text-gradient-blue">Software Craftsmanship</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Headquartered at 436 Brookside Ln in Hillsborough, New Jersey, CodeCrafters LLC is an elite digital engineering studio dedicated to building high-performance, resilient software for forward-thinking organizations.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all text-sm flex items-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Partner With Us</span>
            </button>
            <Link
              to="/team"
              className="px-6 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all text-sm"
            >
              Meet Our Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION & PHILOSOPHY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Genesis &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We started CodeCrafters to eliminate the frustration of low-quality outsourced software.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Too often, companies hire technology agencies only to receive bloated codebases, missed deadlines, and endless maintenance headaches. We created CodeCrafters LLC to be the antithesis of that broken model.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every system we construct is architected from day one for continuous scale, lightning-fast edge performance, and seamless maintenance. Our US-based engineering team pairs technical mastery with deep commercial understanding.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-extrabold text-blue-600">100%</span>
                <p className="text-xs font-medium text-slate-600 mt-1">Client IP Ownership Guaranteed</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-extrabold text-slate-900">0</span>
                <p className="text-xs font-medium text-slate-600 mt-1">Security Breaches or Data Leaks</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 sm:p-10 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono">
                <Terminal className="w-4 h-4" />
                <span>codecrafters_manifesto.json</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Our Non-Negotiable Engineering Standards
              </h3>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict TypeScript &amp; Comprehensive API Schemas</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>90%+ Automated Unit &amp; Integration Coverage</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-20ms P99 Service Response Threshold</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Trust Infrastructure as Code (Terraform)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span>Certified SOC2 Ready</span>
                <span>HIPAA Aligned</span>
                <span>ISO/IEC 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Values That Direct Every Line of Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Evolution &amp; Milestones
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Journey of Continuous Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 bg-white relative shadow-sm hover:border-blue-400 transition-all"
            >
              <span className="text-2xl font-extrabold text-blue-600 font-mono block mb-2">
                {m.year}
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {m.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HEADQUARTERS & CONTACT BANNER */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Headquartered in Hillsborough, NJ</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">
                Work Directly With Experienced US Engineers
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you need a dedicated development squad to build your platform from scratch or require an elite team to rescue a stalled initiative, CodeCrafters LLC is ready.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all text-sm cursor-pointer"
              >
                Schedule Consultation
              </button>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm"
              >
                Contact Hillsborough Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
