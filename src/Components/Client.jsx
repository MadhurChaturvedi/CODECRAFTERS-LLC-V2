import React from "react";
import { 
  Cloud, 
  Cpu, 
  Database, 
  Layers, 
  Terminal, 
  Server, 
  Workflow, 
  Shield 
} from "lucide-react";

function Client() {
  const technologies = [
    { name: "Amazon Web Services", category: "Cloud Infrastructure", icon: Cloud },
    { name: "Google Cloud Platform", category: "Distributed Systems", icon: Server },
    { name: "Kubernetes & Docker", category: "Container Orchestration", icon: Layers },
    { name: "PostgreSQL & Redis", category: "High-Throughput Data", icon: Database },
    { name: "OpenAI & Anthropic", category: "Enterprise AI & RAG", icon: Cpu },
    { name: "React & Next.js", category: "Modern Web Frontends", icon: Workflow },
    { name: "Python & FastAPI", category: "Backend Microservices", icon: Terminal },
    { name: "Zero-Trust Security", category: "SOC2 Compliance", icon: Shield },
  ];

  return (
    <section className="py-12 bg-black border-y border-[#1e1f24] overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-[#86868b]">
          Verified Production Stack &amp; Infrastructure Ecosystem
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-4 py-1">
          {[...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-[11px] bg-[#121316] border border-[#26272b] shrink-0"
              >
                <div className="w-7 h-7 rounded-[8px] bg-[#1c1d22] text-[#2997ff] flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[14px] font-semibold text-white">
                    {tech.name}
                  </span>
                  <span className="block text-[11px] text-[#86868b]">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Client;
