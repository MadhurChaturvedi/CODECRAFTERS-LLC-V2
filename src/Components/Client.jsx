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
    { name: "Kubernetes & Docker", category: "Containerization", icon: Layers },
    { name: "PostgreSQL & Redis", category: "High-Throughput Data", icon: Database },
    { name: "OpenAI & Anthropic", category: "Agentic AI", icon: Cpu },
    { name: "React & Next.js", category: "Modern Frontend", icon: Workflow },
    { name: "Python & FastAPI", category: "Backend Microservices", icon: Terminal },
    { name: "Zero-Trust Security", category: "Enterprise Compliance", icon: Shield },
  ];

  return (
    <section className="py-14 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          POWERING MISSION-CRITICAL ARCHITECTURES WITH MODERN ENTERPRISE TECH
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-2">
          {[...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center space-x-3 px-5 py-3 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 group shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </span>
                  <span className="block text-[10px] font-medium text-slate-400">
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
