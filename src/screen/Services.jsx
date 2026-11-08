import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Cloud, 
  Cpu, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight 
} from "lucide-react";

export default function Services({ onOpenConsultation }) {
  const [projectType, setProjectType] = useState("web");
  const [scale, setScale] = useState("growth");
  const [timeline, setTimeline] = useState("standard");

  const servicePillars = [
    {
      id: "web",
      title: "Custom Web & Distributed Systems",
      icon: Code2,
      subtitle: "High-throughput React, Next.js, Node.js & Python platforms",
      description:
        "We build resilient web platforms engineered to handle high concurrent load with sub-millisecond edge response times. Architected on modular micro-frontends with clean API gateways.",
      deliverables: [
        "Server-Side Rendered Next.js & React 18 Frontends",
        "High-performance REST & GraphQL API Gateways",
        "Distributed Database Clusters (PostgreSQL, Redis)",
        "Real-time WebSocket event streaming",
        "Automated unit & end-to-end test suites (90%+ coverage)",
      ],
      stack: ["React 18", "Next.js", "Node.js", "Python FastAPI", "PostgreSQL", "Redis"],
    },
    {
      id: "cloud",
      title: "Cloud Architecture & DevOps Automation",
      icon: Cloud,
      subtitle: "Multi-region AWS, GCP & Azure infrastructure",
      description:
        "Transform messy server setups into automated, multi-region Kubernetes clusters with zero-downtime CI/CD pipelines. We architect infrastructure as code (IaC) to guarantee 99.999% reliability.",
      deliverables: [
        "Kubernetes (EKS/GKE) cluster orchestration",
        "Terraform & Pulumi Infrastructure-as-Code definitions",
        "Zero-downtime GitHub Actions & ArgoCD GitOps pipelines",
        "AWS/GCP Cloud cost optimization & right-sizing",
        "24/7 Datadog & Prometheus telemetry, tracing & alerting",
      ],
      stack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "ArgoCD"],
    },
    {
      id: "ai",
      title: "Enterprise AI & Autonomous Agents",
      icon: Cpu,
      subtitle: "Production-grade LLMs, RAG & domain-specific automation",
      description:
        "Move beyond raw prompts. We build secure, enterprise-grade AI pipelines utilizing retrieval-augmented generation (RAG), vector embeddings, and autonomous multi-agent reasoning systems.",
      deliverables: [
        "Custom RAG architectures with Pinecone & pgvector",
        "Multi-agent reasoning frameworks (LangChain / LlamaIndex)",
        "Proprietary data ingestion, chunking & semantic search",
        "Private on-prem / VPC model deployment & token cost controls",
        "Automated evaluation suites & hallucination guards",
      ],
      stack: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "PyTorch", "FastAPI"],
    },
    {
      id: "mobile",
      title: "Mobile & Cross-Platform Applications",
      icon: Smartphone,
      subtitle: "Native-grade iOS & Android applications",
      description:
        "Deliver delightful, silky-smooth mobile experiences. Utilizing React Native and native iOS (Swift) / Android (Kotlin) modules, we ship cohesive cross-platform applications with 60fps performance.",
      deliverables: [
        "Cross-platform iOS and Android mobile codebases",
        "Offline-first synchronization with SQLite and WatermelonDB",
        "Push notifications, deep linking & biometric authentication",
        "In-app subscriptions & Stripe payment processing",
        "Automated App Store & Google Play release pipelines",
      ],
      stack: ["React Native", "Expo", "Swift", "Kotlin", "SQLite", "Firebase"],
    },
    {
      id: "design",
      title: "Design Systems & UI Engineering",
      icon: Palette,
      subtitle: "Human-centered product design & design tokens",
      description:
        "Exceptional engineering deserves exceptional aesthetics. Our design squad crafts accessible interfaces, unified component tokens, and frictionless user flows.",
      deliverables: [
        "Interactive wireframes & high-fidelity prototypes",
        "Reusable design systems with standardized token libraries",
        "WCAG 2.1 AA accessibility compliance audits",
        "User testing & behavioral analytics",
        "Seamless handoff to frontend engineering pods",
      ],
      stack: ["Figma", "Design Tokens", "TailwindCSS", "Storybook"],
    },
    {
      id: "security",
      title: "Cybersecurity & Hardened Audits",
      icon: ShieldCheck,
      subtitle: "Penetration testing, SOC2 preparation & hardening",
      description:
        "Protect your enterprise reputation and client data. We perform comprehensive codebase vulnerability scans, cloud IAM least-privilege audits, and zero-trust perimeter hardening.",
      deliverables: [
        "Full-stack web and API penetration testing",
        "AWS/GCP IAM security posture review & credential rotation",
        "SOC2 Type II, HIPAA & GDPR readiness assessments",
        "Encrypted secrets management (HashiCorp Vault / AWS Secrets)",
        "Supply chain & dependency vulnerability audits",
      ],
      stack: ["Zero-Trust", "Vault", "OWASP", "CloudTrail", "TLS 1.3"],
    },
  ];

  const calculateEstimate = () => {
    let baseWeeks = 6;
    let baseCost = 15;

    if (projectType === "mobile") {
      baseWeeks += 2;
      baseCost += 5;
    } else if (projectType === "ai") {
      baseWeeks += 4;
      baseCost += 10;
    } else if (projectType === "cloud") {
      baseWeeks += 1;
      baseCost += 3;
    }

    if (scale === "mvp") {
      baseWeeks = Math.max(4, baseWeeks - 2);
      baseCost = Math.max(10, baseCost - 5);
    } else if (scale === "enterprise") {
      baseWeeks += 6;
      baseCost += 20;
    }

    if (timeline === "rapid") {
      baseWeeks = Math.max(3, Math.round(baseWeeks * 0.7));
      baseCost = Math.round(baseCost * 1.2);
    }

    return {
      weeks: `${baseWeeks} - ${baseWeeks + 3} Weeks`,
      budget: `$${baseCost}k - $${baseCost + 15}k`,
      sprints: `${Math.ceil(baseWeeks / 2)} Sprints (14-day cycles)`,
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-black text-[#f5f5f7]">
      {/* 1. SERVICES HERO TILE (Pure Black) */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32 text-center px-4 sm:px-6 bg-black">
        <div className="max-w-[1024px] mx-auto">
          <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
            CodeCrafters Capabilities
          </span>
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.07] tracking-[-0.28px] max-w-3xl mx-auto mb-4">
            Enterprise Digital Capabilities. Crafted with Precision.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-white/80 font-normal leading-[1.2] max-w-2xl mx-auto mb-8">
            From modern web platforms to multi-region cloud migrations and enterprise AI agents.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="apple-btn-primary"
            >
              Request Custom Proposal
            </button>
            <a
              href="#estimator"
              className="apple-btn-secondary"
            >
              Interactive Scope Estimator
            </a>
          </div>
        </div>
      </section>

      {/* 2. ALTERNATING FULL-BLEED SERVICE TILES IN BLACK & OBSIDIAN */}
      <div>
        {servicePillars.map((service, idx) => {
          const Icon = service.icon;
          const isDarker = idx % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24] ${
                isDarker ? "bg-[#090a0c]" : "bg-black"
              }`}
            >
              <div className="max-w-[1024px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center space-x-2 text-[12px] font-mono mb-3">
                      <span className="text-[#2997ff]">
                        PILLAR 0{idx + 1}
                      </span>
                      <span className="text-[#6e6e73]">•</span>
                      <span className="text-[#a1a1a6]">
                        {service.subtitle}
                      </span>
                    </div>

                    <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-4">
                      {service.title}
                    </h2>

                    <p className="text-[17px] text-[#a1a1a6] leading-[1.47] mb-8">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 mb-8">
                      <h4 className="text-[14px] font-semibold text-white mb-3">
                        Production Deliverables:
                      </h4>
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start space-x-2 text-[14px]">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2997ff]" />
                          <span className="text-[#cccccc]">
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={onOpenConsultation}
                        className="apple-link text-[14px] cursor-pointer"
                      >
                        <span>Schedule discovery for this pillar</span>
                        <ChevronRight className="w-4 h-4 ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Stack Card */}
                  <div className="rounded-[18px] p-8 apple-product-shadow bg-[#121316] border border-[#26272b] text-white">
                    <div className="flex items-center justify-between pb-4 border-b border-[#26272b] mb-6">
                      <div className="flex items-center space-x-2.5">
                        <Icon className="w-5 h-5 text-[#2997ff]" />
                        <span className="text-[14px] font-semibold">Core Stack</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#86868b]">
                        PRODUCTION READY
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {service.stack.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="p-3 rounded-[8px] text-[13px] font-medium flex items-center space-x-2 bg-[#18191d] border border-[#26272b] text-white"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-[11px] text-[12px] leading-relaxed bg-black border border-[#26272b] text-[#a1a1a6]">
                      <span className="font-semibold block mb-0.5 text-white">
                        Direct Senior Architect Review
                      </span>
                      Managed by our Hillsborough, NJ studio with daily PR reviews, automated linting, and 100% intellectual property ownership upon completion.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. INTERACTIVE PROJECT ESTIMATOR */}
      <section id="estimator" className="bg-[#090a0c] py-20 sm:py-28 px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              Scope Estimator
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.10] mb-3">
              Estimate Your Delivery Schedule.
            </h2>
            <p className="text-[17px] text-[#a1a1a6]">
              Select your specifications below for a transparent, ballpark scope assessment.
            </p>
          </div>

          <div className="bg-[#121316] rounded-[18px] border border-[#26272b] p-8 sm:p-10 apple-product-shadow">
            <div className="space-y-8">
              {/* 1. Technology Area */}
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                  1. Primary Technology Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "web", name: "Web Platform" },
                    { id: "cloud", name: "Cloud & DevOps" },
                    { id: "ai", name: "Enterprise AI" },
                    { id: "mobile", name: "Mobile App" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-3 rounded-full text-[13px] text-center transition-all cursor-pointer active:scale-95 ${
                        projectType === item.id
                          ? "bg-[#0066cc] text-white font-medium"
                          : "bg-[#18191d] text-[#cccccc] border border-[#26272b] hover:border-[#383940]"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Complexity */}
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                  2. Scope &amp; Complexity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "mvp", name: "MVP Prototype", desc: "Rapid 4-6 week sprint" },
                    { id: "growth", name: "Growth Scale", desc: "Production core platform" },
                    { id: "enterprise", name: "Enterprise Mesh", desc: "Multi-region cluster" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id)}
                      className={`p-3.5 rounded-[14px] text-left transition-all cursor-pointer active:scale-95 ${
                        scale === item.id
                          ? "border-2 border-[#2997ff] bg-[#18191d]"
                          : "border border-[#26272b] bg-[#141518] hover:border-[#383940]"
                      }`}
                    >
                      <div className="text-[14px] font-semibold text-white">{item.name}</div>
                      <div className="text-[12px] text-[#86868b]">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Timeline */}
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                  3. Delivery Urgency
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "standard", name: "Standard Cadence", desc: "Normal sprint pace" },
                    { id: "rapid", name: "Accelerated Sprint", desc: "Dedicated squad" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeline(item.id)}
                      className={`p-3.5 rounded-[14px] text-left transition-all cursor-pointer active:scale-95 ${
                        timeline === item.id
                          ? "border-2 border-[#2997ff] bg-[#18191d]"
                          : "border border-[#26272b] bg-[#141518] hover:border-[#383940]"
                      }`}
                    >
                      <div className="text-[14px] font-semibold text-white">{item.name}</div>
                      <div className="text-[12px] text-[#86868b]">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="p-6 rounded-[14px] bg-black border border-[#26272b] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-mono text-[#2997ff] uppercase block">
                    Estimated Timeline &amp; Budget
                  </span>
                  <div className="text-[28px] font-semibold tracking-tight mt-1 text-white">
                    {estimate.budget}
                  </div>
                  <div className="text-[13px] text-[#a1a1a6] mt-0.5">
                    {estimate.weeks} • {estimate.sprints}
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="apple-btn-primary shrink-0 !py-[10px] !px-[20px] !text-[14px]"
                >
                  Book Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER INVITATION TILE */}
      <section className="bg-black py-20 text-center px-4 sm:px-6 border-t border-[#1e1f24]">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-white mb-3">
            Ready to Scope Your System?
          </h2>
          <p className="text-[17px] text-[#a1a1a6] mb-6">
            Our Hillsborough, NJ engineering squad is ready to review your architecture.
          </p>
          <button
            onClick={onOpenConsultation}
            className="apple-btn-primary"
          >
            Start Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
