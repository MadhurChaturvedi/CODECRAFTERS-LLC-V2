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
  ArrowRight, 
  Calculator, 
  Sparkles, 
  Terminal, 
  Layers, 
  Zap, 
  Clock, 
  Users 
} from "lucide-react";

export default function Services({ onOpenConsultation }) {
  // Project Estimator State
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
        "We build blazing-fast, resilient web applications that handle millions of requests without breaking a sweat. Built on modular micro-frontend and microservice architectures with sub-20ms edge latency.",
      deliverables: [
        "Single-Page & Server-Side Rendered Apps (React 18 / Next.js)",
        "High-performance REST & GraphQL API Gateways",
        "Distributed database design (PostgreSQL, MongoDB, Redis)",
        "Real-time Websocket pipelines & streaming dashboards",
        "Continuous automated unit & end-to-end test coverage",
      ],
      stack: ["React", "Next.js", "Node.js", "Python FastAPI", "PostgreSQL", "Redis"],
    },
    {
      id: "cloud",
      title: "Cloud Architecture & DevOps Automation",
      icon: Cloud,
      subtitle: "Multi-region AWS, GCP & Azure infrastructure",
      description:
        "Transform messy server setups into resilient, auto-scaling Kubernetes clusters with zero-downtime CI/CD pipelines. We architect infrastructure as code (IaC) to ensure rapid disaster recovery and cost efficiency.",
      deliverables: [
        "Kubernetes (EKS/GKE) orchestration and microservices",
        "Terraform & Pulumi Infrastructure-as-Code automation",
        "GitHub Actions & ArgoCD automated zero-downtime deployments",
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
        "Move beyond raw prompts. We engineer dependable, enterprise-secure AI pipelines utilizing retrieval-augmented generation (RAG), vector databases, and multi-agent reasoning systems that integrate with your proprietary data.",
      deliverables: [
        "Custom RAG architectures with Pinecone, Qdrant & pgvector",
        "Multi-agent task orchestration frameworks (LangChain / LlamaIndex)",
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
        "Deliver delightful, silky-smooth mobile experiences that users love. Utilizing React Native and native iOS (Swift) / Android (Kotlin) modules, we ship cohesive cross-platform apps with shared logic and native performance.",
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
      title: "UI/UX & Comprehensive Design Systems",
      icon: Palette,
      subtitle: "Human-centered product design & design tokens",
      description:
        "Exceptional engineering deserves exceptional aesthetics. Our design squad crafts pixel-perfect user journeys, accessible components, and unified Figma design systems that bridge the gap between design and production code.",
      deliverables: [
        "Interactive wireframes, user journeys & high-fidelity prototypes",
        "Reusable design systems with standardized token libraries",
        "WCAG 2.1 AA accessibility compliance audits",
        "User testing, behavioral analytics & friction reduction",
        "Zero-gap handoff to frontend engineering pods",
      ],
      stack: ["Figma", "Design Tokens", "TailwindCSS", "Storybook", "Framer"],
    },
    {
      id: "security",
      title: "Cybersecurity & Infrastructure Audits",
      icon: ShieldCheck,
      subtitle: "Penetration testing, SOC2 preparation & hardening",
      description:
        "Protect your enterprise reputation and client data. We perform comprehensive codebase vulnerability scans, cloud IAM least-privilege audits, and zero-trust perimeter hardening to prepare your systems for enterprise compliance.",
      deliverables: [
        "Full-stack web and API penetration testing",
        "AWS/GCP IAM security posture review & credential rotation",
        "SOC2 Type II, HIPAA & GDPR readiness assessments",
        "Encrypted secrets management (HashiCorp Vault / AWS Secrets)",
        "Third-party dependency & supply chain vulnerability audits",
      ],
      stack: ["Zero-Trust", "Vault", "SonarQube", "OWASP", "CloudTrail", "TLS 1.3"],
    },
  ];

  // Dynamic estimate calculator
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
      sprints: `${Math.ceil(baseWeeks / 2)} Two-Week Sprints`,
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER HERO */}
      <section className="pt-16 pb-20 bg-slate-50/80 border-b border-slate-200/80 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800 mb-6">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>CodeCrafters LLC Engineering Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Enterprise Digital Capabilities,{" "}
            <span className="text-gradient-blue">Crafted with Precision</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            From modern web platforms to multi-region cloud migrations and private AI pipelines, our Hillsborough, NJ engineering studio delivers robust, production-grade solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all text-sm flex items-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Request Custom Proposal</span>
            </button>
            <a
              href="#estimator"
              className="px-6 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all text-sm flex items-center space-x-2"
            >
              <Calculator className="w-4 h-4 text-slate-400" />
              <span>Interactive Scope Estimator</span>
            </a>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES BREAKDOWN */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicePillars.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-10 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Description */}
                <div className="lg:w-1/2 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Engineering Pillar 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                      {service.title}
                    </h2>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Production Deliverables Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIndex) => (
                        <li key={dIndex} className="flex items-start space-x-2.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={onOpenConsultation}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Stack & Architecture Box */}
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="text-xs font-mono text-blue-400 font-bold">
                        // CORE TECHNOLOGY STACK
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        PRODUCTION-PROVEN
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {service.stack.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center space-x-2 text-xs font-medium text-slate-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-400 leading-relaxed">
                      <div className="text-emerald-400 mb-1">
                        ✔ Zero technical debt guarantee
                      </div>
                      <div>
                        Dedicated US-based senior engineering squad from Hillsborough, NJ with transparent daily PR reviews and 90%+ automated test suites.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR SECTION */}
      <section id="estimator" className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Self-Serve Scope Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Estimate Your Project Timeline &amp; Budget
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select your specifications below to generate a transparent ballpark timeline and sprint allocation.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls */}
              <div className="lg:col-span-2 space-y-6">
                {/* 1. Project Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    1. Primary Technology Area
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "web", name: "Web Application" },
                      { id: "cloud", name: "Cloud & DevOps" },
                      { id: "ai", name: "Enterprise AI / RAG" },
                      { id: "mobile", name: "Mobile iOS / Android" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProjectType(item.id)}
                        className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          projectType === item.id
                            ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-sm"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Scale / Complexity */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    2. Scope &amp; Complexity
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "mvp", name: "MVP Prototyping", desc: "Fast launch" },
                      { id: "growth", name: "Growth Scale", desc: "Production core" },
                      { id: "enterprise", name: "Enterprise Suite", desc: "High scale" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setScale(item.id)}
                        className={`p-3 rounded-xl text-left border text-xs transition-all ${
                          scale === item.id
                            ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-sm"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <div className="font-bold">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline Urgency */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    3. Delivery Speed
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "standard", name: "Standard Agile Cadence", desc: "Regular 2-week sprints" },
                      { id: "rapid", name: "Fast-Track Acceleration", desc: "Dedicated squad sprint" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTimeline(item.id)}
                        className={`p-3 rounded-xl text-left border text-xs transition-all ${
                          timeline === item.id
                            ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-sm"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <div className="font-bold">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Card */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between border border-slate-800 shadow-lg">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                    ESTIMATED PROJECTION
                  </span>
                  <h3 className="text-xl font-bold">Estimated Parameters</h3>

                  <div className="mt-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[10px] uppercase text-slate-400 block font-mono">
                        Target Timeline
                      </span>
                      <span className="text-lg font-bold text-white mt-0.5 block">
                        {estimate.weeks}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[10px] uppercase text-slate-400 block font-mono">
                        Ballpark Range
                      </span>
                      <span className="text-xl font-extrabold text-blue-400 mt-0.5 block">
                        {estimate.budget}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <span className="text-[10px] uppercase text-slate-400 block font-mono">
                        Sprint Breakdown
                      </span>
                      <span className="text-sm font-bold text-slate-200 mt-0.5 block">
                        {estimate.sprints}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-500/25 transition-all text-xs flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Confirm Scope With Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Non-binding preliminary estimate • Free NDA provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Flexible Collaboration
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How We Partner With Your Organization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Engineering Squad</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                A cross-functional pod (Lead Architect, Senior Full-Stack Engineers, QA Engineer) dedicated 100% to executing your backlog.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Full integration with your Slack &amp; Jira</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Predictable monthly billing</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50/20 shadow-md flex flex-col justify-between relative">
            <span className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fixed-Scope Product Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Guaranteed delivery of an agreed-upon roadmap, milestone by milestone. Perfect for MVPs, major re-architectures, or greenfield systems.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-4 border-t border-blue-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Fixed budget and locked timeline</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Milestone-based signoff</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advisory &amp; Cloud Architecture Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Deep-dive diagnostic into your existing architecture, database queries, security posture, and cloud bills with an actionable remediation playbook.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>2-week intensive assessment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Full architecture blueprint report</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
