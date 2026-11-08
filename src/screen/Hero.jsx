import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Code2, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2
} from "lucide-react";
import Client from "../Components/Client";
import TestimonialSlider from "../Components/TestimonialSlider";
import ScrollFrameHero from "../Components/ScrollFrameHero";

function Hero({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState("telemetry");

  const capabilities = [
    {
      title: "Custom Web & Enterprise Platforms",
      desc: "High-throughput React, Next.js, and Node/Python architectures built with modular micro-frontends and sub-millisecond edge response.",
      icon: Code2,
      tag: "Full-Stack Platforms",
      features: ["React 18 & Next.js", "GraphQL & REST Gateways", "Zero-Latency Caching"],
      path: "/services",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Multi-region AWS, GCP, and Azure environments orchestrated with automated Terraform, Docker containers, and zero-downtime Kubernetes CI/CD.",
      icon: Cloud,
      tag: "Cloud-Native",
      features: ["Kubernetes (EKS/GKE)", "Terraform IaC", "99.999% SLA Uptime"],
      path: "/services",
    },
    {
      title: "Enterprise AI & Autonomous Agents",
      desc: "Production-ready LLM pipelines, autonomous reasoning agents, vector embeddings, and RAG architectures integrated with proprietary datasets.",
      icon: Cpu,
      tag: "Artificial Intelligence",
      features: ["Custom RAG Workflows", "Vector Search & Retrieval", "Hallucination Guards"],
      path: "/services",
    },
    {
      title: "Mobile & Cross-Platform Suites",
      desc: "Sleek iOS and Android applications crafted with React Native and native Swift/Kotlin for silky-smooth 60fps mobile customer journeys.",
      icon: Smartphone,
      tag: "Mobile Apps",
      features: ["Offline-First Sync", "Native Performance", "Secure Push Hub"],
      path: "/services",
    },
    {
      title: "Design Systems & UI Engineering",
      desc: "Pixel-perfect, accessible user interfaces built on cohesive Figma tokens that turn complex technical workflows into intuitive simplicity.",
      icon: Palette,
      tag: "Design Systems",
      features: ["Design System Tokens", "WCAG 2.1 AA Compliance", "Interactive Prototypes"],
      path: "/services",
    },
    {
      title: "Cybersecurity & Hardened Audits",
      desc: "Rigorous penetration testing, SOC2 preparation, IAM privilege hardening, and encrypted zero-trust data protection.",
      icon: ShieldCheck,
      tag: "Hardened Security",
      features: ["SOC2 & HIPAA Compliance", "Vulnerability Scanning", "Zero-Trust Access"],
      path: "/services",
    },
  ];

  const caseStudies = [
    {
      title: "Fintech Core Clearing & Ledger Pipeline",
      client: "AuraPay Global",
      category: "Fintech Infrastructure",
      desc: "Re-engineered a high-frequency payment reconciliation system handling 14M daily transactions with sub-20ms SLA.",
      metrics: "96% Latency Reduction",
      impact: "$1.2B Annual GMV Processed",
      tags: ["Go", "Kafka", "PostgreSQL", "AWS"],
    },
    {
      title: "Clinical AI Diagnostics Platform",
      client: "Vitalis Health Systems",
      category: "Healthcare & AI",
      desc: "Engineered a secure, HIPAA-compliant multimodal diagnostic assistant supporting 2,400+ clinical practitioners.",
      metrics: "99.4% Accuracy Rate",
      impact: "3.5x Faster Triage Response",
      tags: ["Python", "PyTorch", "GCP", "Kubernetes"],
    },
    {
      title: "Distributed Global Commerce Engine",
      client: "AeroTech Retail",
      category: "Enterprise E-Commerce",
      desc: "Architected a headless multi-tenant storefront serving 4.5M monthly visitors with instantaneous static edge caching.",
      metrics: "99.999% Black Friday Uptime",
      impact: "42% Conversion Boost",
      tags: ["Next.js", "Redis", "Cloudflare Edge", "GraphQL"],
    },
  ];

  return (
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. SCROLL-DRIVEN WARP TUNNEL FRAME ANIMATION HERO */}
      <ScrollFrameHero onOpenConsultation={onOpenConsultation} />

      {/* 2. TELEMETRY & OBSERVABILITY TILE (Deep Obsidian #090a0c) */}
      <section className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-2">
              Telemetry &amp; Observability
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
              Engineered for 99.999% Availability.
            </h2>
            <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mt-3">
              Real-time telemetry, automated healing, and enterprise security guarantees built directly into our deployment pipeline.
            </p>
          </div>

          {/* Interactive Telemetry / Architecture Card */}
          <div className="rounded-[18px] bg-[#121316] border border-[#26272b] overflow-hidden apple-product-shadow">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#090a0c] border-b border-[#26272b]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="text-[12px] font-mono text-[#86868b] ml-3 hidden sm:inline">
                  codecrafters.mesh.internal (us-east-1 / NJ Edge)
                </span>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center space-x-1 bg-[#1e1f24] p-1 rounded-full border border-white/10">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-3 py-1 text-[12px] rounded-full font-mono transition-colors cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-[#0066cc] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white"
                  }`}
                >
                  Live Telemetry
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1 text-[12px] rounded-full font-mono transition-colors cursor-pointer ${
                    activeTab === "architecture"
                      ? "bg-[#0066cc] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white"
                  }`}
                >
                  Stack Definition
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 sm:p-8 font-mono text-[13px] bg-[#0c0d10]">
              {activeTab === "telemetry" ? (
                <div className="space-y-6">
                  {/* Grid Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-[11px] bg-[#141518] border border-[#26272b]">
                      <span className="text-[#86868b] block text-[11px] uppercase">Service Health</span>
                      <div className="flex items-center space-x-2 mt-1 text-[#27c93f] font-semibold text-[15px]">
                        <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                        <span>99.999% SLA</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-[11px] bg-[#141518] border border-[#26272b]">
                      <span className="text-[#86868b] block text-[11px] uppercase">P99 Latency</span>
                      <div className="text-[#2997ff] font-semibold text-[15px] mt-1">
                        &lt; 12.4 ms
                      </div>
                    </div>

                    <div className="p-4 rounded-[11px] bg-[#141518] border border-[#26272b]">
                      <span className="text-[#86868b] block text-[11px] uppercase">Microservices</span>
                      <div className="text-white font-semibold text-[15px] mt-1">
                        24 Active Pods
                      </div>
                    </div>

                    <div className="p-4 rounded-[11px] bg-[#141518] border border-[#26272b]">
                      <span className="text-[#86868b] block text-[11px] uppercase">Security Guard</span>
                      <div className="text-[#ffbd2e] font-semibold text-[15px] mt-1 flex items-center space-x-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span>SOC2 Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Log */}
                  <div className="p-4 rounded-[11px] bg-black border border-[#26272b] space-y-2 text-[#cccccc]">
                    <div className="flex items-center space-x-2 text-[#27c93f]">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>[READY] Cloud mesh active in Hillsborough, NJ region</span>
                    </div>
                    <div className="text-[#86868b] pl-5">
                      ➜ Autoscale policy active: 0 idle wait time • Zero cold starts
                    </div>
                    <div className="text-[#86868b] pl-5">
                      ➜ Distributed Edge Cache: Hit ratio 99.4% • Invalidation SLA: 0.8ms
                    </div>
                    <div className="text-[#2997ff] pl-5">
                      ✔ TLS 1.3 handshake verified • Mutual mTLS mesh encrypted
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-[#86868b]">{"// CodeCrafters Infrastructure as Code Blueprint"}</p>
                  <pre className="text-[#2997ff] overflow-x-auto text-[12px] leading-relaxed p-4 rounded-[11px] bg-black border border-[#26272b]">
{`export const CodeCraftersCloudStack = {
  region: "us-east-1 (Hillsborough, NJ Edge)",
  frontend: ["Next.js 14", "React 18", "TailwindCSS", "Edge CDN"],
  services: ["FastAPI", "Go Microservices", "GraphQL Gateway"],
  storage: ["PostgreSQL HA Cluster", "Redis Distributed Cache"],
  orchestration: ["Kubernetes EKS", "Terraform IaC", "ArgoCD GitOps"],
  security: ["Zero-Trust Mutual TLS", "SOC2 Type II", "Vault Secrets"]
};`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK MARQUEE */}
      <Client />

      {/* 4. CAPABILITIES (Pure Black Canvas with Dark Utility Cards) */}
      <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              Studio Capabilities
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
              Built for Scale. Engineered for Longevity.
            </h2>
            <p className="text-[17px] text-[#a1a1a6] mt-3">
              Explore how CodeCrafters delivers software craftsmanship across every technical tier.
            </p>
          </div>

          {/* Dark Utility Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="apple-utility-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[11px] bg-[#1e1f24] flex items-center justify-center text-[#2997ff]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[12px] text-[#86868b] font-normal">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-semibold text-white leading-[1.24] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-[#a1a1a6] leading-[1.43] mb-5">
                      {cap.desc}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-1.5 pt-4 border-t border-[#26272b] mb-5">
                      {cap.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center space-x-2 text-[12px] text-[#cccccc]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2997ff] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={cap.path}
                      className="apple-link text-[14px]"
                    >
                      <span>Explore details</span>
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES (Deep Black Canvas #0c0d10) */}
      <section className="bg-[#0c0d10] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-2">
                Production Case Studies
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10]">
                Proven Impact in Production.
              </h2>
            </div>
            <Link
              to="/contact"
              className="apple-link text-[14px]"
            >
              <span>Request custom architectural assessment</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="rounded-[18px] bg-[#141518] border border-[#26272b] p-6 flex flex-col justify-between hover:border-[#383940] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[12px] text-[#86868b] mb-3">
                    <span className="text-[#2997ff]">{study.category}</span>
                    <span>{study.client}</span>
                  </div>

                  <h3 className="text-[17px] font-semibold text-white leading-[1.24] mb-3">
                    {study.title}
                  </h3>

                  <p className="text-[14px] text-[#a1a1a6] leading-[1.43] mb-6">
                    {study.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3 rounded-[11px] bg-black border border-[#26272b] mb-6">
                    <div>
                      <span className="block text-[10px] text-[#86868b] uppercase">Latency</span>
                      <span className="text-[13px] font-semibold text-white">{study.metrics}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-[#86868b] uppercase">Scale</span>
                      <span className="text-[13px] font-semibold text-[#2997ff]">{study.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#26272b]">
                  {study.tags.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-[5px] bg-black text-[#cccccc] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE CODECRAFTERS STANDARD (Pure Black Canvas #000000) */}
      <section className="bg-black py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
                Engineering Discipline
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-4">
                The CodeCrafters Standard.
              </h2>
              <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mb-8">
                We believe exceptional software requires rigorous engineering discipline, obsessive latency optimization, and absolute intellectual property transparency.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-[11px] border border-[#26272b] bg-[#121316]">
                  <h4 className="text-[17px] font-semibold text-white leading-snug">
                    01. Zero Technical Debt Guarantee
                  </h4>
                  <p className="text-[14px] text-[#a1a1a6] mt-1">
                    Every pull request undergoes strict automated linting, type validation, and 90%+ code coverage tests before merging.
                  </p>
                </div>

                <div className="p-4 rounded-[11px] border border-[#26272b] bg-[#121316]">
                  <h4 className="text-[17px] font-semibold text-white leading-snug">
                    02. 14-Day Sprint Cadence
                  </h4>
                  <p className="text-[14px] text-[#a1a1a6] mt-1">
                    Bi-weekly demo rollouts with production preview environments, giving your team tangible software from sprint one.
                  </p>
                </div>

                <div className="p-4 rounded-[11px] border border-[#26272b] bg-[#121316]">
                  <h4 className="text-[17px] font-semibold text-white leading-snug">
                    03. 100% Intellectual Property Transfer
                  </h4>
                  <p className="text-[14px] text-[#a1a1a6] mt-1">
                    Full source code, cloud credentials, infrastructure automation, and documentation belong exclusively to your firm.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Studio Commitment */}
            <div className="rounded-[18px] bg-[#121316] text-white p-8 sm:p-10 border border-[#26272b] apple-product-shadow">
              <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-2">
                Hillsborough, NJ Studio
              </span>
              <h3 className="text-[28px] font-semibold text-white leading-tight mb-4">
                Senior Engineering Leadership on Every Build.
              </h3>
              <p className="text-[14px] text-[#a1a1a6] leading-relaxed mb-6">
                Direct Slack channel communication with senior US-based software architects who write code, attend sprint demos, and align with your business objectives.
              </p>

              <div className="pt-4 border-t border-[#26272b] space-y-2 text-[12px] text-[#cccccc]">
                <div className="flex justify-between">
                  <span className="text-[#86868b]">Headquarters</span>
                  <span className="text-white font-medium">Hillsborough, NJ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#86868b]">Average Sprint Cycle</span>
                  <span className="text-white font-medium">14 Calendar Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#86868b]">Target System Uptime</span>
                  <span className="text-[#27c93f] font-medium">99.999% SLA</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="apple-btn-primary w-full"
                >
                  Schedule Architectural Discovery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER */}
      <TestimonialSlider />

      {/* 8. FINAL INVITATION TILE (Pure Black) */}
      <section className="bg-black py-20 sm:py-28 text-center px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[768px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            Start a Conversation
          </span>
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-4">
            Have a Mission-Critical System to Build?
          </h2>
          <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mb-8">
            Connect directly with our lead architects in Hillsborough, NJ to evaluate your requirements and map an engineering delivery schedule.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary"
            >
              Schedule Consultation
            </button>
            <Link
              to="/contact"
              className="apple-btn-secondary"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
