import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Layers, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Client from "../Components/Client";
import TestimonialSlider from "../Components/TestimonialSlider";

function Hero({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState("telemetry");

  const capabilities = [
    {
      title: "Custom Web & Enterprise Platforms",
      desc: "High-throughput React, Next.js, and Node/Python architectures built with modular micro-frontends and sub-millisecond response times.",
      icon: Code2,
      tag: "Full-Stack Development",
      features: ["React 18 & Next.js", "GraphQL & REST APIs", "Ultra-High Scalability"],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Multi-region AWS, GCP, and Azure cloud architectures automated with Terraform, Docker containers, and zero-downtime Kubernetes CI/CD.",
      icon: Cloud,
      tag: "Cloud-Native",
      features: ["Kubernetes (EKS/GKE)", "Terraform IaC", "99.999% High Availability"],
    },
    {
      title: "Enterprise AI & Intelligent Agents",
      desc: "Production-ready LLM pipelines, autonomous reasoning agents, vector embeddings, and RAG architectures integrated into your enterprise workflows.",
      icon: Cpu,
      tag: "Artificial Intelligence",
      features: ["Custom LLM Workflows", "Vector Search & RAG", "Data Pipeline ETL"],
    },
    {
      title: "Mobile & Cross-Platform Suites",
      desc: "Sleek iOS and Android applications crafted with React Native and native Swift/Kotlin for silky-smooth 60fps mobile customer journeys.",
      icon: Smartphone,
      tag: "Mobile Apps",
      features: ["Offline-first Sync", "Native Performance", "Push Notification Hub"],
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Pixel-perfect, accessible user interfaces built on cohesive Figma design systems that turn complex technical workflows into intuitive simplicity.",
      icon: Palette,
      tag: "Product Design",
      features: ["Design System Tokens", "Interactive Prototypes", "WCAG 2.1 Accessibility"],
    },
    {
      title: "Cybersecurity & Cloud Audits",
      desc: "Rigorous penetration testing, SOC2 compliance preparation, IAM privilege hardening, and encrypted zero-trust data protection.",
      icon: ShieldCheck,
      tag: "Security & Compliance",
      features: ["SOC2 & HIPAA Compliance", "Vulnerability Scanning", "Zero-Trust Access"],
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
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-grid-pattern">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Location & Status Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800 mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>CODECRAFTERS LLC</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-600 font-bold">Hillsborough, NJ</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Elite Engineering Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              We Engineer Resilient Software &amp;{" "}
              <span className="text-gradient-blue block sm:inline">
                Scalable Cloud Systems
              </span>
            </h1>

            {/* Type Animation Subhead */}
            <div className="h-10 sm:h-12 flex items-center justify-center text-lg sm:text-2xl font-bold text-slate-700 mb-6">
              <span className="text-slate-400 mr-2 font-mono text-base font-normal">Specialized in:</span>
              <TypeAnimation
                sequence={[
                  "Zero-Latency Microservices",
                  1800,
                  "Enterprise Cloud Architecture",
                  1800,
                  "High-Throughput Web Platforms",
                  1800,
                  "Autonomous AI & Agentic Systems",
                  1800,
                  "Mission-Critical Distributed Systems",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 font-mono"
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              CodeCrafters LLC is a high-velocity software engineering studio in Hillsborough, New Jersey. We partner with ambitious organizations to architect, build, and deploy production-grade digital infrastructure.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-xl shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 text-base cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-blue-200" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all flex items-center justify-center space-x-2 text-base"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Hero Architecture Graphic Showcase */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-blue-900/10 group">
              <img
                src="/hero-architecture.jpg"
                alt="CodeCrafters Cloud Architecture & Microservices Network"
                className="w-full h-[320px] sm:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-blue-400 font-mono mb-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE TOPOLOGY • CODECRAFTERS CLOUD MESH</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      Zero-Latency Microservices &amp; Edge Telemetry
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl hidden sm:block">
                      Architected with active-active Kubernetes clusters, distributed Redis caches, and real-time Kafka event streams.
                    </p>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    <span>Deploy Similar Infrastructure</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Hero Architecture / Telemetry Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
              {/* Card Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-3">
                    codecrafters-cluster-v2.hillsborough.internal
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-3 py-1 text-xs rounded-md font-mono transition-colors ${
                      activeTab === "telemetry"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Live Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-3 py-1 text-xs rounded-md font-mono transition-colors ${
                      activeTab === "architecture"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Stack Architecture
                  </button>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="p-6 sm:p-8 bg-slate-950 text-slate-200 font-mono text-xs">
                {activeTab === "telemetry" ? (
                  <div className="space-y-6">
                    {/* Status Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px] uppercase">Service Health</span>
                        <div className="flex items-center space-x-1.5 mt-1 text-emerald-400 font-bold text-sm">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>99.999% SLA</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px] uppercase">P99 Latency</span>
                        <div className="mt-1 text-blue-400 font-bold text-sm">
                          12.4 ms
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px] uppercase">Cluster Nodes</span>
                        <div className="mt-1 text-purple-400 font-bold text-sm">
                          24 Microservices
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[10px] uppercase">Encrypted Guard</span>
                        <div className="mt-1 text-amber-400 font-bold text-sm flex items-center space-x-1">
                          <ShieldCheck className="w-4 h-4" />
                          <span>SOC2 Compliant</span>
                        </div>
                      </div>
                    </div>

                    {/* Terminal Stream */}
                    <div className="p-4 rounded-xl bg-black/60 border border-slate-800 space-y-2 text-slate-300">
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>[READY] Cluster initialized in us-east-1 (N. Virginia &amp; NJ Edge Hub)</span>
                      </div>
                      <div className="text-slate-400 pl-5">
                        ➜ Autoscale policy active: 0 idle wait time • Zero cold starts enabled
                      </div>
                      <div className="text-slate-400 pl-5">
                        ➜ Redis Distributed Cache: Hit ratio 99.4% • Invalidation: 0.8ms
                      </div>
                      <div className="text-blue-400 pl-5">
                        ✔ Security scan passed: 0 vulnerabilities found • TLS 1.3 verified
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-slate-400">
                      // CodeCrafters Modular Architecture Pattern
                    </p>
                    <pre className="text-blue-300 overflow-x-auto text-[11px] leading-relaxed">
{`export const CodeCraftersCloudStack = {
  region: "us-east-1 (Hillsborough, NJ Edge)",
  frontend: ["Next.js 14", "React 18", "TailwindCSS", "Edge CDN"],
  services: ["FastAPI", "Go Microservices", "GraphQL Gateway"],
  storage: ["PostgreSQL HA Cluster", "Redis Distributed Cache"],
  orchestration: ["Kubernetes EKS", "Terraform IaC", "Argocd GitOps"],
  security: ["Zero-Trust Mutual TLS", "SOC2 Type II", "Vault Secrets"]
};`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">250+</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Production Systems Shipped</p>
            </div>
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">99.999%</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Historical Uptime Reliability</p>
            </div>
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">&lt;14ms</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Average Service Latency</p>
            </div>
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">$45M+</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Client Business Value Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <Client />

      {/* CAPABILITIES / SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Cycle Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End Capabilities Built for Velocity
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From high-traffic web applications to automated multi-region cloud clusters, our squad delivers exceptional craftsmanship at every layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                      {cap.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center space-x-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Production Deployments</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Case Studies
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Real engineering challenges, robust architectural solutions, measurable results.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
            >
              <span>Request Custom Architecture Plan</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {study.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {study.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Technical Metric</span>
                      <span className="text-xs font-bold text-slate-900">{study.metrics}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">Business Value</span>
                      <span className="text-xs font-bold text-emerald-600">{study.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CODECRAFTERS ADVANTAGE */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>The CodeCrafters Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Industry Leaders Choose Our Hillsborough Studio
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                We believe that software craftsmanship requires more than just writing code. It demands deep architectural discipline, obsessive latency optimization, and radical transparency.
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Technical Debt Guarantee</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Every pull request is reviewed with strict automated linting, test suites with 90%+ code coverage, and static security analysis.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Rapid Sprint Velocity</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Two-week iterative release cadences with continuous demo environments so you see functional production software from day one.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Intellectual Property Transfer</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Full source code, architectural documentation, CI/CD pipelines, and cloud credentials remain exclusively your property upon handoff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span>Hillsborough, NJ Headquarters</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  High-Touch Executive Collaboration
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Unlike traditional offshore outsourcing, CodeCrafters LLC operates with US-based engineering leadership, direct Slack channels, daily standups, and transparent Jira roadmaps.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Headquarters</span>
                    <span className="text-white font-semibold">Hillsborough, NJ, USA</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Average Sprint Cadence</span>
                    <span className="text-white font-semibold">14 Calendar Days</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Standard SLA</span>
                    <span className="text-emerald-400 font-semibold">99.99% Global Uptime</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-500/30 transition-all text-sm cursor-pointer"
                  >
                    Schedule Architectural Discovery Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <TestimonialSlider />

      {/* BOTTOM CONVERSION BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 sm:p-16 shadow-2xl overflow-hidden text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase">
                Let's Build Together
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Have a Complex Digital System to Build?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Connect directly with our lead architects in Hillsborough, NJ to evaluate your tech stack, scope requirements, and map your delivery roadmap.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-blue-700 bg-white hover:bg-blue-50 active:scale-95 shadow-xl transition-all text-base cursor-pointer"
                >
                  Start Consultation Now
                </button>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-blue-800/60 hover:bg-blue-800/80 border border-white/20 transition-all text-base"
                >
                  Visit Office / Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
